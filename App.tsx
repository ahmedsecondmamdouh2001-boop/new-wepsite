
import React from 'react';
import Navbar from './components/Navbar';
import HallCard from './components/HallCard';
import Footer from './components/Footer';
import { HALLS, TESTIMONIALS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#fdfbff]">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section - Elite Proficiency Style */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
          {/* Background Layers */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#2e1a47]/80 via-[#2e1a47]/40 to-[#fdfbff] z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1600" 
              className="w-full h-full object-cover scale-110 animate-[pulse_10s_infinite]"
              alt="Wedding Venue"
            />
          </div>

          <div className="container mx-auto px-6 relative z-20 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-2.5 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 mb-8 animate-bounce shadow-2xl">
              <span className="w-2 h-2 bg-[#ffb300] rounded-full"></span>
              <span className="text-white text-xs font-black tracking-widest uppercase">أكبر دليل للقاعات الفاخرة في مصر</span>
            </div>

            {/* Heading */}
            <h1 className="text-6xl md:text-8xl font-[900] text-white mb-8 leading-[1.1] drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              ليلة العمر.. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffb300] via-[#ffd700] to-[#ffb300] animate-gradient">تستحق الأفضل</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-16 max-w-4xl mx-auto font-medium leading-relaxed opacity-90">
              نحن نؤمن أن كل عروس ملكة، لذا نجمع لكِ نخبة قاعات الأفراح لنحول أحلامك إلى واقع ملموس بكل فخامة.
            </p>
            
            {/* Advanced Search Engine Card */}
            <div className="max-w-6xl mx-auto">
              <div className="bg-white/10 backdrop-blur-2xl p-2 rounded-[3.5rem] border border-white/30 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]">
                <div className="bg-white rounded-[3rem] p-4 md:p-2 grid grid-cols-1 md:grid-cols-4 gap-2 items-center">
                  
                  {/* Location Search */}
                  <div className="flex items-center px-6 py-4 border-l border-gray-100 group">
                    <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 ml-4 group-hover:bg-purple-600 group-hover:text-white transition-all">
                      <i className="fas fa-map-marked-alt"></i>
                    </div>
                    <div className="text-right flex-1">
                      <label className="block text-[10px] font-black text-gray-400 uppercase mb-1">الموقع المفضل</label>
                      <input type="text" placeholder="القاهرة، التجمع.." className="w-full outline-none text-gray-900 font-bold placeholder:text-gray-300" />
                    </div>
                  </div>

                  {/* Capacity Search */}
                  <div className="flex items-center px-6 py-4 border-l border-gray-100 group">
                    <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 ml-4 group-hover:bg-purple-600 group-hover:text-white transition-all">
                      <i className="fas fa-users"></i>
                    </div>
                    <div className="text-right flex-1">
                      <label className="block text-[10px] font-black text-gray-400 uppercase mb-1">عدد المدعوين</label>
                      <input type="number" placeholder="مثلاً: 300 فرد" className="w-full outline-none text-gray-900 font-bold placeholder:text-gray-300" />
                    </div>
                  </div>

                  {/* Budget Search */}
                  <div className="flex items-center px-6 py-4 group">
                    <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 ml-4 group-hover:bg-purple-600 group-hover:text-white transition-all">
                      <i className="fas fa-wallet"></i>
                    </div>
                    <div className="text-right flex-1">
                      <label className="block text-[10px] font-black text-gray-400 uppercase mb-1">الميزانية المقدرة</label>
                      <input type="text" placeholder="ج.م 40,000" className="w-full outline-none text-gray-900 font-bold placeholder:text-gray-300" />
                    </div>
                  </div>

                  {/* Search Button */}
                  <button className="bg-gradient-to-r from-[#2e1a47] to-[#4527a0] text-white h-full min-h-[70px] rounded-[2.5rem] font-black text-lg flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-purple-900/20">
                    <i className="fas fa-magic text-[#ffb300]"></i>
                    <span>ابدأ البحث</span>
                  </button>

                </div>
              </div>
              
              {/* Quick Tags */}
              <div className="mt-8 flex flex-wrap justify-center gap-4 text-white/70">
                <span className="text-sm">بحث شائع:</span>
                {['فنادق 5 نجوم', 'أوبن اير', 'أسعار اقتصادية', 'قاعات ملكية'].map(tag => (
                  <button key={tag} className="text-xs font-bold px-4 py-1.5 bg-white/5 hover:bg-white/20 rounded-full border border-white/10 transition-all underline decoration-[#ffb300]/50 underline-offset-4">
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Halls Section */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div className="text-right">
                <div className="flex items-center gap-3 mb-4">
                   <div className="w-12 h-[2px] bg-[#ffb300]"></div>
                   <span className="text-[#ffb300] font-black text-sm tracking-[0.3em] uppercase">المجموعة الفاخرة</span>
                </div>
                <h2 className="text-5xl font-[900] text-[#2e1a47]">أفخم القاعات المختارة</h2>
              </div>
              <div className="flex p-1.5 bg-gray-100 rounded-2xl shadow-inner">
                {['الكل', 'فنادق', 'حدائق', 'قصور'].map((cat, i) => (
                  <button key={cat} className={`px-8 py-3 rounded-xl text-sm font-black transition-all ${i === 0 ? 'bg-white text-purple-900 shadow-md' : 'text-gray-400 hover:text-gray-600'}`}>
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {HALLS.map(hall => (
                <HallCard key={hall.id} hall={hall} />
              ))}
            </div>
            
            <div className="mt-24 text-center">
              <button className="group relative px-16 py-6 bg-transparent text-[#2e1a47] font-black rounded-2xl border-2 border-[#2e1a47] overflow-hidden transition-all hover:text-white">
                <div className="absolute inset-0 w-0 bg-[#2e1a47] transition-all duration-500 group-hover:w-full -z-10"></div>
                <span className="relative z-10 flex items-center gap-4">
                  اكتشفي المزيد من القاعات 
                  <i className="fas fa-long-arrow-alt-left text-xl group-hover:-translate-x-2 transition-transform"></i>
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* Testimonials Placeholder */}
        <section className="py-32 bg-[#2e1a47] text-white">
           {/* ... existing Testimonials logic ... */}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
