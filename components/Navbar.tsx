
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-[#2e1a47]/95 backdrop-blur-md text-white sticky top-0 z-[100] shadow-2xl border-b border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-24">
          
          {/* Logo Section */}
          <div className="flex items-center gap-4 min-w-fit cursor-pointer group">
            <div className="w-12 h-12 bg-gradient-to-br from-[#ffb300] to-[#ff8f00] rounded-2xl flex items-center justify-center text-2xl text-[#2e1a47] shadow-[0_0_20px_rgba(255,179,0,0.3)] group-hover:rotate-12 transition-transform duration-500">
              <i className="fas fa-gem"></i>
            </div>
            <div className="leading-tight">
              <h1 className="text-2xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-l from-white to-gray-300">جوزني</h1>
              <p className="text-[10px] text-[#ffb300] font-bold uppercase tracking-[0.2em]">الخيار الملكي</p>
            </div>
          </div>

          {/* Main Navigation Links */}
          <div className="hidden lg:flex items-center h-full gap-2">
            <a href="#" className="relative px-5 h-full flex items-center gap-2 group overflow-hidden">
              <div className="absolute bottom-0 left-0 w-full h-1 bg-[#ffb300] translate-y-0 transition-transform"></div>
              <i className="fas fa-home text-[#ffb300]"></i>
              <span className="text-sm font-black">الرئيسية</span>
            </a>

            {[
              { name: 'القاعات', icon: 'building' },
              { name: 'الماكياج', icon: 'palette' },
              { name: 'المصورين', icon: 'camera' },
              { name: 'العروض', icon: 'gift' }
            ].map((item) => (
              <div key={item.name} className="group relative h-full">
                <button className="px-5 h-full flex items-center gap-2 hover:bg-white/5 transition-all relative">
                  <i className={`fas fa-${item.icon} text-sm opacity-70 group-hover:text-[#ffb300] transition-colors`}></i>
                  <span className="text-sm font-bold">{item.name}</span>
                  <i className="fas fa-chevron-down text-[10px] opacity-40 group-hover:rotate-180 transition-transform"></i>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-[#ffb300] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right"></div>
                </button>
              </div>
            ))}
          </div>

          {/* Action Area */}
          <div className="flex items-center gap-6">
            {/* Search Toggle */}
            <button className="hidden xl:flex items-center gap-3 bg-white/5 hover:bg-white/10 px-4 py-2.5 rounded-2xl border border-white/10 transition-all group">
              <i className="fas fa-search text-[#ffb300] group-hover:scale-110 transition-transform"></i>
              <span className="text-xs text-gray-400">ابحث عن حلمك..</span>
            </button>

            {/* Account & Profile */}
            <div className="flex items-center gap-3 pl-6 border-l border-white/10">
              <div className="hidden md:flex flex-col text-left items-end">
                <span className="text-[10px] text-gray-400 font-bold uppercase">أهلاً بك</span>
                <span className="text-xs font-black">تسجيل الدخول</span>
              </div>
              <button className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#ffb300] to-[#ffd700] p-[2px] shadow-lg hover:shadow-[#ffb300]/20 transition-all overflow-hidden group">
                <div className="w-full h-full bg-[#2e1a47] rounded-[14px] flex items-center justify-center group-hover:bg-transparent transition-colors">
                  <i className="fas fa-user text-[#ffb300] group-hover:text-[#2e1a47]"></i>
                </div>
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button className="lg:hidden w-10 h-10 flex items-center justify-center text-2xl">
              <i className="fas fa-bars"></i>
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
