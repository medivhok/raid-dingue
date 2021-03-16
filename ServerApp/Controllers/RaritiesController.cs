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
    public class RaritiesController : ControllerBase
    {
        private readonly RaidContext _context;

        private readonly ILogger<RaritiesController> _logger;

        public RaritiesController(RaidContext context, ILogger<RaritiesController> logger)
        {
            _context = context;
            _logger = logger;
        }

        // GET: api/Champions
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Rarity>>> Get()
        {
            return await _context.Rarity.ToListAsync();
        }
    }
}
