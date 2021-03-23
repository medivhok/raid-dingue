using System.ComponentModel.DataAnnotations;

namespace RaidDingue.Models
{
    public class Rarity
    {
        [Key]
        public string Name { get; set; }
    }
}