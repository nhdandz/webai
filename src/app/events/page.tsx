import Image from 'next/image';

const EventsPage = () => {
  const events = [
    {
      id: 1,
      title: "Lễ diễu binh, diễu hành",
      date: "2/9/2025",
      time: "8:00 AM",
      location: "Quảng trường Ba Đình, Hà Nội",
      description: "Lễ diễu binh long trọng với sự tham gia của các lực lượng vũ trang nhân dân và đoàn diễu hành quần chúng, tái hiện sức mạnh đại đoàn kết toàn dân tộc.",
      icon: "🎖️",
      color: "from-red-600 to-red-700"
    },
    {
      id: 2,
      title: "Chương trình nghệ thuật đặc biệt",
      date: "2/9/2025",
      time: "7:30 PM",
      location: "Nhà hát Lớn Hà Nội",
      description: "Đêm nghệ thuật hoành tráng với sự tham gia của các nghệ sĩ ưu tú, tái hiện hành trình 80 năm xây dựng và bảo vệ Tổ quốc.",
      icon: "🎭",
      color: "from-yellow-400 to-yellow-500"
    },
    {
      id: 3,
      title: "Triển lãm ảnh 'Việt Nam - 80 năm'",
      date: "1/9 - 30/9/2025",
      time: "9:00 AM - 5:00 PM",
      location: "Bảo tàng Lịch sử Quốc gia",
      description: "Triển lãm với hơn 500 bức ảnh quý ghi lại những khoảnh khắc lịch sử đáng nhớ trong 80 năm qua của dân tộc Việt Nam.",
      icon: "📸",
      color: "from-red-500 to-orange-600"
    },
    {
      id: 4,
      title: "Hội nghị khoa học 'Việt Nam 80 năm'",
      date: "1/9/2025",
      time: "2:00 PM",
      location: "Trung tâm Hội nghị Quốc gia",
      description: "Hội nghị khoa học với sự tham gia của các nhà nghiên cứu, sử gia trong và ngoài nước, đánh giá quá trình phát triển của đất nước.",
      icon: "📚",
      color: "from-blue-600 to-blue-700"
    },
    {
      id: 5,
      title: "Lễ hội pháo hoa quốc tế",
      date: "2/9/2025",
      time: "9:00 PM",
      location: "Sông Hồng, Hà Nội",
      description: "Màn trình diễn pháo hoa hoành tráng với sự tham gia của các đội pháo hoa quốc tế, thắp sáng bầu trời đêm Quốc khánh.",
      icon: "🎆",
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 6,
      title: "Chợ phiên văn hóa truyền thống",
      date: "1/9 - 3/9/2025",
      time: "8:00 AM - 8:00 PM",
      location: "Phố cổ Hà Nội",
      description: "Tái hiện không gian văn hóa truyền thống Việt Nam với các làng nghề, ẩm thực đặc sản từ khắp ba miền Tổ quốc.",
      icon: "🏮",
      color: "from-orange-500 to-red-500"
    }
  ];

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
          <h1 className="text-5xl md:text-6xl font-bold text-red-700 mb-4">Sự kiện</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chuỗi hoạt động kỷ niệm 80 năm Quốc khánh 2/9 - Tự hào và vững bước tương lai
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {events.map((event) => (
            <div 
              key={event.id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden card-hover border border-gray-100"
            >
              {/* Event Header with Icon */}
              <div className={`bg-gradient-to-br ${event.color} h-32 flex items-center justify-center`}>
                <span className="text-7xl">{event.icon}</span>
              </div>
              
              {/* Event Content */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {event.title}
                    </h3>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p className="flex items-center">
                        <span className="mr-2">📅</span>
                        <span className="font-semibold">{event.date}</span>
                      </p>
                      <p className="flex items-center">
                        <span className="mr-2">🕐</span>
                        <span>{event.time}</span>
                      </p>
                      <p className="flex items-center">
                        <span className="mr-2">📍</span>
                        <span>{event.location}</span>
                      </p>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {event.description}
                </p>
                
                <button className="w-full py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-300">
                  Đăng ký tham gia
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-red-700 to-red-800 rounded-2xl p-10 text-white shadow-2xl">
            <h2 className="text-3xl font-bold mb-6 text-center">Thông tin quan trọng</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur">
                <h3 className="text-xl font-bold mb-3">📋 Đăng ký sự kiện</h3>
                <p className="text-sm leading-relaxed">
                  Vui lòng đăng ký trước để được tham gia các sự kiện. Số lượng chỗ có hạn.
                </p>
              </div>
              <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur">
                <h3 className="text-xl font-bold mb-3">🎫 Vé miễn phí</h3>
                <p className="text-sm leading-relaxed">
                  Tất cả các sự kiện đều miễn phí vé để toàn thể nhân dân có thể tham gia.
                </p>
              </div>
              <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur">
                <h3 className="text-xl font-bold mb-3">🚗 Hướng dẫn đi lại</h3>
                <p className="text-sm leading-relaxed">
                  Nên sử dụng phương tiện công cộng do lượng người tham gia đông.
                </p>
              </div>
              <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur">
                <h3 className="text-xl font-bold mb-3">📞 Liên hệ hỗ trợ</h3>
                <p className="text-sm leading-relaxed">
                  Hotline: 1900-xxxx (24/7) cho mọi thắc mắc và hỗ trợ.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;