namespace HOPE_13.Models
{
    public class ImageHotel
    {
        public int Id { get; set; }
        public string ImageAdress { get; set; }
        public bool isMain {get; set;}

        public int HotelId { get; set; }
        public Hotel Hotel { get; set; }
    }
}