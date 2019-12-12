using System.Collections.Generic;
using System.Threading.Tasks;
using HOPE_13.Helpers;
using HOPE_13.Models;

namespace HOPE_13.Data
{
    public interface IHotelRepository
    {
        Task<bool> SaveAll();
        Task<PagedList<Hotel>> GetHotels(HotelParams hotelParams);
        Task<Hotel> GetHotel(int id);
        Task<Hotel> SetHotel(Hotel hotel);

    }
}