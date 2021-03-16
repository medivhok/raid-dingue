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
    public class ChampionsController : ControllerBase
    {
        private readonly RaidContext _context;

        private readonly ILogger<ChampionsController> _logger;

        public ChampionsController(RaidContext context, ILogger<ChampionsController> logger)
        {
            _context = context;
            _logger = logger;
        }

        // GET: api/Champions
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Champion>>> Get()
        {
            return await _context.Champion
                .Include(champion => champion.Faction)
                .Include(champion => champion.Rarity)
                .Include(champion => champion.Affinity)
                .Include(champion => champion.Role)
                .ToListAsync();
        }
    }
}
