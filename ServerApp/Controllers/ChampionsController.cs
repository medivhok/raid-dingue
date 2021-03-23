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
            return await _context.Champion.ToListAsync();
        }

        // GET: api/Champions/{id}
        [HttpGet("{id:int}")]
        public async Task<ActionResult<Champion>> Get(string name) {
            return await _context.Champion
                .AsNoTracking()
                .FirstOrDefaultAsync(champion => champion.Name == name);
        }
    }
}
