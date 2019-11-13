using ApplicationCore.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace Infrastructure.Data
{
    public class SkidonContext : DbContext
    {
        public static event Action<SkidonContext> OnSavingChanges = context => { };

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

        public DbSet<Product> Products { get; set; }

        public DbSet<Discount> Discounts { get; set; }

        public DbSet<Shop> Shops { get; set; }

        public DbSet<ProductCategory> ProductCategories { get; set; }

        public DbSet<ProductsDiscount> ProductsDiscounts { get; set; }
        #endregion

        protected override void OnModelCreating(ModelBuilder builder)
        {
            #region Configure Tables
            
            builder.Entity<Product>(ConfigureProducts);

            builder.Entity<Discount>(ConfigureDiscounts);

            builder.Entity<Shop>(ConfigureShops);

            builder.Entity<ProductCategory>(ConfigureProductCategories);

            builder.Entity<ProductsDiscount>(ConfigureProductsDiscounts);
            #endregion
        }

        private void ConfigureProductsDiscounts(EntityTypeBuilder<ProductsDiscount> builder)
        {
            builder.HasKey(x => new { x.ProductId, x.DiscountId });

            builder
                .HasOne(x => x.Discount)
                .WithMany(x => x.ProductsDiscounts)
                .HasForeignKey(x => x.DiscountId);

            builder
                .HasOne(x => x.Product)
                .WithMany(x => x.ProductsDiscounts)
                .HasForeignKey(x => x.ProductId);
        }

        private void ConfigureProductCategories(EntityTypeBuilder<ProductCategory> builder)
        {
            builder.HasKey(x => x.Id);
        }

        private void ConfigureShops(EntityTypeBuilder<Shop> builder)
        {
            builder.HasKey(x => x.Id);
        }

        private void ConfigureDiscounts(EntityTypeBuilder<Discount> builder)
        {
            builder.HasKey(x => x.Id);
        }

        private void ConfigureProducts(EntityTypeBuilder<Product> builder)
        {
            builder.HasKey(x => x.Id);

            builder
                .HasOne(x => x.ProductCategory)
                .WithMany(x => x.Products)
                .HasForeignKey(x => x.CategoryId);

            builder
                .HasOne(x => x.Shop)
                .WithMany(x => x.Products)
                .HasForeignKey(x => x.ShopId);
        }

        public class NewsContentContextFactory : IDesignTimeDbContextFactory<SkidonContext>
        {
            public SkidonContext CreateDbContext(string[] args)
            {
                var builder = new DbContextOptionsBuilder<SkidonContext>();

               // builder.Us
                
                builder.UseSqlServer("Server=tcp:db-discounts-bot.database.windows.net,1433;Initial Catalog=discounts-bot-dev;Persist Security Info=False;User ID=d1sconunts-admin;Password=Qw3rt5432y;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;");


                return new SkidonContext(builder.Options);
            }
        }
    }
}
