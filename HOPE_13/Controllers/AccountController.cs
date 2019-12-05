using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using HOPE_13.Data;
using HOPE_13.Dtos;
using HOPE_13.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace HOPE_13.Controllers
{
  [AllowAnonymous]
  [Route("api/[controller]")]
  [ApiController]
  public class AccountController : ControllerBase
  {
    private readonly IAuthRepository _repo;
    private readonly IConfiguration _config;
    private readonly UserManager<User> _userManager;
    private readonly SignInManager<User> _signInManager;
    private readonly IMapper _mapper;

    public AccountController(IConfiguration config, UserManager<User> userManager,
      SignInManager<User> signInManager, IMapper mapper)
    {
      _mapper = mapper;
      _config = config;
      _userManager = userManager;
      _signInManager = signInManager;
    }
    [HttpPost("register")]
    public async Task<IActionResult> Register(UserForRegisterDto userForRegisterDto)
    {
      // валідація 
            var userToCreate = _mapper.Map<User>(userForRegisterDto);

            var result = await _userManager.CreateAsync(userToCreate, userForRegisterDto.Password);

            var userToReturn = _mapper.Map<UserForDetailedDto>(userToCreate);

            if (result.Succeeded)
            {
                return CreatedAtRoute("GetUser", 
                    new { controller = "Users", id = userToCreate.Id }, userToReturn);
            }

            return BadRequest(result.Errors);
    }
    [HttpPost("login")]
    public async Task<IActionResult> Login(UserForLoginDto userForLoginDto)
    {
      var user = await _userManager.FindByNameAsync(userForLoginDto.UserName);
      var result = await _signInManager.CheckPasswordSignInAsync(user, userForLoginDto.Password, false);
      if (result.Succeeded)
      {
        var appUser = await _userManager.Users.FirstOrDefaultAsync(u => u.NormalizedUserName == userForLoginDto.UserName.ToUpper());
        var userToReturn = _mapper.Map<UserForListDto>(appUser);
        return Ok(new
        {
          token = GenerateJWtToken(appUser),
          user = userToReturn // відправляю токен в response 
        });
      }
        return Unauthorized();
      //Створюю токен, який потім відправляєм юзеру, він буде мати 2-бітну інфу про юзера(username i password)
      //Так як токен валідований сервером без використання бд, сервер може заглянути всередину токена і отримати дані про юзера

    }
    private string GenerateJWtToken(User user)
    {
      var claims = new[]
      {
        new Claim(ClaimTypes.NameIdentifier,user.Id.ToString()),// NameIdentifier = id
        new Claim(ClaimTypes.Name,user.UserName)
      };
      var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config.GetSection("AppSettings:Token").Value));
      var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);
      //створюю токен
      var tokenDescriptor = new SecurityTokenDescriptor
      {
        Subject = new ClaimsIdentity(claims),
        Expires = DateTime.Now.AddDays(1),
        SigningCredentials = creds
      };
      //handler - дозволяє створювати token основаним на tokenDescriptor
      var tokenHandler = new JwtSecurityTokenHandler();

      var token = tokenHandler.CreateToken(tokenDescriptor);

      return tokenHandler.WriteToken(token);
    }
  }
}

