
import React from 'react';
import { Order, OrderStatus } from '../types';

interface Props {
  order: Order | null;
  onBack: () => void;
}

const TrackingView: React.FC<Props> = ({ order, onBack }) => {
  if (!order) {
    return (
      <div className="h-full flex flex-col items-center justify-center p-10 text-center space-y-4">
         <div className="text-6xl grayscale opacity-30">🛒</div>
         <h2 className="text-xl font-bold text-slate-800">لا توجد طلبات جارية حالياً</h2>
         <p className="text-slate-400">ابدأ بطلب وجبتك المفضلة وسنريك تتبعها هنا</p>
         <button onClick={onBack} className="bg-[#008751] text-white px-8 py-3 rounded-full font-bold">تسوق الآن</button>
      </div>
    );
  }

  const getStatusLabel = (s: OrderStatus) => {
    switch (s) {
      case OrderStatus.PENDING: return 'بانتظار الموافقة';
      case OrderStatus.ACCEPTED: return 'تم قبول الطلب';
      case OrderStatus.PREPARING: return 'قيد التحضير';
      case OrderStatus.READY: return 'جاهز للتوصيل';
      case OrderStatus.DELIVERING: return 'طلبك قيد التوصيل';
      case OrderStatus.DELIVERED: return 'تم التوصيل بنجاح';
      default: return 'جاري المعالجة';
    }
  };

  return (
    <div className="flex flex-col h-full bg-slate-50">
      {/* Green Header */}
      <div className="bg-[#008751] pt-12 pb-6 px-6 rounded-b-[2rem] shadow-lg flex items-center">
        <button onClick={onBack} className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white ml-4">
           <span className="rotate-180">➜</span>
        </button>
        <h1 className="text-xl font-bold text-white flex-1">{getStatusLabel(order.status)}</h1>
      </div>

      {/* Mock Map Section */}
      <div className="flex-1 relative overflow-hidden bg-slate-200">
         <img src="https://picsum.photos/seed/map/800/1000" className="w-full h-full object-cover opacity-50 grayscale-[0.5]" alt="map" />
         
         {/* Courier Icon Animation */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
               <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-25"></div>
               <div className="bg-white p-3 rounded-full shadow-2xl relative z-10">
                  <span className="text-3xl">🛵</span>
               </div>
            </div>
         </div>

         {/* Destinations */}
         <div className="absolute top-1/4 right-1/4">
            <div className="bg-red-500 w-4 h-4 rounded-full border-2 border-white shadow-lg"></div>
            <div className="bg-white px-2 py-1 rounded-lg text-[10px] font-bold mt-1 shadow-sm">المطعم</div>
         </div>
         <div className="absolute bottom-1/4 left-1/3">
            <div className="bg-[#008751] w-4 h-4 rounded-full border-2 border-white shadow-lg"></div>
            <div className="bg-white px-2 py-1 rounded-lg text-[10px] font-bold mt-1 shadow-sm">أنت</div>
         </div>
      </div>

      {/* Order Info Drawer */}
      <div className="bg-white rounded-t-[3rem] shadow-2xl p-8 space-y-6">
         <div className="flex justify-between items-center pb-4 border-b border-slate-100">
            <div>
               <h3 className="text-sm text-slate-400">بيانات الموصل:</h3>
               <div className="flex items-center space-x-3 space-x-reverse mt-2">
                  <img src={order.driver?.image || 'https://i.pravatar.cc/150'} className="w-14 h-14 rounded-2xl object-cover" alt="driver" />
                  <div>
                     <p className="font-bold text-slate-800 text-lg">{order.driver?.name || 'أحمد'}</p>
                     <p className="text-xs text-slate-500">📞 {order.driver?.phone || '0661 000 000'}</p>
                  </div>
               </div>
            </div>
            <button className="bg-[#008751] text-white px-6 py-3 rounded-2xl font-bold text-sm shadow-md active:scale-95 transition-transform flex items-center gap-2">
               <span>📞</span>
               <span>اتصال</span>
            </button>
         </div>

         <div className="space-y-4">
            <div className="flex justify-between items-center">
               <span className="text-slate-500">رقم الطلب:</span>
               <span className="font-bold text-slate-800">{order.id}</span>
            </div>
            <div className="flex justify-between items-center">
               <span className="text-slate-500">الوقت المتوقع:</span>
               <span className="font-bold text-[#008751]">15 - 20 دقيقة</span>
            </div>
         </div>
         
         <div className="pt-2">
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
               <div className="bg-[#008751] h-full w-2/3 transition-all duration-1000"></div>
            </div>
            <div className="flex justify-between mt-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
               <span>تحضير</span>
               <span className="text-[#008751]">توصيل</span>
               <span>استلام</span>
            </div>
         </div>
      </div>
    </div>
  );
};

export default TrackingView;
