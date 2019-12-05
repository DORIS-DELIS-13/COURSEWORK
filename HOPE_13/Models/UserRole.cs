using Microsoft.AspNetCore.Identity;

namespace HOPE_13.Models
{
    public class UserRole : IdentityUserRole<int>
    {
        public User User { get; set; }
        public Role Role { get; set; }
        
    }
}