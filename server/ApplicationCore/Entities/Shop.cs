using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace ApplicationCore.Entities
{
    public class Shop
    {
        public int Id { get; set; }

        [StringLength(100)]
        public string Name { get; set; }

        public DateTimeOffset CreatedDate { get; set; }

        [StringLength(255)]
        public string ShopUrl { get; set; }

        public bool IsChain { get; set; }

        public string JurAdress { get; set; }

        public string BlobLogoId { get; set; }

        public List<Product> Products { get; set; }
    }
}
