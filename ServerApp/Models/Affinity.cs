using System.ComponentModel.DataAnnotations;

namespace RaidDingue.Models
{
    public class Affinity
    {
        [Key]
        public string Name { get; set; }
    }
}