using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using ApplicationCore.Entities.Login;
using ApplicationCore.Entities.Users;
using Infrastructure.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace SkiDon.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private UserManager<SkidonUser> _user;

        private SkidonContext _context;

        public LoginController(UserManager<SkidonUser> user,SkidonContext context)
        {
            _user = user;
            _context = context;
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromBody] LoginModel model)
        {
            //var user = await _user.FindByNameAsync(model.UserName);
            var login = _context.Users.FirstOrDefault(x => x.UserName == "Roma");
            var pass = _context.Users.FirstOrDefault(x => x.PasswordHash == model.Password);

            if (login != null && pass != null)
            {
                var claims = new[]
                {
                    new Claim(JwtRegisteredClaimNames.Sub, login.UserName),
                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
                };

                var signingKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("SecureKey"));

                var token = new JwtSecurityToken(
                    issuer: "https://skidon.azurewebsites.net",
                    audience: "https://skidon.azurewebsites.net",
                    expires: DateTime.UtcNow.AddHours(1),
                    claims: claims,
                    signingCredentials: new SigningCredentials(signingKey, SecurityAlgorithms.HmacSha256)
                    );

                return Ok(new { token = new JwtSecurityTokenHandler().WriteToken(token), expiration = token.ValidTo});
            };

            return Unauthorized();
        }
    }
}