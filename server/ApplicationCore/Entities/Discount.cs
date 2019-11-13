using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationCore.Entities
{
    public class Discount
    {
        public int Id { get; set; }

        public int Price { get; set; }

        public string Description { get; set; }

        public DateTimeOffset StartDate { get; set; }

        public DateTimeOffset EndDate { get; set; }

        public DiscountCategory DiscountCategory { get; set; }

        public List<ProductsDiscount> ProductsDiscounts { get; set; }
    }
}
