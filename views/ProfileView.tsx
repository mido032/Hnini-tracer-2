
import React from 'react';

interface Props {
  onSwitchToMerchant: () => void;
}

const ProfileView: React.FC<Props> = ({ onSwitchToMerchant }) => {
  const menuItems = [
    { label: 'عناويني', icon: '📍', sub: 'إدارة مواقع التوصيل' },
    { label: 'طرق الدفع', icon: '💳', sub: 'إدارة البطاقات البنكية' },
    { label: 'الإعدادات', icon: '⚙️', sub: 'اللغة، الإشعارات' },
    { label: 'المساعدة والدعم', icon: '🎧', sub: 'تواصل معنا' },
  ];

  return (
    <div className="p-6">
      <div className="flex flex-col items-center py-10 space-y-4">
         <div className="relative">
            <img src="https://i.pravatar.cc/200?u=user1" className="w-32 h-32 rounded-[2.5rem] border-4 border-white shadow-2xl" alt="user" />
            <div className="absolute -bottom-2 -right-2 bg-[#FFD700] p-3 rounded-2xl shadow-lg">
               ✏️
            </div>
         </div>
         <div className="text-center">
            <h1 className="text-2xl font-bold text-slate-800">عبد القادر بن محمد</h1>
            <p className="text-slate-400 font-medium">0661 22 33 44</p>
         </div>
      </div>

      <div className="bg-[#008751] p-6 rounded-[2rem] text-white flex justify-between items-center shadow-lg mb-8">
         <div className="space-y-1">
            <h3 className="font-bold text-lg">هل تملك محلاً؟</h3>
            <p className="text-xs opacity-80">سجل متجرك معنا وزد أرباحك الآن</p>
         </div>
         <button 
          onClick={onSwitchToMerchant}
          className="bg-white text-[#008751] px-6 py-3 rounded-2xl font-bold text-sm shadow-md"
         >
            دخول التجار
         </button>
      </div>

      <div className="space-y-4">
         {menuItems.map((item, i) => (
           <div key={i} className="bg-white p-5 rounded-3xl flex items-center space-x-4 space-x-reverse shadow-sm border border-slate-100 hover:bg-slate-50 transition-colors cursor-pointer">
              <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-2xl">
                 {item.icon}
              </div>
              <div className="flex-1">
                 <h4 className="font-bold text-slate-800">{item.label}</h4>
                 <p className="text-xs text-slate-400">{item.sub}</p>
              </div>
              <span className="text-slate-300">➜</span>
           </div>
         ))}
      </div>

      <button className="w-full mt-10 p-5 rounded-3xl text-red-500 font-bold border-2 border-red-50 border-dashed hover:bg-red-50 transition-colors">
         تسجيل الخروج
      </button>
    </div>
  );
};

export default ProfileView;
