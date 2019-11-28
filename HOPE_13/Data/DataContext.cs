using Microsoft.EntityFrameworkCore;
using HOPE_13.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HOPE_13.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }

   //   public DbSet<Value> myproperty { get; set; }
        public DbSet<User> Users {get;set;}
    }
}
