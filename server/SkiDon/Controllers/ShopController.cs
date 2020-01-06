using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ApplicationCore.Entities;
using Infrastructure.Data.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace SkiDon.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    //[Authorize]
    public class ShopController : BaseApiController<Shop, long>
    {
        public ShopController(IApiRepository<Shop, long> repository) : base(repository)
        {

        }

        [HttpGet]
        public async Task<ActionResult<IQueryable<Shop>>> Get()
        {
            return await base.Get();
        }

        [HttpGet("{key}")]
        public async Task<ActionResult<Shop>> Get(long key)
        {
            return await base.GetById(key);
        }

        [HttpPut("{key}")]
        public async Task<IActionResult> Put(int key, [FromBody] Shop shop)
        {            
            //return await Put(key, shop);
            return null;
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Shop shop)
        {
            shop.CreatedDate = DateTime.Now;
            return null;
            //return await base.Post(shop);
        }

        [HttpDelete("{key}")]
        // DELETE: api/CompanyGroups/5
        public async Task<IActionResult> Delete(long key)
        {
            return await base.Delete(key);
        }
    }
}