using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationCore.Entities
{
    public class ProductsDiscount
    {
        public long ProductId { get; set; }

        public int DiscountId { get; set; }

        public Product Product { get; set; }

        public Discount Discount { get; set; }
    }
}
