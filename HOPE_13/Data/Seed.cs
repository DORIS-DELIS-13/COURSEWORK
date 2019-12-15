using System.Collections.Generic;
using System.Linq;
using HOPE_13.Models;
using Microsoft.AspNetCore.Identity;
using Newtonsoft.Json;

namespace HOPE_13.Data
{
    public class Seed
    {
        private readonly DataContext _context;
        private readonly UserManager<User> _userManager;
        private readonly RoleManager<Role> _roleManager;

        public Seed(DataContext context, UserManager<User> userManager, RoleManager<Role> roleManager)
        {
            _context = context;
            _userManager = userManager;
            _roleManager = roleManager;
        }

        public void SeedTours()
        {
            var tourData = System.IO.File.ReadAllText("Data/tourSeedData.json");
            var tours = JsonConvert.DeserializeObject<List<Tour>>(tourData);
            foreach(var tour in tours)
            {
                _context.Tours.Add(tour);
            }
            _context.SaveChanges();
        }

        public void SeedUsers()
    {
      if (!_userManager.Users.Any())
      {
        var userData = System.IO.File.ReadAllText("Data/userSeedData.json");
        var users = JsonConvert.DeserializeObject<List<User>>(userData);
        var roles = new List<Role>
        {
          new Role{Name = "Client"},
          new Role{Name = "Admin"},
          new Role{Name = "Moderator"},

        };
        foreach (var role in roles)
        {
            _roleManager.CreateAsync(role).Wait();  
        }
        foreach (var user in users)
        {
          _userManager.CreateAsync(user, "password").Wait();
          _userManager.AddToRoleAsync(user,"Client").Wait();
        }
        var adminUser = new User
        {
          UserName = "Admin"
        };
        IdentityResult result = _userManager.CreateAsync(adminUser,"password").Result;
        if(result.Succeeded)
        {  
         var admin = _userManager.FindByNameAsync("Admin").Result;
          _userManager.AddToRolesAsync(admin, new[] {"Admin", "Moderator"}).Wait();
        }
      }
    }
    }
}