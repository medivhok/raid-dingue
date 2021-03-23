using System.ComponentModel.DataAnnotations;

namespace RaidDingue.Models {
    public class Faction
    {
        [Key]
        public string Name { get; set; }
    }
}