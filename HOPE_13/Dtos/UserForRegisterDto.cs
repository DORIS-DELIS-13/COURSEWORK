using System.ComponentModel.DataAnnotations;

namespace HOPE_13.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string UserName {get; set;}
        // [Required]
        // [StringLength(8, MinimumLength=4, ErrorMessage="Пароль повинен містити від 4 до 8 символів")]
        public string Password {get; set;}

    }
}