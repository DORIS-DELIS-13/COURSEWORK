namespace HOPE_13.Helpers
{
    public class HotelParams
    {
        private const int MaxPageSize = 50;
        public int PageNumber { get; set; } = 1;
        private int pageSize = 3;
        public int PageSize
        {
            get { return pageSize; }
            set { pageSize =  (value > MaxPageSize) ? MaxPageSize : value; }
        }
    }
}