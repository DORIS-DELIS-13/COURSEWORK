using System.Collections.Generic;
using HOPE_13.Models;
using Newtonsoft.Json;

namespace HOPE_13.Data
{
    public class Seed
    {
        private readonly DataContext _context;

        public Seed(DataContext context)
        {
            _context = context;
        }

        public void SeedTours()
        {
            var tourData = System.IO.File.ReadAllText("Data/tourSeedData.json");
            var tours = JsonConvert.DeserializeObject<List<Tour>>(tourData);
            foreach(var tour in tours)
            {
                _context.Tours.Add(tour);
            }
            _context.SaveChanges();
        }
    }
}