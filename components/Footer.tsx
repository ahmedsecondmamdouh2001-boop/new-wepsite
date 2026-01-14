
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a1a2e] text-gray-300 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Section 1: Brand Info */}
          <div className="text-right">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-2xl text-white border border-white/20">
                <i className="fas fa-gem"></i>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">قاعات جوزني</h3>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest">أفضل قاعات الأفراح في مصر</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-8 text-gray-400">
              منصة متكاملة تقدم لك تجربة حجز فريدة لاكتشاف أفضل قاعات الأفراح وفناني الماكياج في مصر. نساعدك في تحقيق حلم يوم زفافك المثالي بأسهل الطرق وأفضل الأسعار.
            </p>
            <div className="flex gap-4 justify-start flex-row-reverse">
              {['facebook-f', 'twitter', 'instagram', 'youtube', 'tiktok', 'linkedin-in'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-purple-600 transition-all text-sm">
                  <i className={`fab fa-${social}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Section 2: Quick Links */}
          <div className="text-right">
            <h4 className="text-white font-bold mb-8 relative inline-block pb-2 border-b-2 border-purple-600">روابط سريعة</h4>
            <ul className="space-y-4">
              {[
                { name: 'الرئيسية', icon: 'home' },
                { name: 'جميع القاعات', icon: 'th-large' },
                { name: 'فناني الماكياج', icon: 'magic' },
                { name: 'من نحن', icon: 'info-circle' },
                { name: 'اتصل بنا', icon: 'envelope' },
                { name: 'القاعات المميزة', icon: 'star' },
                { name: 'حجوزاتي', icon: 'calendar-check' }
              ].map((link) => (
                <li key={link.name}>
                  <a href="#" className="flex items-center justify-start gap-3 hover:text-purple-400 transition-colors text-sm group">
                    <span className="text-purple-500 opacity-50 group-hover:opacity-100"><i className={`fas fa-${link.icon}`}></i></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3: Services */}
          <div className="text-right">
            <h4 className="text-white font-bold mb-8 relative inline-block pb-2 border-b-2 border-purple-600">خدماتنا</h4>
            <ul className="space-y-4">
              {[
                { name: 'بحث متقدم', icon: 'search' },
                { name: 'جولات افتراضية', icon: 'vr-cardboard' },
                { name: 'حجز مباشر', icon: 'bolt' },
                { name: 'فناني الماكياج', icon: 'paint-brush' },
                { name: 'بحث متقدم للماكياج', icon: 'filter' },
                { name: 'استشارات مجانية', icon: 'comments' },
                { name: 'عروض وتخفيضات', icon: 'gift' },
                { name: 'الدعم الفني', icon: 'headset' }
              ].map((link) => (
                <li key={link.name}>
                  <a href="#" className="flex items-center justify-start gap-3 hover:text-purple-400 transition-colors text-sm group">
                    <span className="text-purple-500 opacity-50 group-hover:opacity-100"><i className={`fas fa-${link.icon}`}></i></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 4: Contact & Newsletter */}
          <div className="text-right">
            <h4 className="text-white font-bold mb-8 relative inline-block pb-2 border-b-2 border-purple-600">تواصل معنا</h4>
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-purple-600/20 flex items-center justify-center text-purple-500 shrink-0">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <p className="text-xs text-white font-bold">العنوان</p>
                  <p className="text-xs text-gray-400">القاهرة - مصر، المقطم، شارع التسعين</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-purple-600/20 flex items-center justify-center text-purple-500 shrink-0">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div>
                  <p className="text-xs text-white font-bold">الهاتف</p>
                  <p className="text-xs text-gray-400" dir="ltr">+20 100 123 4567</p>
                  <p className="text-xs text-gray-400" dir="ltr">+20 122 234 5678</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-purple-600/20 flex items-center justify-center text-purple-500 shrink-0">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <p className="text-xs text-white font-bold">البريد الإلكتروني</p>
                  <p className="text-xs text-gray-400">info@gawzny.com</p>
                  <p className="text-xs text-gray-400">support@gawzny.com</p>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <h5 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                <i className="fas fa-paper-plane text-purple-500"></i> النشرة البريدية
              </h5>
              <p className="text-[10px] text-gray-400 mb-4">اشترك للحصول على أحدث العروض والأخبار</p>
              <div className="flex bg-white/10 p-1 rounded-xl">
                <input 
                  type="email" 
                  placeholder="بريدك الإلكتروني" 
                  className="bg-transparent border-none outline-none text-xs flex-1 px-3 py-2 text-white placeholder:text-gray-500"
                />
                <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-xs hover:bg-purple-700 transition-all">
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center gap-6">
          <p className="text-[11px] text-gray-500">
            &copy; {new Date().getFullYear()} شركة جوزني.. جميع الحقوق محفوظة.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {['خريطة الموقع', 'الأسئلة الشائعة', 'سياسة الاستخدام', 'سياسة الخصوصية', 'الشروط والأحكام'].map(item => (
              <a key={item} href="#" className="text-[11px] text-gray-500 hover:text-white transition-colors">{item}</a>
            ))}
          </div>
        </div>

        {/* Extra Metadata (As in image) */}
        <div className="mt-8 flex flex-wrap justify-center items-center gap-4 text-[10px] text-gray-600">
           <span className="flex items-center gap-1">تم التحديث: 2024-01-14 <i className="fas fa-calendar-alt"></i></span>
           <span className="flex items-center gap-1">عدد الزوار: 322 زائر <i className="fas fa-eye"></i></span>
           <span className="mx-2 opacity-20">|</span>
           <span className="flex items-center gap-1">تشفير SSL <i className="fas fa-lock text-green-700"></i></span>
           <span className="flex items-center gap-1">موقع آمن <i className="fas fa-shield-alt text-green-700"></i></span>
           <span className="mx-2 opacity-20">|</span>
           <span>مصمم بـ ❤️ في جوزني</span>
        </div>
      </div>

      {/* Floating Buttons */}
      <div className="fixed bottom-6 left-6 flex flex-col gap-3 z-50">
        <button className="w-12 h-12 bg-green-500 text-white rounded-full shadow-lg flex items-center justify-center text-xl hover:scale-110 transition-transform">
          <i className="fab fa-whatsapp"></i>
        </button>
        <button className="w-12 h-12 bg-purple-600 text-white rounded-full shadow-lg flex items-center justify-center text-sm hover:scale-110 transition-transform">
          <i className="fas fa-arrow-up"></i>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
