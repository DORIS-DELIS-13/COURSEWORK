using System.Collections.Generic;

namespace HOPE_13.Models
{
    public class Tour
    {
        public int Id { get; set; }
        public string Tourss { get; set; }
        public string ImageAdress { get; set; }
        
        public ICollection<Hotel> Hotels { get; set; }
        
    }
}