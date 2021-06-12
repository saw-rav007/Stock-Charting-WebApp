namespace CompanyAPI.Entities
{
    public class Company
    {

        public int Id { get; set; }
        public string Name { get; set; }
        public int Turnover { get; set; }
        public string Ceo { get; set; }
        public string Sector { get; set; }
        public string Brief { get; set; }
        public int StockCode { get; set; }
    }
}