using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;
using HOPE_13.Models;

namespace HOPE_13.Data
{
    public interface ITourRepository
    {
        Task<bool> SaveAll();
        Task<IEnumerable<Tour>> GetTours();
        Task<Tour> GetTour(int id);
        Task<Tour> SetTour(Tour tour);

    }
}