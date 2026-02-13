
import React from 'react';

interface Props {
  onBack: () => void;
}

const MerchantDashboard: React.FC<Props> = ({ onBack }) => {
  const stats = [
    { label: 'طلبات اليوم', val: '12', color: 'bg-blue-500' },
    { label: 'المبيعات', val: '8,500 دج', color: 'bg-green-500' },
    { label: 'نشطة حالياً', val: '2', color: 'bg-yellow-500' },
  ];

  return (
    <div className="min-h-screen bg-slate-100 pb-20">
      <div className="bg-[#1e293b] pt-12 pb-10 px-6 rounded-b-[3rem] text-white shadow-xl">
         <div className="flex justify-between items-center mb-8">
            <div className="flex items-center space-x-3 space-x-reverse">
               <div className="w-12 h-12 bg-[#FFD700] rounded-2xl flex items-center justify-center text-slate-800 font-bold text-xl">BK</div>
               <div>
                  <h1 className="text-lg font-bold">برجر كينج الحراش</h1>
                  <p className="text-xs opacity-60">لوحة تحكم المتجر</p>
               </div>
            </div>
            <button onClick={onBack} className="text-sm bg-white/10 px-4 py-2 rounded-xl font-bold">خروج</button>
         </div>

         <div className="grid grid-cols-3 gap-4">
            {stats.map((s, i) => (
               <div key={i} className="bg-white/10 backdrop-blur-md p-4 rounded-3xl border border-white/5">
                  <div className={`w-2 h-2 rounded-full mb-2 ${s.color}`}></div>
                  <div className="text-[10px] opacity-60 font-bold uppercase mb-1">{s.label}</div>
                  <div className="text-base font-bold">{s.val}</div>
               </div>
            ))}
         </div>
      </div>

      <div className="px-6 -mt-6">
         <div className="bg-white rounded-3xl shadow-lg p-6 space-y-6">
            <div className="flex justify-between items-center">
               <h2 className="text-xl font-bold text-slate-800">الطلبات الواردة</h2>
               <span className="bg-red-500 text-white text-[10px] px-2 py-1 rounded-full animate-pulse">جديد</span>
            </div>

            <div className="space-y-4">
               {[1, 2].map(i => (
                  <div key={i} className="p-4 rounded-2xl border-2 border-slate-50 bg-slate-50 space-y-3">
                     <div className="flex justify-between items-center">
                        <span className="font-bold text-slate-800">طلب #ORD-772{i}</span>
                        <span className="text-[10px] font-bold text-slate-400">منذ 5 دقائق</span>
                     </div>
                     <div className="text-xs text-slate-600">
                        <p>1x وجبة ووبر كلاسيك</p>
                        <p>2x تشيز برجر مضاعف</p>
                     </div>
                     <div className="flex gap-2">
                        <button className="flex-1 bg-green-500 text-white py-2 rounded-xl font-bold text-sm shadow-sm">قبول</button>
                        <button className="flex-1 bg-white text-red-500 border border-red-100 py-2 rounded-xl font-bold text-sm shadow-sm">رفض</button>
                     </div>
                  </div>
               ))}
            </div>
         </div>

         <div className="mt-8 space-y-4">
            <h3 className="text-lg font-bold text-slate-800">إدارة المنتجات</h3>
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-50 flex justify-between items-center">
               <div className="flex items-center space-x-3 space-x-reverse">
                  <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-xl">🍔</div>
                  <div>
                     <p className="font-bold text-slate-800">قائمة الطعام</p>
                     <p className="text-xs text-slate-400">12 منتج مفعل</p>
                  </div>
               </div>
               <button className="text-[#008751] font-bold text-sm">تعديل</button>
            </div>
         </div>
      </div>
    </div>
  );
};

export default MerchantDashboard;
