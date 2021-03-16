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
    public class FactionsController : ControllerBase
    {
        private readonly RaidContext _context;

        private readonly ILogger<FactionsController> _logger;

        public FactionsController(RaidContext context, ILogger<FactionsController> logger)
        {
            _context = context;
            _logger = logger;
        }

        // GET: api/Champions
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Faction>>> Get()
        {
            return await _context.Faction.ToListAsync();
        }
    }
}
