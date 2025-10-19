import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-red-700 via-red-600 to-red-700 text-white shadow-xl sticky top-0 z-50 gradient-animate">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-5">
          {/* Logo và tiêu đề */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg p-2">
              <div className="relative w-full h-full">
                <Image 
                  src="https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg"
                  alt="Vietnam Flag"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
                <Link href="/" className="hover:text-yellow-300 transition-colors duration-300">
                  Quốc Khánh 2/9
                </Link>
              </h1>
              <p className="text-xs md:text-sm text-yellow-200 font-light">Kỷ niệm 80 năm</p>
            </div>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <Link 
                  href="/" 
                  className="relative group text-lg font-medium hover:text-yellow-300 transition-colors duration-300"
                >
                  Trang chủ
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/events" 
                  className="relative group text-lg font-medium hover:text-yellow-300 transition-colors duration-300"
                >
                  Sự kiện
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/news" 
                  className="relative group text-lg font-medium hover:text-yellow-300 transition-colors duration-300"
                >
                  Tin tức
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="relative group text-lg font-medium hover:text-yellow-300 transition-colors duration-300"
                >
                  Giới thiệu
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            </ul>
          </nav>
          
          {/* Mobile menu button */}
          <button className="md:hidden text-white hover:text-yellow-300 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Decorative border */}
      <div className="h-1 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400"></div>
    </header>
  );
};

export default Header;