using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace ApplicationCore.Entities
{
    public class ProductCategory
    {
        public int Id { get; set; }

        [StringLength(255)]
        public string Name { get; set; }

        [ForeignKey("ProductLink")]
        public int? ParentId { get; set; }

        public ProductCategory Parent { get; set; }

        public List<ProductCategory> Children { get; set; }

        public List<Product> Products { get; set; }
    }
}
