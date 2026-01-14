
import React from 'react';
import { Hall } from '../types';

interface Props {
  hall: Hall;
}

const HallCard: React.FC<Props> = ({ hall }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden service-card flex flex-col h-full border border-gray-100">
      <div className="relative h-60 overflow-hidden">
        <img 
          src={hall.image} 
          alt={hall.name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
        />
        <div className="absolute top-4 right-4 bg-purple-600 text-white px-4 py-1 rounded-full text-[10px] font-bold shadow-lg">
          {hall.tags[0]}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-800">{hall.name}</h3>
          <span className="text-sm font-bold text-purple-600"><i className="fas fa-star text-yellow-400 ml-1"></i>{hall.rating}</span>
        </div>
        
        <p className="text-sm text-gray-400 mb-6 flex items-center gap-2 font-medium">
          <i className="fas fa-map-marker-alt text-purple-400"></i>
          {hall.location}
        </p>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-purple-50 p-3 rounded-xl text-center">
            <p className="text-[10px] text-purple-400 font-bold uppercase mb-1">السعة</p>
            <p className="text-sm font-bold text-purple-900">{hall.capacity} فرد</p>
          </div>
          <div className="bg-gray-50 p-3 rounded-xl text-center">
            <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">السعر</p>
            <p className="text-sm font-bold text-gray-800">{hall.price.toLocaleString()} ج.م</p>
          </div>
        </div>

        <button className="w-full py-4 bg-purple-600 text-white rounded-xl text-sm font-bold hover:bg-purple-700 transition-all shadow-lg shadow-purple-100 mt-auto">
          تفاصيل الحجز
        </button>
      </div>
    </div>
  );
};

export default HallCard;
