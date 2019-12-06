using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ApplicationCore.Entities;
using Infrastructure.Data.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace SkiDon.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : BaseApiController<Product, long>
    {
        public ProductController(IApiRepository<Product, long> repository) : base(repository)
        {

        }

        [HttpGet]
        public async Task<ActionResult<IQueryable<Product>>> Get()
        {
            return await base.Get();
        }

        [HttpGet("{key}")]
        public async Task<ActionResult<Product>> Get(long key)
        {
            return await base.GetById(key);
        }

        [HttpPut("{key}")]
        public async Task<IActionResult> Put(int key, [FromBody] Product product)
        {
            return await Put(key, product);
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Product product)
        {
            return await base.Post(product);
        }

        [HttpDelete("{key}")]
        // DELETE: api/CompanyGroups/5
        public async Task<IActionResult> Delete(long key)
        {
            return await base.Delete(key);
        }

    }
}