import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Banner chính */}
      <section className="relative text-white py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image 
            src="https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=2070&auto=format&fit=crop"
            alt="Vietnam National Day"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/90 via-red-800/85 to-red-900/90"></div>
        </div>
        
        {/* Background decorative elements - Cờ Việt Nam */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32">
            <Image 
              src="https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg"
              alt="Vietnam Flag"
              fill
              className="object-contain"
            />
          </div>
          <div className="absolute bottom-20 right-20 w-32 h-32">
            <Image 
              src="https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg"
              alt="Vietnam Flag"
              fill
              className="object-contain"
            />
          </div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24">
            <Image 
              src="https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg"
              alt="Vietnam Flag"
              fill
              className="object-contain"
            />
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="mb-8 inline-block">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl star-animate mx-auto p-3">
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
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-balance mb-6 leading-tight">
              Chào mừng Kỷ niệm 80 năm
              <span className="block text-yellow-300 mt-2">Quốc khánh 2/9</span>
            </h1>
            
            <p className="text-xl md:text-2xl mt-6 max-w-3xl mx-auto text-balance leading-relaxed">
              1945 - 2025: Tám mươi năm xây dựng và phát triển đất nước
            </p>
            
            <p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto text-balance text-yellow-100">
              Cùng nhau nhìn lại những chặng đường lịch sử hào hùng và những thành tựu vẻ vang của dân tộc Việt Nam
            </p>
            
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/events" className="px-8 py-4 bg-yellow-400 text-red-800 font-bold rounded-full hover:bg-yellow-300 transform hover:scale-105 transition-all duration-300 shadow-xl">
                Khám phá sự kiện
              </Link>
              <Link href="/about" className="px-8 py-4 bg-white text-red-700 font-bold rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl">
                Tìm hiểu thêm
              </Link>
            </div>
          </div>
        </div>
        
        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24">
            <path d="M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z" fill="rgb(var(--background-end-rgb))"></path>
          </svg>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-b from-white to-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-red-700 mb-4">Dấu mốc lịch sử</h2>
            <p className="text-xl text-gray-600">Hành trình 80 năm vẻ vang</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg card-hover border-t-4 border-red-600">
              <div className="text-5xl font-bold text-red-600 mb-3">1945</div>
              <h3 className="text-xl font-bold mb-2">Cách mạng Tháng Tám</h3>
              <p className="text-gray-600">Nước Việt Nam Dân chủ Cộng hòa ra đời</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg card-hover border-t-4 border-red-600">
              <div className="text-5xl font-bold text-red-600 mb-3">1975</div>
              <h3 className="text-xl font-bold mb-2">Thống nhất đất nước</h3>
              <p className="text-gray-600">Hoàn thành sự nghiệp giải phóng dân tộc</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg card-hover border-t-4 border-red-600">
              <div className="text-5xl font-bold text-red-600 mb-3">1986</div>
              <h3 className="text-xl font-bold mb-2">Đổi mới đất nước</h3>
              <p className="text-gray-600">Mở ra kỷ nguyên phát triển mới</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg card-hover border-t-4 border-yellow-400">
              <div className="text-5xl font-bold text-red-600 mb-3">2025</div>
              <h3 className="text-xl font-bold mb-2">80 năm Quốc khánh</h3>
              <p className="text-gray-600">Tự hào và vững bước tương lai</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sự kiện nổi bật */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-red-700 mb-4">Sự kiện Nổi bật</h2>
            <p className="text-xl text-gray-600">Chuỗi hoạt động kỷ niệm đặc biệt</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Event Card 1 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden card-hover border border-gray-100">
              <div className="bg-gradient-to-br from-red-600 to-red-700 h-48 flex items-center justify-center">
                <span className="text-8xl">🎖️</span>
              </div>
              <div className="p-6">
                <div className="text-sm text-red-600 font-semibold mb-2">2/9/2025 • 8:00 AM</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">Lễ diễu binh, diễu hành</h3>
                <p className="text-gray-600 mb-4">Quảng trường Ba Đình, Hà Nội</p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Lễ diễu binh long trọng với sự tham gia của các lực lượng vũ trang và nhân dân thủ đô
                </p>
                <Link href="/events" className="inline-block mt-4 text-red-600 font-semibold hover:text-red-700 transition-colors">
                  Xem chi tiết →
                </Link>
              </div>
            </div>
            
            {/* Event Card 2 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden card-hover border border-gray-100">
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 h-48 flex items-center justify-center">
                <span className="text-8xl">🎭</span>
              </div>
              <div className="p-6">
                <div className="text-sm text-red-600 font-semibold mb-2">2/9/2025 • 7:30 PM</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">Chương trình nghệ thuật đặc biệt</h3>
                <p className="text-gray-600 mb-4">Nhà hát Lớn Hà Nội</p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Đêm nghệ thuật hoành tráng tái hiện hành trình 80 năm xây dựng và bảo vệ Tổ quốc
                </p>
                <Link href="/events" className="inline-block mt-4 text-red-600 font-semibold hover:text-red-700 transition-colors">
                  Xem chi tiết →
                </Link>
              </div>
            </div>
            
            {/* Event Card 3 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden card-hover border border-gray-100">
              <div className="bg-gradient-to-br from-red-500 to-orange-600 h-48 flex items-center justify-center">
                <span className="text-8xl">📸</span>
              </div>
              <div className="p-6">
                <div className="text-sm text-red-600 font-semibold mb-2">1/9 - 30/9/2025</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">Triển lãm ảnh &ldquo;Việt Nam - 80 năm&rdquo;</h3>
                <p className="text-gray-600 mb-4">Bảo tàng Lịch sử Quốc gia</p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Hơn 500 bức ảnh quý ghi lại những khoảnh khắc lịch sử đáng nhớ của dân tộc
                </p>
                <Link href="/events" className="inline-block mt-4 text-red-600 font-semibold hover:text-red-700 transition-colors">
                  Xem chi tiết →
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/events" className="inline-block px-8 py-4 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Xem tất cả sự kiện
            </Link>
          </div>
        </div>
      </section>

      {/* Thành tựu Section */}
      <section className="py-20 bg-gradient-to-b from-red-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-red-700 mb-4">Thành tựu Vẻ vang</h2>
            <p className="text-xl text-gray-600">80 năm xây dựng và phát triển</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg card-hover">
              <div className="text-4xl mb-3">🏆</div>
              <div className="text-3xl font-bold text-red-600 mb-2">100+</div>
              <p className="text-sm text-gray-600">Triệu dân số</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg card-hover">
              <div className="text-4xl mb-3">📈</div>
              <div className="text-3xl font-bold text-red-600 mb-2">Top 40</div>
              <p className="text-sm text-gray-600">Nền kinh tế thế giới</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg card-hover">
              <div className="text-4xl mb-3">🎓</div>
              <div className="text-3xl font-bold text-red-600 mb-2">95%+</div>
              <p className="text-sm text-gray-600">Tỷ lệ biết chữ</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg card-hover">
              <div className="text-4xl mb-3">🌏</div>
              <div className="text-3xl font-bold text-red-600 mb-2">190+</div>
              <p className="text-sm text-gray-600">Quan hệ ngoại giao</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-gradient-to-r from-red-700 to-red-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-8">🇻🇳</div>
            <blockquote className="text-3xl md:text-4xl font-bold italic mb-6 leading-relaxed">
              &ldquo;Không có gì quý hơn độc lập, tự do&rdquo;
            </blockquote>
            <p className="text-xl text-yellow-300 font-semibold">- Chủ tịch Hồ Chí Minh -</p>
          </div>
        </div>
      </section>
    </div>
  );
}