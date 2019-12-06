using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Infrastructure.Data.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace SkiDon.Controllers
{
    
    public class BaseApiController<T,TId> : ControllerBase
                                                where T: class
    {
        protected readonly IApiRepository<T, TId> context;

        public BaseApiController(IApiRepository<T, TId> repository)
        {
            context = repository;
        }

        [NonAction]
        protected virtual async Task<ActionResult<IQueryable<T>>> Get()
        {
            try
            {
                var result = context.QueryableAll().AsNoTracking();

                return Ok(result);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [NonAction]
        protected virtual async Task<ActionResult<T>> GetById([FromRoute] TId key)
        {
            try
            {
                var entity = await context.GetByIdAsync(key);

                if (entity == null)
                {
                    return NotFound();
                }

                return Ok(entity);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [NonAction]
        protected async Task<IActionResult> Put(TId key, [FromBody] T entity)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                await context.UpdateAsync(entity);
                return Ok(entity);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [NonAction]
        protected async Task<IActionResult> Post([FromBody] T oData)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                await context.AddAsync(oData);
                return StatusCode(201, oData);
            }
            catch (Exception ex)
            {
                if (ex.InnerException != null && ex.InnerException.Message != null)
                {
                    return StatusCode(500, ex.InnerException.Message);
                }
                else
                {
                    return StatusCode(500, ex.Message);
                }
            }
        }


        [NonAction]
        protected async Task<IActionResult> Delete([FromRoute] TId id)
        {
            try
            {
                var entity = await context.GetByIdAsync(id);

                if (entity == null)
                {
                    return NotFound();
                }

                await context.DeleteAsync(entity);

                return Ok(entity);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}