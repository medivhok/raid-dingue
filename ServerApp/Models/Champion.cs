using System.ComponentModel.DataAnnotations;

namespace RaidDingue.Models
{
    public class Champion
    {
        [Key]
        public string Name { get; set; }

        public int HealthPoints { get; set; }

        public int Attack { get; set; }

        public int Defense { get; set; }

        public int Speed { get; set; }

        public int CriticalRate { get; set; }

        public int CriticalDamage { get; set; }

        public int Resistance { get; set; }

        public int Accuracy { get; set; }

        public string Faction { get; set; }

        public string Rarity { get; set; }

        public string Role { get; set; }

        public string Affinity { get; set; }
    }
}