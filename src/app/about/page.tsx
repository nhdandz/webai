import Image from 'next/image';

const AboutPage = () => {
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
          <h1 className="text-5xl md:text-6xl font-bold text-red-700 mb-4">Giới thiệu</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Về Đại lễ kỷ niệm 80 năm Quốc khánh nước Cộng hòa Xã hội Chủ nghĩa Việt Nam
          </p>
        </div>

        {/* Hero Quote */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-gradient-to-r from-red-700 to-red-800 rounded-2xl p-10 text-white shadow-2xl text-center">
            <div className="text-6xl mb-6">🇻🇳</div>
            <blockquote className="text-2xl md:text-3xl font-bold italic mb-4 leading-relaxed">
                &ldquo;Không có gì quý hơn độc lập, tự do&rdquo;
            </blockquote>
            <p className="text-xl text-yellow-300 font-semibold">- Chủ tịch Hồ Chí Minh -</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          {/* Về Quốc khánh 2/9 */}
          <section className="mb-20">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="flex items-center mb-6">
                <span className="text-5xl mr-4">📜</span>
                <h2 className="text-3xl md:text-4xl font-bold text-red-700">Về Quốc khánh 2/9</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  Ngày 2 tháng 9 năm 1945 là một ngày lịch sử trọng đại của dân tộc Việt Nam. Tại Quảng trường Ba Đình, 
                  Hà Nội, trước hàng trăm ngàn đồng bào từ mọi miền Tổ quốc, Chủ tịch Hồ Chí Minh đã thay mặt Chính phủ 
                  lâm thời đọc Tuyên ngôn Độc lập, khai sinh ra nước Việt Nam Dân chủ Cộng hòa.
                </p>
                <p>
                  Đây là kết quả của cuộc Cách mạng Tháng Tám thành công, đánh dấu bước ngoặt vĩ đại trong lịch sử 
                  dân tộc, kết thúc chế độ phong kiến và ách thống trị của chủ nghĩa thực dân, mở ra kỷ nguyên độc lập, 
                  tự do cho dân tộc Việt Nam.
                </p>
                <p>
                  80 năm qua, từ một nước nghèo nàn, lạc hậu, Việt Nam đã vươn lên mạnh mẽ, trở thành một quốc gia 
                  đang phát triển năng động, có vị thế ngày càng quan trọng trên trường quốc tế.
                </p>
              </div>
            </div>
          </section>

          {/* Dấu mốc lịch sử */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-red-700 mb-10 text-center">
              Những dấu mốc lịch sử quan trọng
            </h2>
            <div className="space-y-6">
              {/* Timeline Item 1 */}
              <div className="bg-white rounded-xl shadow-lg p-6 card-hover border-l-4 border-red-600">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      1945
                    </div>
                  </div>
                  <div className="ml-6 flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Cách mạng Tháng Tám thành công</h3>
                    <p className="text-gray-600">
                      Ngày 2/9/1945, Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập, khai sinh ra nước Việt Nam Dân chủ 
                      Cộng hòa - Nhà nước công nông đầu tiên ở Đông Nam Á.
                    </p>
                  </div>
                </div>
              </div>

              {/* Timeline Item 2 */}
              <div className="bg-white rounded-xl shadow-lg p-6 card-hover border-l-4 border-yellow-500">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      1954
                    </div>
                  </div>
                  <div className="ml-6 flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Chiến thắng Điện Biên Phủ</h3>
                    <p className="text-gray-600">
                      Chiến thắng lịch sử &ldquo;lừng lẫy năm châu, chấn động địa cầu&rdquo;, buộc thực dân Pháp phải ký 
                      Hiệp định Genève, công nhận độc lập, chủ quyền của Việt Nam.
                    </p>
                  </div>
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div className="bg-white rounded-xl shadow-lg p-6 card-hover border-l-4 border-red-600">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      1975
                    </div>
                  </div>
                  <div className="ml-6 flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Giải phóng hoàn toàn miền Nam</h3>
                    <p className="text-gray-600">
                      Ngày 30/4/1975, đất nước hoàn toàn thống nhất, kết thúc 30 năm chiến tranh, 
                      mở ra kỷ nguyên hòa bình, thống nhất, độc lập.
                    </p>
                  </div>
                </div>
              </div>

              {/* Timeline Item 4 */}
              <div className="bg-white rounded-xl shadow-lg p-6 card-hover border-l-4 border-blue-600">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      1986
                    </div>
                  </div>
                  <div className="ml-6 flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Đại hội VI - Đổi mới đất nước</h3>
                    <p className="text-gray-600">
                      Đảng khởi xướng và lãnh đạo sự nghiệp đổi mới toàn diện đất nước, mở ra thời kỳ phát triển 
                      mới, đưa Việt Nam hội nhập sâu rộng vào thế giới.
                    </p>
                  </div>
                </div>
              </div>

              {/* Timeline Item 5 */}
              <div className="bg-white rounded-xl shadow-lg p-6 card-hover border-l-4 border-yellow-400">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-gray-800 font-bold text-lg">
                      2025
                    </div>
                  </div>
                  <div className="ml-6 flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Kỷ niệm 80 năm Quốc khánh</h3>
                    <p className="text-gray-600">
                      Tự hào nhìn lại chặng đường 80 năm xây dựng và bảo vệ Tổ quốc, đồng thời vững bước 
                      tiến vào tương lai với khát vọng phát triển đất nước phồn vinh, hạnh phúc.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Thành tựu 80 năm */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-red-700 mb-10 text-center">
              Thành tựu 80 năm
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6 text-center card-hover">
                <div className="text-5xl mb-4">👥</div>
                <div className="text-4xl font-bold text-red-600 mb-2">100M+</div>
                <p className="text-gray-600 font-semibold">Dân số</p>
                <p className="text-sm text-gray-500 mt-2">Từ 20 triệu (1945)</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center card-hover">
                <div className="text-5xl mb-4">📈</div>
                <div className="text-4xl font-bold text-red-600 mb-2">Top 40</div>
                <p className="text-gray-600 font-semibold">Nền kinh tế thế giới</p>
                <p className="text-sm text-gray-500 mt-2">GDP tăng trưởng ổn định</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center card-hover">
                <div className="text-5xl mb-4">🎓</div>
                <div className="text-4xl font-bold text-red-600 mb-2">95%+</div>
                <p className="text-gray-600 font-semibold">Tỷ lệ biết chữ</p>
                <p className="text-sm text-gray-500 mt-2">Từ 5% (1945)</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center card-hover">
                <div className="text-5xl mb-4">🌏</div>
                <div className="text-4xl font-bold text-red-600 mb-2">190+</div>
                <p className="text-gray-600 font-semibold">Quan hệ ngoại giao</p>
                <p className="text-sm text-gray-500 mt-2">Bạn bè trên toàn cầu</p>
              </div>
            </div>
          </section>

          {/* Thông điệp */}
          <section className="mb-20">
            <div className="bg-gradient-to-r from-red-700 to-red-800 rounded-2xl p-10 md:p-16 text-white shadow-2xl">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Thông điệp kỷ niệm 80 năm</h2>
              </div>
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  Đại lễ kỷ niệm 80 năm Quốc khánh 2/9 không chỉ là dịp để chúng ta nhìn lại chặng đường 
                  lịch sử hào hùng mà còn là thời khắc để toàn dân tộc đoàn kết, vững tin tiến bước.
                </p>
                <p>
                  Chúng ta tự hào về truyền thống yêu nước, tinh thần đoàn kết, ý chí tự lực, tự cường của 
                  dân tộc. Đồng thời, chúng ta cũng khẳng định quyết tâm xây dựng một Việt Nam hòa bình, 
                  độc lập, thống nhất, dân giàu, nước mạnh, dân chủ, công bằng, văn minh.
                </p>
                <p className="text-yellow-300 font-bold text-xl text-center mt-8">
                  &ldquo;Tự hào Việt Nam - Hào hùng lịch sử - Vững bước tương lai&rdquo;
                </p>
              </div>
            </div>
          </section>

          {/* Ban tổ chức */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-red-700 mb-10 text-center">
              Ban Tổ chức
            </h2>
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Cơ quan chủ trì</h3>
                  <p className="text-gray-600">Ban Tổ chức Kỷ niệm 80 năm Quốc khánh 2/9</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Địa chỉ</h3>
                  <p className="text-gray-600">Hà Nội, Việt Nam</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Liên hệ</h3>
                  <p className="text-gray-600">Email: info@quockhanh2-9.vn</p>
                  <p className="text-gray-600">Hotline: 1900-xxxx (24/7)</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Mạng xã hội</h3>
                  <div className="flex space-x-4 mt-3">
                    <button className="w-12 h-12 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                      f
                    </button>
                    <button className="w-12 h-12 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors">
                      Y
                    </button>
                    <button className="w-12 h-12 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition-colors">
                      T
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;