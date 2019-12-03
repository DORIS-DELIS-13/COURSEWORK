using System.Collections.Generic;
using System.Threading.Tasks;
using HOPE_13.Models;
using Microsoft.EntityFrameworkCore;

namespace HOPE_13.Data
{
    public class TourRepository : ITourRepository
    {
        public readonly DataContext _context;
        public TourRepository(DataContext context)
        {
            _context = context;

        }
        public async Task<Tour> GetTour(int id)
        {
            var tour = await _context.Tours.Include(p => p.Hotels).FirstOrDefaultAsync(u => u.Id == id);
            return tour;
        }

        public async Task<IEnumerable<Tour>> GetTours()
        {
            var tour = await _context.Tours.Include(p => p.Hotels).ToListAsync();
            return tour;
        }

        public async Task<bool> SaveAll()
         {
            return await _context.SaveChangesAsync() > 0;
         }

        public async Task<Tour> SetTour(Tour tour)
        {
            await _context.AddAsync(tour);
            await _context.SaveChangesAsync();
            return tour;
        }
    }
}