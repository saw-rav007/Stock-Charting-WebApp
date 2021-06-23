using CompanyAPI.Entities;
using Microsoft.EntityFrameworkCore;

namespace CompanyAPI.Data
{
    public class IpoContext : DbContext
    {
        public IpoContext(DbContextOptions<IpoContext> options) : base(options)
        {

        }
        public DbSet<Ipo> Ipo { get; set; }
    }
}