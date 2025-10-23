import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Enhanced Modern Banner */}
      <section className="relative text-white pt-32 pb-40 md:py-48 overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=2070&auto=format&fit=crop"
            alt="Vietnam National Day"
            fill
            className="object-cover scale-110 transition-transform duration-1000"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-red-600/70 via-red-700/60 to-orange-600/50"></div>
          {/* Animated Gradient Overlay */}
          <div className="absolute inset-0 gradient-animate bg-gradient-to-r from-red-600/30 via-transparent to-yellow-600/30"></div>
        </div>

        {/* Decorative Particles */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="particle" style={{ top: '10%', left: '5%', animationDelay: '0s' }}></div>
          <div className="particle" style={{ top: '20%', left: '15%', animationDelay: '1s' }}></div>
          <div className="particle" style={{ top: '40%', left: '85%', animationDelay: '2s' }}></div>
          <div className="particle" style={{ top: '60%', left: '75%', animationDelay: '3s' }}></div>
          <div className="particle" style={{ top: '80%', left: '25%', animationDelay: '4s' }}></div>
        </div>

        {/* Background decorative elements - Cờ Việt Nam với enhanced animations */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-20 left-10 md:left-20 w-24 h-24 md:w-32 md:h-32 float-animate parallax-float">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg"
              alt="Vietnam Flag"
              fill
              className="object-contain drop-shadow-2xl"
            />
          </div>
          <div className="absolute bottom-32 right-10 md:right-20 w-24 h-24 md:w-32 md:h-32 float-animate" style={{ animationDelay: '1s' }}>
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg"
              alt="Vietnam Flag"
              fill
              className="object-contain drop-shadow-2xl"
            />
          </div>
          <div className="absolute top-1/2 left-1/4 w-20 h-20 md:w-24 md:h-24 float-animate" style={{ animationDelay: '2s' }}>
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg"
              alt="Vietnam Flag"
              fill
              className="object-contain drop-shadow-2xl"
            />
          </div>
          <div className="absolute top-1/3 right-1/3 w-16 h-16 md:w-20 md:h-20 float-animate" style={{ animationDelay: '3s' }}>
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg"
              alt="Vietnam Flag"
              fill
              className="object-contain drop-shadow-2xl"
            />
          </div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="mb-6 md:mb-8 inline-block">
              <div className="w-20 h-20 md:w-28 md:h-28 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl star-animate mx-auto p-3 md:p-4 ring-4 ring-yellow-400/50">
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

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-balance mb-4 md:mb-6 leading-tight px-4 fade-in-up">
              Chào mừng Kỷ niệm
              <span className="block text-yellow-300 mt-2 drop-shadow-2xl text-glow">80 năm Quốc khánh 2/9</span>
            </h1>

            <div className="inline-block px-8 py-3 bg-white/20 backdrop-blur-md rounded-full mb-6 glass border-2 border-white/30 neon-border">
              <p className="text-xl md:text-3xl font-bold text-yellow-100 drop-shadow-lg">
                1945 - 2025
              </p>
            </div>

            <p className="text-base md:text-xl lg:text-2xl mt-4 max-w-3xl mx-auto text-balance leading-relaxed text-white/95 drop-shadow-2xl px-4 fade-in-up">
              Tám mươi năm xây dựng và phát triển đất nước
            </p>

            <p className="text-sm md:text-lg lg:text-xl mt-3 md:mt-4 max-w-3xl mx-auto text-balance text-yellow-100 drop-shadow-lg px-4 fade-in-up">
              Cùng nhau nhìn lại những chặng đường lịch sử hào hùng và những thành tựu vẻ vang của dân tộc Việt Nam
            </p>

            <div className="mt-8 md:mt-12 flex flex-col sm:flex-row gap-4 md:gap-6 justify-center px-4 fade-in-up">
              <Link href="#events" className="group px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-yellow-400 to-yellow-500 text-red-900 font-bold text-sm md:text-base rounded-full hover:from-yellow-300 hover:to-yellow-400 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-2xl hover:shadow-yellow-400/50 ripple-effect relative overflow-hidden">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Khám phá sự kiện
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </Link>
              <Link href="#timeline" className="group px-8 md:px-10 py-4 md:py-5 bg-white/95 backdrop-blur-sm text-red-700 font-bold text-sm md:text-base rounded-full hover:bg-white border-2 border-white/50 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-2xl hover:shadow-white/50 ripple-effect relative overflow-hidden">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Tìm hiểu thêm
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24">
            <path d="M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z" fill="#ffffff"></path>
          </svg>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-red-300 to-red-600"></div>
            <span className="text-3xl">🇻🇳</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-red-300 to-red-600"></div>
          </div>
        </div>
      </div>

      {/* Timeline Section - Modern Zigzag Design */}
      <section id="timeline" className="py-16 md:py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-red-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-400 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-20">
            <div className="inline-block mb-4 parallax-float">
              <span className="text-5xl md:text-6xl">📜</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-red-700 mb-4 md:mb-6 text-glow">
              Dấu mốc lịch sử
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-red-600 via-yellow-400 to-red-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl md:text-2xl text-gray-600 font-medium">Hành trình 80 năm vẻ vang của dân tộc</p>
          </div>

          {/* Modern Timeline with Zigzag Layout */}
          <div className="timeline-modern max-w-6xl mx-auto relative">
            {/* Vertical Timeline Line */}
            <div className="timeline-line"></div>

            {/* Timeline Item 1 - Left */}
            <div className="timeline-item left">
              <div className="timeline-icon" style={{ top: '0' }}>
                🏛️
              </div>
              <div className="timeline-content card-3d">
                <div className="timeline-year text-glow">1945</div>
                <h3 className="timeline-title">Cách mạng Tháng Tám</h3>
                <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-red-400 mb-3"></div>
                <p className="timeline-description">
                  Nước Việt Nam Dân chủ Cộng hòa ra đời, đánh dấu mốc son chói lọi trong lịch sử dân tộc.
                  Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập tại Quảng trường Ba Đình.
                </p>
              </div>
            </div>

            {/* Timeline Item 2 - Right */}
            <div className="timeline-item right">
              <div className="timeline-icon" style={{ top: '0' }}>
                ⭐
              </div>
              <div className="timeline-content card-3d">
                <div className="timeline-year text-glow">1975</div>
                <h3 className="timeline-title">Thống nhất đất nước</h3>
                <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-red-400 mb-3"></div>
                <p className="timeline-description">
                  Hoàn thành cuộc kháng chiến chống Mỹ cứu nước, thống nhất non sông.
                  Việt Nam bước vào kỷ nguyên độc lập, thống nhất hoàn toàn.
                </p>
              </div>
            </div>

            {/* Timeline Item 3 - Left */}
            <div className="timeline-item left">
              <div className="timeline-icon" style={{ top: '0' }}>
                🚀
              </div>
              <div className="timeline-content card-3d">
                <div className="timeline-year text-glow">1986</div>
                <h3 className="timeline-title">Đổi mới đất nước</h3>
                <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-red-400 mb-3"></div>
                <p className="timeline-description">
                  Khởi động công cuộc Đổi Mới toàn diện, mở ra kỷ nguyên phát triển mới.
                  Đất nước chuyển mình mạnh mẽ, hội nhập quốc tế.
                </p>
              </div>
            </div>

            {/* Timeline Item 4 - Right */}
            <div className="timeline-item right">
              <div className="timeline-icon neon-border" style={{ top: '0' }}>
                🎉
              </div>
              <div className="timeline-content card-3d bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 border-yellow-400">
                <div className="timeline-year text-glow">2025</div>
                <h3 className="timeline-title">80 năm Quốc khánh</h3>
                <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 to-orange-400 mb-3"></div>
                <p className="timeline-description">
                  Tự hào nhìn lại 80 năm xây dựng và phát triển.
                  Việt Nam vững bước tiến vào tương lai với niềm tin và khát vọng mạnh mẽ.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Stats */}
          <div className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg card-hover border-2 border-red-100">
              <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">80</div>
              <p className="text-sm md:text-base text-gray-600 font-medium">Năm vẻ vang</p>
            </div>
            <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg card-hover border-2 border-yellow-100">
              <div className="text-3xl md:text-4xl font-bold text-yellow-600 mb-2">100M+</div>
              <p className="text-sm md:text-base text-gray-600 font-medium">Dân số</p>
            </div>
            <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg card-hover border-2 border-orange-100">
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">54</div>
              <p className="text-sm md:text-base text-gray-600 font-medium">Dân tộc</p>
            </div>
            <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg card-hover border-2 border-red-100">
              <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">∞</div>
              <p className="text-sm md:text-base text-gray-600 font-medium">Tinh thần bất diệt</p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-300 to-yellow-500"></div>
            <span className="text-3xl">⭐</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-yellow-300 to-yellow-500"></div>
          </div>
        </div>
      </div>

      {/* Sự kiện nổi bật - Enhanced with 3D Effects */}
      <section id="events" className="py-16 md:py-24 bg-gradient-to-b from-white via-red-50/30 to-white relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-40 right-20 w-64 h-64 bg-red-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 left-20 w-64 h-64 bg-yellow-400 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block mb-4 parallax-float">
              <span className="text-5xl md:text-6xl">⭐</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-red-700 mb-4 md:mb-6 text-glow">
              Sự kiện Nổi bật
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-yellow-400 via-red-600 to-yellow-400 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl md:text-2xl text-gray-600 font-medium">Chuỗi hoạt động kỷ niệm đặc biệt</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-7xl mx-auto">
            {/* Event Card 1 - Enhanced 3D */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden card-hover card-3d border-2 border-white/50 group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="bg-gradient-to-br from-red-600 to-red-700 h-48 md:h-56 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 gradient-animate bg-gradient-to-r from-red-700/50 via-transparent to-red-600/50"></div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-500"></div>
                <span className="text-7xl md:text-9xl relative z-10 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 drop-shadow-2xl">🎖️</span>
              </div>
              <div className="p-6 md:p-7 relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 text-xs md:text-sm font-bold rounded-full mb-4 border border-red-200">
                  <span>📅</span>
                  2/9/2025 • 8:00 AM
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800 group-hover:text-red-700 transition-colors">
                  Lễ diễu binh, diễu hành
                </h3>
                <div className="flex items-center gap-3 text-gray-600 mb-4 bg-gray-50 p-3 rounded-xl">
                  <span className="text-xl">📍</span>
                  <p className="text-sm md:text-base font-medium">Quảng trường Ba Đình, Hà Nội</p>
                </div>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-5">
                  Lễ diễu binh long trọng với sự tham gia của các lực lượng vũ trang và nhân dân thủ đô
                </p>
                <Link href="/events" className="inline-flex items-center gap-2 text-sm md:text-base text-red-600 font-bold hover:text-red-700 hover:gap-4 transition-all group/link px-4 py-2 bg-red-50 rounded-full">
                  Xem chi tiết
                  <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>

            {/* Event Card 2 - Enhanced 3D */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden card-hover card-3d border-2 border-white/50 group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 h-48 md:h-56 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 gradient-animate bg-gradient-to-r from-yellow-500/50 via-transparent to-yellow-400/50"></div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-500"></div>
                <span className="text-7xl md:text-9xl relative z-10 group-hover:scale-125 group-hover:-rotate-12 transition-all duration-500 drop-shadow-2xl">🎭</span>
              </div>
              <div className="p-6 md:p-7 relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 text-yellow-800 text-xs md:text-sm font-bold rounded-full mb-4 border border-yellow-200">
                  <span>📅</span>
                  2/9/2025 • 7:30 PM
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800 group-hover:text-yellow-700 transition-colors">
                  Chương trình nghệ thuật
                </h3>
                <div className="flex items-center gap-3 text-gray-600 mb-4 bg-gray-50 p-3 rounded-xl">
                  <span className="text-xl">📍</span>
                  <p className="text-sm md:text-base font-medium">Nhà hát Lớn Hà Nội</p>
                </div>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-5">
                  Đêm nghệ thuật hoành tráng tái hiện hành trình 80 năm xây dựng và bảo vệ Tổ quốc
                </p>
                <Link href="/events" className="inline-flex items-center gap-2 text-sm md:text-base text-yellow-700 font-bold hover:text-yellow-800 hover:gap-4 transition-all group/link px-4 py-2 bg-yellow-50 rounded-full">
                  Xem chi tiết
                  <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>

            {/* Event Card 3 - Enhanced 3D */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden card-hover card-3d border-2 border-white/50 group md:col-span-2 lg:col-span-1 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="bg-gradient-to-br from-red-500 to-orange-600 h-48 md:h-56 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 gradient-animate bg-gradient-to-r from-orange-600/50 via-transparent to-red-500/50"></div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-500"></div>
                <span className="text-7xl md:text-9xl relative z-10 group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 drop-shadow-2xl">📸</span>
              </div>
              <div className="p-6 md:p-7 relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 text-xs md:text-sm font-bold rounded-full mb-4 border border-orange-200">
                  <span>📅</span>
                  1/9 - 30/9/2025
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800 group-hover:text-orange-700 transition-colors">
                  Triển lãm "Việt Nam - 80 năm"
                </h3>
                <div className="flex items-center gap-3 text-gray-600 mb-4 bg-gray-50 p-3 rounded-xl">
                  <span className="text-xl">📍</span>
                  <p className="text-sm md:text-base font-medium">Bảo tàng Lịch sử Quốc gia</p>
                </div>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-5">
                  Hơn 500 bức ảnh quý ghi lại những khoảnh khắc lịch sử đáng nhớ của dân tộc
                </p>
                <Link href="/events" className="inline-flex items-center gap-2 text-sm md:text-base text-orange-700 font-bold hover:text-orange-800 hover:gap-4 transition-all group/link px-4 py-2 bg-orange-50 rounded-full">
                  Xem chi tiết
                  <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 md:mt-16">
            <Link href="/events" className="group inline-block px-10 md:px-12 py-4 md:py-5 bg-gradient-to-r from-red-600 via-red-700 to-red-600 text-white font-bold text-base md:text-lg rounded-full hover:from-red-700 hover:via-red-800 hover:to-red-700 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-2xl hover:shadow-red-600/50 ripple-effect relative overflow-hidden">
              <span className="relative z-10 flex items-center gap-3">
                Xem tất cả sự kiện
                <span className="group-hover:translate-x-2 transition-transform">→</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-orange-300 to-red-500"></div>
            <span className="text-3xl">🏆</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-orange-300 to-red-500"></div>
          </div>
        </div>
      </div>

      {/* Thành tựu Section - Redesigned */}
      <section id="achievements" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block mb-4">
              <span className="text-4xl md:text-5xl">🏆</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-red-700 mb-3 md:mb-4">Thành tựu Vẻ vang</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-orange-500 mx-auto mb-4"></div>
            <p className="text-lg md:text-xl text-gray-600">80 năm xây dựng và phát triển</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
            {/* Achievement Card 1 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-700 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative text-center p-6 md:p-8 bg-white rounded-2xl shadow-xl card-hover border-2 border-red-100">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <span className="text-3xl md:text-4xl">🏆</span>
                </div>
                <div className="text-3xl md:text-5xl font-extrabold bg-gradient-to-br from-red-600 to-red-800 bg-clip-text text-transparent mb-2">
                  100+
                </div>
                <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto mb-3"></div>
                <p className="text-sm md:text-base font-semibold text-gray-700">Triệu dân số</p>
                <p className="text-xs text-gray-500 mt-2">Dân số đông thứ 15 thế giới</p>
              </div>
            </div>

            {/* Achievement Card 2 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative text-center p-6 md:p-8 bg-white rounded-2xl shadow-xl card-hover border-2 border-yellow-100">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <span className="text-3xl md:text-4xl">📈</span>
                </div>
                <div className="text-3xl md:text-5xl font-extrabold bg-gradient-to-br from-yellow-600 to-orange-700 bg-clip-text text-transparent mb-2">
                  Top 40
                </div>
                <div className="w-16 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto mb-3"></div>
                <p className="text-sm md:text-base font-semibold text-gray-700">Nền kinh tế thế giới</p>
                <p className="text-xs text-gray-500 mt-2">GDP tăng trưởng ấn tượng</p>
              </div>
            </div>

            {/* Achievement Card 3 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative text-center p-6 md:p-8 bg-white rounded-2xl shadow-xl card-hover border-2 border-blue-100">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <span className="text-3xl md:text-4xl">🎓</span>
                </div>
                <div className="text-3xl md:text-5xl font-extrabold bg-gradient-to-br from-blue-600 to-indigo-700 bg-clip-text text-transparent mb-2">
                  95%+
                </div>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-3"></div>
                <p className="text-sm md:text-base font-semibold text-gray-700">Tỷ lệ biết chữ</p>
                <p className="text-xs text-gray-500 mt-2">Giáo dục phát triển toàn diện</p>
              </div>
            </div>

            {/* Achievement Card 4 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative text-center p-6 md:p-8 bg-white rounded-2xl shadow-xl card-hover border-2 border-green-100">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <span className="text-3xl md:text-4xl">🌏</span>
                </div>
                <div className="text-3xl md:text-5xl font-extrabold bg-gradient-to-br from-green-600 to-emerald-700 bg-clip-text text-transparent mb-2">
                  190+
                </div>
                <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mb-3"></div>
                <p className="text-sm md:text-base font-semibold text-gray-700">Quan hệ ngoại giao</p>
                <p className="text-xs text-gray-500 mt-2">Hội nhập quốc tế sâu rộng</p>
              </div>
            </div>
          </div>

          {/* Additional Stats Row */}
          <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
            <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-200">
              <div className="text-2xl md:text-3xl font-bold text-red-600 mb-1">63</div>
              <p className="text-xs md:text-sm text-gray-600">Tỉnh/Thành phố</p>
            </div>
            <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-200">
              <div className="text-2xl md:text-3xl font-bold text-red-600 mb-1">54</div>
              <p className="text-xs md:text-sm text-gray-600">Dân tộc anh em</p>
            </div>
            <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-200">
              <div className="text-2xl md:text-3xl font-bold text-red-600 mb-1">8</div>
              <p className="text-xs md:text-sm text-gray-600">Di sản thế giới</p>
            </div>
            <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-200">
              <div className="text-2xl md:text-3xl font-bold text-red-600 mb-1">∞</div>
              <p className="text-xs md:text-sm text-gray-600">Tinh thần bất diệt</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-red-700 via-red-800 to-red-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 float-animate">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg"
              alt="Vietnam Flag"
              fill
              className="object-contain"
            />
          </div>
          <div className="absolute bottom-10 right-10 w-32 h-32 float-animate" style={{ animationDelay: '2s' }}>
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg"
              alt="Vietnam Flag"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-5xl md:text-7xl mb-6 md:mb-8 star-animate inline-block">🇻🇳</div>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6 md:mb-8"></div>
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold italic mb-4 md:mb-6 leading-relaxed px-4">
              &quot;"Không có gì quý hơn độc lập, tự do"&quot;
            </blockquote>
            <div className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full">
              <p className="text-lg md:text-xl text-yellow-300 font-semibold">- Chủ tịch Hồ Chí Minh -</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="about" className="bg-gradient-to-b from-gray-900 to-black text-white py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
            {/* Logo và mô tả */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-2xl md:text-3xl">🇻🇳</span>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold">Quốc khánh 2/9</h3>
                  <p className="text-xs md:text-sm text-yellow-300">Kỷ niệm 80 năm vẻ vang</p>
                </div>
              </div>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed max-w-md">
                Trang web kỷ niệm 80 năm Ngày Quốc khánh nước Cộng hòa Xã hội Chủ nghĩa Việt Nam (2/9/1945 - 2/9/2025).
                Cùng nhau tôn vinh những giá trị lịch sử và hướng tới tương lai tươi sáng.
              </p>
            </div>

            {/* Liên kết nhanh */}
            <div>
              <h4 className="text-base md:text-lg font-bold mb-3 md:mb-4 text-yellow-300">Liên kết nhanh</h4>
              <ul className="space-y-2 md:space-y-3">
                <li>
                  <Link href="#events" className="text-sm md:text-base text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                    <span>→</span> Sự kiện
                  </Link>
                </li>
                <li>
                  <Link href="#achievements" className="text-sm md:text-base text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                    <span>→</span> Thành tựu
                  </Link>
                </li>
                <li>
                  <Link href="#timeline" className="text-sm md:text-base text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                    <span>→</span> Lịch sử
                  </Link>
                </li>
              </ul>
            </div>

            {/* Liên hệ */}
            <div>
              <h4 className="text-base md:text-lg font-bold mb-3 md:mb-4 text-yellow-300">Liên hệ</h4>
              <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-gray-400">
                <li className="flex items-start gap-2">
                  <span>📧</span>
                  <span>info@quockhanh.vn</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>📱</span>
                  <span>1900 1945</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>📍</span>
                  <span>Hà Nội, Việt Nam</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Đường phân cách */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-6 md:mb-8"></div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-xs md:text-sm text-gray-500">
              © 2025 Kỷ niệm 80 năm Quốc khánh Việt Nam. Tự hào dân tộc Việt Nam.
            </p>
            <div className="flex items-center justify-center gap-4 mt-4">
              <span className="text-2xl md:text-3xl pulse-animate">❤️</span>
              <span className="text-xs md:text-sm text-gray-400">Được tạo với tình yêu dành cho Tổ quốc</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}