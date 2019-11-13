using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace ApplicationCore.Entities
{
    public class Product
    {
        public long Id { get; set; }

        public int ShopId { get; set; }

        public int CategoryId { get; set; }

        [StringLength(255)]
        public string Name { get; set; }

        public int Price { get; set; }

        public int ProductCode { get; set; }

        public DateTimeOffset CreatedDate { get; set; }

        public DateTimeOffset UpdateDate { get; set; }

        public string Description { get; set; }

        [StringLength(255)]
        public string Url { get; set; }

        public Guid BlobLogoId { get; set; }

        public ProductCategory ProductCategory { get; set; }

        public Shop Shop { get; set; }

        public List<ProductsDiscount> ProductsDiscounts { get; set; }
    }
}
