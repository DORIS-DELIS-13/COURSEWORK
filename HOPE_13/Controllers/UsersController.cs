using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using HOPE_13.Data;
using HOPE_13.Dtos;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HOPE_13.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
         private readonly IUserRepository _repo;
        private readonly IMapper _mapper;

        public UsersController(IUserRepository repo, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repo;
        }

        [HttpGet("{id}", Name = "GetUser")]
        public async Task<IActionResult> GetUser(int id)
        {
            var isCurrentUser = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value) == id;
            
            var user = await _repo.GetUser(id, isCurrentUser);

            var userToReturn = _mapper.Map<UserForDetailedDto>(user);

            return Ok(userToReturn);
        }
        // [HttpGet]
        // public async Task<IActionResult> GetUsers()
        // {
        //     var currentUserId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);

        //     var userFromRepo = await _repo.GetUser(currentUserId, true);
}
}