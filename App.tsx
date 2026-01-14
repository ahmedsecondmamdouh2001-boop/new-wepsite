
import React from 'react';
import Navbar from './components/Navbar';
import HallCard from './components/HallCard';
import Footer from './components/Footer';
import { HALLS, TESTIMONIALS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section - Elite Style */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1600" 
              className="w-full h-full object-cover brightness-50"
              alt="Wedding Hall Background"
            />
          </div>
          <div className="container mx-auto px-6 relative z-10 text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">ابحث عن <span className="text-[#ffb300]">قاعة أحلامك</span></h1>
            <p className="text-xl md:text-2xl mb-10 text-gray-200 max-w-3xl mx-auto font-light">
              نجمع لك أفخم وأرقى قاعات الأفراح في مصر لتختار منها ما يناسب ليلتك المميزة.
            </p>
            
            <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md p-4 rounded-3xl border border-white/20 shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-2xl flex items-center px-4 py-3 text-right group focus-within:ring-2 focus-within:ring-purple-500 transition-all">
                  <i className="fas fa-map-marker-alt text-purple-600 ml-3"></i>
                  <input type="text" placeholder="اختر المدينة أو المنطقة" className="bg-transparent w-full outline-none text-gray-800 text-sm" />
                </div>
                <div className="bg-white rounded-2xl flex items-center px-4 py-3 text-right focus-within:ring-2 focus-within:ring-purple-500 transition-all">
                  <i className="fas fa-users text-purple-600 ml-3"></i>
                  <input type="number" placeholder="عدد المدعوين" className="bg-transparent w-full outline-none text-gray-800 text-sm" />
                </div>
                <button className="bg-[#ffb300] hover:bg-[#e6a100] text-purple-900 font-bold py-4 rounded-2xl transition-all shadow-lg text-sm flex items-center justify-center gap-2">
                  <i className="fas fa-search"></i> اكتشف القاعات الآن
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Halls Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
              <div className="text-right">
                <span className="text-purple-600 font-bold text-sm tracking-widest uppercase mb-2 block">اختياراتنا لك</span>
                <h2 className="text-4xl font-bold text-gray-900">أحدث وأفضل القاعات</h2>
              </div>
              <div className="flex gap-4">
                <button className="px-6 py-2 bg-white border border-gray-200 rounded-full text-sm font-bold text-gray-600 hover:bg-purple-600 hover:text-white transition-all">الكل</button>
                <button className="px-6 py-2 bg-white border border-gray-200 rounded-full text-sm font-bold text-gray-600 hover:bg-purple-600 hover:text-white transition-all">فنادق</button>
                <button className="px-6 py-2 bg-white border border-gray-200 rounded-full text-sm font-bold text-gray-600 hover:bg-purple-600 hover:text-white transition-all">فيات جاردن</button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {HALLS.map(hall => (
                <HallCard key={hall.id} hall={hall} />
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <button className="px-10 py-4 border-2 border-purple-600 text-purple-600 font-bold rounded-2xl hover:bg-purple-600 hover:text-white transition-all shadow-xl shadow-purple-100">
                عرض جميع القاعات المتاحة
              </button>
            </div>
          </div>
        </section>

        {/* Customer Reviews Section - New */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-50 rounded-full -mr-32 -mt-32 opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-50 rounded-full -ml-48 -mb-48 opacity-30"></div>
          
          <div className="container mx-auto px-6 relative z-10 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">ماذا يقول عملاؤنا؟</h2>
            <p className="text-gray-500 max-w-2xl mx-auto mb-16">نفخر بمساعدة مئات العرسان في العثور على المكان المثالي لليلة العمر، وهذه بعض تجاربهم.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {TESTIMONIALS.map((review) => (
                <div key={review.id} className="bg-white p-8 rounded-3xl shadow-xl border border-gray-50 text-right flex flex-col h-full hover:shadow-2xl transition-shadow">
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex text-yellow-400 gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <i key={i} className="fas fa-star text-sm"></i>
                      ))}
                    </div>
                    <i className="fas fa-quote-right text-3xl text-purple-100"></i>
                  </div>
                  <p className="text-gray-600 italic leading-relaxed mb-8 flex-grow">
                    "{review.comment}"
                  </p>
                  <div className="flex items-center gap-4 flex-row-reverse border-t border-gray-50 pt-6">
                    <img src={review.avatar} alt={review.name} className="w-14 h-14 rounded-2xl object-cover border-2 border-purple-100" />
                    <div className="text-right">
                      <h4 className="font-bold text-gray-900">{review.name}</h4>
                      <p className="text-xs text-purple-600 font-medium">{review.hall}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-purple-900 py-16 text-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-4xl font-bold mb-2">+500</p>
                <p className="text-purple-300 text-sm">قاعة مسجلة</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-2">+1200</p>
                <p className="text-purple-300 text-sm">حفل زفاف تم</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-2">100%</p>
                <p className="text-purple-300 text-sm">ضمان توافر</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-2">4.9</p>
                <p className="text-purple-300 text-sm">متوسط التقييم</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
