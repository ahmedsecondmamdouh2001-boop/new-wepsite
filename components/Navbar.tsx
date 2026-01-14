
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="nav-purple text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Section */}
          <div className="flex items-center gap-3 min-w-fit">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-xl">
              <i className="fas fa-gem"></i>
            </div>
            <div className="leading-tight">
              <h1 className="text-xl font-bold">قاعات جوزني</h1>
              <p className="text-[10px] text-white/70">أفضل قاعات الأفراح</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center h-full">
            <div className="flex items-center h-full gap-1">
              <a href="#" className="nav-item-active px-6 h-full flex flex-col items-center justify-center gap-1 transition-all">
                <i className="fas fa-home text-lg"></i>
                <span className="text-sm font-bold">الرئيسية</span>
              </a>

              <div className="group relative h-full">
                <button className="px-4 h-full flex items-center gap-2 hover:bg-white/10 transition-all">
                  <i className="fas fa-building text-sm"></i>
                  <span className="text-sm">القاعات</span>
                  <i className="fas fa-chevron-down text-[10px] opacity-70"></i>
                </button>
                {/* Dropdown can be added here */}
              </div>

              <div className="group relative h-full">
                <button className="px-4 h-full flex items-center gap-2 hover:bg-white/10 transition-all">
                  <i className="fas fa-palette text-sm"></i>
                  <span className="text-sm">الماكياج</span>
                  <i className="fas fa-chevron-down text-[10px] opacity-70"></i>
                </button>
              </div>

              <div className="group relative h-full">
                <button className="px-4 h-full flex items-center gap-2 hover:bg-white/10 transition-all">
                  <i className="fas fa-concierge-bell text-sm"></i>
                  <span className="text-sm">خدمات</span>
                  <i className="fas fa-chevron-down text-[10px] opacity-70"></i>
                </button>
              </div>

              <a href="#" className="px-4 h-full flex items-center gap-2 hover:bg-white/10 transition-all">
                <i className="fas fa-info-circle text-sm"></i>
                <span className="text-sm">من نحن</span>
              </a>

              <a href="#" className="px-4 h-full flex items-center gap-2 hover:bg-white/10 transition-all">
                <i className="fas fa-phone-alt text-sm"></i>
                <span className="text-sm">اتصل بنا</span>
              </a>
            </div>
          </div>

          {/* Search, Account, Language */}
          <div className="flex items-center gap-4">
            {/* Search Bar */}
            <div className="hidden xl:flex relative group">
              <input 
                type="text" 
                placeholder="ابحث عن قاعة أو فنان" 
                className="search-input-nav rounded-lg py-2 pr-10 pl-4 w-64 outline-none focus:ring-2 focus:ring-white/30 transition-all text-sm"
              />
              <i className="fas fa-search absolute right-3 top-1/2 -translate-y-1/2 text-white/50"></i>
            </div>

            {/* Account Dropdown */}
            <div className="relative group">
              <button className="border border-white/30 rounded-lg px-4 py-2 flex items-center gap-3 hover:bg-white/10 transition-all">
                <i className="fas fa-user-circle text-lg"></i>
                <span className="text-sm font-bold">حسابي</span>
                <i className="fas fa-chevron-down text-[10px] opacity-70"></i>
              </button>
            </div>

            {/* Language Switch */}
            <div className="relative group hidden sm:block">
              <button className="bg-white text-gray-800 rounded-lg px-3 py-2 flex items-center gap-2 text-sm font-bold">
                <i className="fas fa-language text-lg text-purple-700"></i>
                <span>عربي</span>
                <i className="fas fa-chevron-down text-[10px] opacity-40"></i>
              </button>
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
