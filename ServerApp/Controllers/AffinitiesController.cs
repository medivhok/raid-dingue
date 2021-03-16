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
    public class AffinitiesController : ControllerBase
    {
        private readonly RaidContext _context;

        private readonly ILogger<AffinitiesController> _logger;

        public AffinitiesController(RaidContext context, ILogger<AffinitiesController> logger)
        {
            _context = context;
            _logger = logger;
        }

        // GET: api/Champions
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Affinity>>> Get()
        {
            return await _context.Affinity.ToListAsync();
        }
    }
}
