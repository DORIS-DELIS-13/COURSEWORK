using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace HOPE_13.Models
{
   public class Role: IdentityRole<int>
    {
        public ICollection<UserRole> UserRoles { get; set; }
    }
}