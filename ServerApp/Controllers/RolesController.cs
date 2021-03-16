using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using RaidDingue.Models;
using RaidDingue.DataSources;

namespace RaidDingue.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RolesController : ControllerBase
    {
        private readonly RaidContext _context;

        private readonly ILogger<RolesController> _logger;

        public RolesController(RaidContext context, ILogger<RolesController> logger)
        {
            _context = context;
            _logger = logger;
        }

        // GET: api/Champions
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Role>>> Get()
        {
            return await _context.Role.ToListAsync();
        }
    }
}
