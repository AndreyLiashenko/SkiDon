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
    public class DiscountController : BaseApiController<Discount, long>
    {
        public DiscountController(IApiRepository<Discount, long> repository) : base(repository)
        {

        }

        [HttpGet]
        public async Task<ActionResult<IQueryable<Discount>>> Get()
        {
            return await base.Get();
        }

        [HttpGet("{key}")]
        public async Task<ActionResult<Discount>> Get(long key)
        {
            return await base.GetById(key);
        }

        [HttpPut("{key}")]
        public async Task<IActionResult> Put(int key, [FromBody] Discount discount)
        {
            return await base.Put(key, discount);
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Discount discount)
        {
            return await base.Post(discount);
        }

        [HttpDelete("{key}")]
        // DELETE: api/CompanyGroups/5
        public async Task<IActionResult> Delete(int key)
        {
            return await base.Delete(key);
        }


    }
}