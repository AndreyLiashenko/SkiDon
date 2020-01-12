using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ApplicationCore.Entities;
using Infrastructure.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace SkiDon.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductDiscountController : ControllerBase
    {
        private readonly SkidonContext _context;

        public ProductDiscountController(SkidonContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IQueryable<ProductsDiscount>>> Get([FromQuery]long productId)
        {
            return Ok(_context.ProductsDiscounts.Where(x => x.ProductId == productId));
        }
    }
}