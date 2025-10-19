import Image from 'next/image';

const NewsPage = () => {
  const newsArticles = [
    {
      id: 1,
      title: "Toàn dân hướng về Lễ kỷ niệm 80 năm Quốc khánh 2/9",
      category: "Tin chính",
      date: "20/08/2025",
      excerpt: "Cả nước đang tích cực chuẩn bị cho Đại lễ kỷ niệm 80 năm Cách mạng Tháng Tám và Quốc khánh nước Cộng hòa Xã hội Chủ nghĩa Việt Nam.",
      image: "🎉",
      color: "bg-red-600"
    },
    {
      id: 2,
      title: "Tổng duyệt Lễ diễu binh diễn ra thành công tốt đẹp",
      category: "Sự kiện",
      date: "18/08/2025",
      excerpt: "Buổi tổng duyệt lễ diễu binh đã diễn ra tại Quảng trường Ba Đình với sự tham gia của hơn 30,000 người.",
      image: "🎖️",
      color: "bg-blue-600"
    },
    {
      id: 3,
      title: "80 năm - Hành trình vẻ vang của dân tộc Việt Nam",
      category: "Chuyên sâu",
      date: "15/08/2025",
      excerpt: "Nhìn lại chặng đường 80 năm xây dựng và phát triển đất nước, từ một nước nghèo nàn, lạc hậu đến một quốc gia đang phát triển năng động.",
      image: "📚",
      color: "bg-green-600"
    },
    {
      id: 4,
      title: "Người dân Hà Nội trang hoàng đường phố đón Quốc khánh",
      category: "Đời sống",
      date: "12/08/2025",
      excerpt: "Khắp các tuyến phố Thủ đô đã rực rỡ cờ đỏ sao vàng, tạo nên không khí tưng bừng, phấn khởi chào mừng ngày Quốc khánh.",
      image: "🇻🇳",
      color: "bg-yellow-600"
    },
    {
      id: 5,
      title: "Triển lãm ảnh lịch sử thu hút đông đảo người dân",
      category: "Văn hóa",
      date: "10/08/2025",
      excerpt: "Triển lãm 'Việt Nam - 80 năm' với hơn 500 bức ảnh quý đã thu hút hàng ngàn lượt khách tham quan trong những ngày đầu khai mạc.",
      image: "📸",
      color: "bg-purple-600"
    },
    {
      id: 6,
      title: "Chương trình nghệ thuật đặc biệt sẵn sàng cho đêm Quốc khánh",
      category: "Nghệ thuật",
      date: "08/08/2025",
      excerpt: "Hơn 1000 nghệ sĩ đang miệt mài tập luyện cho chương trình nghệ thuật hoành tráng nhất từ trước đến nay.",
      image: "🎭",
      color: "bg-pink-600"
    },
    {
      id: 7,
      title: "Thế hệ trẻ và niềm tự hào dân tộc trong kỷ niệm 80 năm Quốc khánh",
      category: "Thế hệ trẻ",
      date: "05/08/2025",
      excerpt: "Giới trẻ Việt Nam chia sẻ về tình yêu Tổ quốc và quyết tâm đóng góp xây dựng đất nước trong kỷ nguyên mới.",
      image: "👨‍🎓",
      color: "bg-indigo-600"
    },
    {
      id: 8,
      title: "Lễ hội pháo hoa quốc tế hứa hẹn bùng nổ đêm 2/9",
      category: "Giải trí",
      date: "03/08/2025",
      excerpt: "8 đội pháo hoa quốc tế sẽ cùng Việt Nam tạo nên màn trình diễn ánh sáng hoành tráng trên bầu trời Thủ đô.",
      image: "🎆",
      color: "bg-orange-600"
    }
  ];

  const featuredNews = newsArticles[0];
  const regularNews = newsArticles.slice(1);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-red-50 to-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl mx-auto p-3">
              <div className="relative w-full h-full">
                <Image 
                  src="https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg"
                  alt="Vietnam Flag"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-red-700 mb-4">Tin tức</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cập nhật thông tin mới nhất về chuỗi sự kiện kỷ niệm 80 năm Quốc khánh 2/9
          </p>
        </div>

        {/* Featured News */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden card-hover">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Featured Image */}
              <div className={`${featuredNews.color} h-64 lg:h-auto flex items-center justify-center`}>
                <span className="text-9xl">{featuredNews.image}</span>
              </div>
              
              {/* Featured Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="inline-block mb-4">
                  <span className="px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-semibold">
                    {featuredNews.category}
                  </span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                  {featuredNews.title}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {featuredNews.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">📅 {featuredNews.date}</span>
                  <button className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-300">
                    Đọc thêm →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* News Grid */}
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Tin tức khác</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularNews.map((article) => (
              <div 
                key={article.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden card-hover border border-gray-100"
              >
                {/* Article Image/Icon */}
                <div className={`${article.color} h-48 flex items-center justify-center`}>
                  <span className="text-7xl">{article.image}</span>
                </div>
                
                {/* Article Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-semibold">
                      {article.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">📅 {article.date}</span>
                    <button className="text-red-600 font-semibold text-sm hover:text-red-700 transition-colors">
                      Đọc thêm →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-red-700 to-red-800 rounded-2xl p-10 text-white shadow-2xl text-center">
            <h2 className="text-3xl font-bold mb-4">Đăng ký nhận tin</h2>
            <p className="text-lg mb-8">
              Cập nhật thông tin mới nhất về các sự kiện kỷ niệm 80 năm Quốc khánh
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Nhập email của bạn..."
                className="flex-1 px-6 py-4 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button className="px-8 py-4 bg-yellow-400 text-red-800 font-bold rounded-lg hover:bg-yellow-300 transition-colors duration-300">
                Đăng ký
              </button>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="mt-16 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Danh mục tin tức</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {["Tin chính", "Sự kiện", "Văn hóa", "Nghệ thuật", "Đời sống", "Thế hệ trẻ", "Giải trí"].map((category) => (
              <button 
                key={category}
                className="px-6 py-3 bg-white border-2 border-red-600 text-red-600 font-semibold rounded-full hover:bg-red-600 hover:text-white transition-all duration-300 shadow-md"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;