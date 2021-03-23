using System.ComponentModel.DataAnnotations;

namespace RaidDingue.Models
{
    public class Role
    {
        [Key]
        public string Name { get; set; }
    }
}