using Microsoft.EntityFrameworkCore;
using RaidDingue.Models;

namespace RaidDingue.DataSources
{
    public class RaidContext : DbContext
    {
        public DbSet<Affinity> Affinity { get; set; }

        public DbSet<Champion> Champion { get; set; }
        
        public DbSet<Faction> Faction { get; set; }
        
        public DbSet<Rarity> Rarity { get; set; }
     
        public DbSet<Role> Role { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        => options.UseSqlite(@"Data Source=C:\Users\grego\Projects\raid-dingue\RaidDingue.db");
    }
}
