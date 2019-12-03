using System.Collections.Generic;

namespace HOPE_13.Dtos
{
    public class HotelForDetailedDto
    {
        public int Id { get; set; }
        public string hotel { get; set; }
        public int Cost { get; set; }
        public int QuantityNight { get; set; }
        public string TypeOfRooms { get; set; }
        public string Nutrition { get; set; }
        public string Information { get; set; }
        public string ImageUrl1 {get;set;}
        public ICollection<ImageHotelForDetailedDto> ImageHotels { get; set; }
    }
}