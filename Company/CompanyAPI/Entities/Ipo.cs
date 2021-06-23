using System.ComponentModel.DataAnnotations;

namespace CompanyAPI.Entities
{
    public class Ipo
    {

        [Key]
        public int IpoId { get; set; }
        public string CompanyName { get; set; }
        public string BiddingDates { get; set; }
        public string PriceRange { get; set; }
        public string IssueSize { get; set; }
        public string ManagingDirector { get; set; }
    }
}