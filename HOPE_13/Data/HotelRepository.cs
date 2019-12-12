using System.Collections.Generic;
using System.Threading.Tasks;
using HOPE_13.Models;
using Microsoft.EntityFrameworkCore;
using HOPE_13.Data;
using HOPE_13.Helpers;

namespace HOPE_13.Data
{
    public class HotelRepository : IHotelRepository
    {
        public readonly DataContext _context;
        public HotelRepository(DataContext context)
        {
            _context = context;
        }
        public async Task<PagedList<Hotel>> GetHotels(HotelParams hotelParams)
        {
            var hotels =  _context.Hotels.Include(p => p.ImageHotels);
            return await PagedList<Hotel>.CreateAsync(hotels, hotelParams.PageNumber, hotelParams.PageSize);
        }

        public async Task<Hotel> GetHotel(int id)
        {
            var tour = await _context.Hotels.Include(p => p.ImageHotels).FirstOrDefaultAsync(u => u.Id == id);
            return tour;
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }

        public async Task<Hotel> SetHotel(Hotel hotel)
        {
            await _context.AddAsync(hotel);
            await _context.SaveChangesAsync();
            return hotel;
        }
    }
}