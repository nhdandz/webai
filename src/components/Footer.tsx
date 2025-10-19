import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300 mt-20">
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-red-600 via-yellow-400 to-red-600"></div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Cột 1: Thông tin */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-2">
                <div className="relative w-full h-full">
                  <Image 
                    src="https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg"
                    alt="Vietnam Flag"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white">Quốc Khánh 2/9</h3>
            </div>
            <p className="text-sm leading-relaxed">
              Kỷ niệm 80 năm Cách mạng tháng Tám và Quốc khánh nước Cộng hòa Xã hội Chủ nghĩa Việt Nam (2/9/1945 - 2/9/2025)
            </p>
          </div>
          
          {/* Cột 2: Liên kết nhanh */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Liên kết nhanh</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:text-yellow-400 transition-colors duration-300 flex items-center">
                  <span className="mr-2">→</span> Trang chủ
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-yellow-400 transition-colors duration-300 flex items-center">
                  <span className="mr-2">→</span> Sự kiện
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-yellow-400 transition-colors duration-300 flex items-center">
                  <span className="mr-2">→</span> Tin tức
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-yellow-400 transition-colors duration-300 flex items-center">
                  <span className="mr-2">→</span> Giới thiệu
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Cột 3: Thông tin liên hệ */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Thông tin</h3>
            <div className="space-y-3 text-sm">
              <p className="flex items-start">
                <span className="mr-2 text-red-500">📍</span>
                <span>Hà Nội, Việt Nam</span>
              </p>
              <p className="flex items-start">
                <span className="mr-2 text-red-500">📧</span>
                <span>info@quockhanh2-9.vn</span>
              </p>
              <p className="flex items-start">
                <span className="mr-2 text-red-500">🌐</span>
                <span>www.quockhanh2-9.vn</span>
              </p>
            </div>
          </div>
        </div>
        
        {/* Đường phân cách */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-center md:text-left">
              &copy; 2025 Ban Tổ chức Kỷ niệm Quốc khánh 2/9. Mọi quyền được bảo lưu.
            </p>
            <p className="text-sm text-yellow-400 font-medium">
              🇻🇳 Tự hào Việt Nam - Hào hùng lịch sử
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;