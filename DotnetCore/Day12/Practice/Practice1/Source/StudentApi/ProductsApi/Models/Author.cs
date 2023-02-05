using System;
using System.Collections.Generic;

#nullable disable

namespace StudentApi.Models
{
    public partial class Author
    {
        public int Id { get; set; }
        public string AuthorName { get; set; }
        public int? Age { get; set; }
        public string Skillsets { get; set; }
        public int? NumberOfPosts { get; set; }
    }
}
