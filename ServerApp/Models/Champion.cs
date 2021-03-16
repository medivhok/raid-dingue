namespace RaidDingue.Models
{
    public class Champion
    {
        public int ChampionId { get; set; }        

        public string Name { get; set; }

        public int HealthPoints { get; set; }

        public int Attack { get; set; }

        public int Defense { get; set; }

        public int Speed { get; set; }

        public int CriticalRate { get; set; }

        public int CriticalDamage { get; set; }

        public int Resistance { get; set; }

        public int Accuracy { get; set; }

        public Faction Faction { get; set; }

        public Rarity Rarity { get; set; }

        public Role Role { get; set; }

        public Affinity Affinity { get; set; }
    }
}