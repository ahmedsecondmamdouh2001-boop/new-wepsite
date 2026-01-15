
import React from 'react';
import { Hall } from '../types';

interface Props {
  hall: Hall;
}

const HallCard: React.FC<Props> = ({ hall }) => {
  return (
    <div className="bg-white rounded-[2rem] overflow-hidden group flex flex-col h-full border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={hall.image} 
          alt={hall.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-md text-purple-600 px-4 py-1.5 rounded-full text-[11px] font-bold shadow-lg uppercase tracking-wider">
          <i className="fas fa-tag ml-1 text-[9px]"></i> {hall.tags[0]}
        </div>
      </div>
      
      <div className="p-8 flex flex-col flex-grow relative">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors">{hall.name}</h3>
          <div className="bg-yellow-50 px-2 py-1 rounded-lg flex items-center gap-1">
             <i className="fas fa-star text-yellow-500 text-xs"></i>
             <span className="text-sm font-bold text-gray-800">{hall.rating}</span>
          </div>
        </div>
        
        <p className="text-sm text-gray-500 mb-8 flex items-center gap-2 font-medium">
          <i className="fas fa-map-marker-alt text-purple-500"></i>
          {hall.location}
        </p>
        
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 group-hover:bg-purple-50 group-hover:border-purple-100 transition-colors">
            <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">السعة القصوى</p>
            <p className="text-base font-bold text-gray-800">{hall.capacity} فرد</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 group-hover:bg-purple-50 group-hover:border-purple-100 transition-colors">
            <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">تبدأ من</p>
            <p className="text-base font-bold text-gray-800">{hall.price.toLocaleString()} ج.م</p>
          </div>
        </div>

        <button className="w-full py-4.5 bg-purple-600 text-white rounded-2xl text-sm font-bold hover:bg-purple-700 transition-all shadow-lg shadow-purple-100 mt-auto flex items-center justify-center gap-2 group/btn">
          <span>عرض التفاصيل والحجز</span>
          <i className="fas fa-arrow-left text-xs transition-transform group-hover/btn:-translate-x-1"></i>
        </button>
      </div>
    </div>
  );
};

export default HallCard;
