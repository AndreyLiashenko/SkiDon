using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using System;
using System.Collections.Generic;
using System.Text;

namespace Infrastructure.Data
{
    class SkidonContext : DbContext
    {
        public static event Action<SkidonContext> OnSavingChanges = context => { };
        public static event Action<object> OnGettingEntity = entity => { };

        public SkidonContext(DbContextOptions<SkidonContext> options) : base(options)
        {

        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
        }

        public override int SaveChanges()
        {
            OnSavingChanges(this);

            return base.SaveChanges();
        }

        #region Set context Entity

        #endregion

        protected override void OnModelCreating(ModelBuilder builder)
        {
            #region Configure Tables

           //example
           // builder.Entity<BaseContent>(ConfigureBaseContent);
            #endregion
        }

        public class NewsContentContextFactory : IDesignTimeDbContextFactory<SkidonContext>
        {
            public SkidonContext CreateDbContext(string[] args)
            {
                var builder = new DbContextOptionsBuilder<SkidonContext>();

               // builder.Us
                
                builder.UseSqlServer("Server=tcp:db-discounts-bot.database.windows.net,1433;Initial Catalog=discounts-bot-dev;Persist Security Info=False;User ID=;Password={your_password};MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30");

                return new SkidonContext(builder.Options);
            }
        }
    }
}
