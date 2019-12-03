using System.Collections.Generic;

namespace HOPE_13.Dtos
{
    public class TourForDetailedDto
    {
        public int Id { get; set; }
        public string Tourss { get; set; }
        public string ImageAdress { get; set; }
        public ICollection<HotelForDetailedDto> Hotel {get; set;}

    }
}