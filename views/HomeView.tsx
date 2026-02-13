
import React, { useState } from 'react';
import { Store } from '../types';
import { CATEGORIES, MOCK_STORES, COLORS } from '../constants';
import { getFoodRecommendations } from '../services/geminiService';

interface Props {
  onSelectStore: (s: Store) => void;
  onNotificationClick: () => void;
}

const HomeView: React.FC<Props> = ({ onSelectStore, onNotificationClick }) => {
  const [search, setSearch] = useState('');
  const [aiRecs, setAiRecs] = useState<{name: string, description: string}[]>([]);
  const [loadingAi, setLoadingAi] = useState(false);

  const handleAiAsk = async () => {
    if (!search) return;
    setLoadingAi(true);
    const recs = await getFoodRecommendations(search);
    setAiRecs(recs);
    setLoadingAi(false);
  };

  return (
    <div className="animate-in fade-in duration-500">
      {/* Header */}
      <div className="bg-[#008751] pt-12 pb-8 px-6 rounded-b-[3rem] shadow-lg relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FFFFFF" d="M44.7,-76.4C58.1,-69.2,69.2,-58.1,76.4,-44.7C83.6,-31.3,86.9,-15.7,85.2,-0.9C83.6,13.8,76.9,27.7,68.2,40.1C59.5,52.5,48.7,63.4,36.1,70.9C23.5,78.5,9.1,82.8,-5.5,81.4C-20.1,80,-39.9,73,-55.8,61.9C-71.7,50.8,-83.8,35.6,-88.7,18.4C-93.6,1.2,-91.3,-18,-83.1,-34.5C-74.8,-51.1,-60.7,-64.9,-44.6,-73C-28.5,-81.1,-14.3,-83.5,0.7,-84.6C15.7,-85.7,31.3,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
          </svg>
        </div>
        
        <div className="flex justify-between items-center mb-6 relative z-10">
          <div className="flex items-center space-x-3 space-x-reverse">
             <img src="https://i.pravatar.cc/100?u=user1" className="w-12 h-12 rounded-full border-2 border-white shadow-md" alt="profile" />
             <div className="text-white">
                <h2 className="text-sm opacity-80">أهلاً بك في فصم الحيران</h2>
                <h1 className="text-2xl font-bold tracking-tight">هنيني</h1>
             </div>
          </div>
          <button onClick={onNotificationClick} className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white backdrop-blur-md">
            🔔
          </button>
        </div>

        <div className="relative z-10">
          <div className="flex gap-2 bg-white rounded-2xl p-1 shadow-inner items-center pr-4">
             <span className="text-slate-400">🔍</span>
             <input 
              type="text" 
              placeholder="تبحث عن شيء معين؟" 
              className="flex-1 py-3 text-sm focus:outline-none" 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleAiAsk()}
             />
             <button 
              onClick={handleAiAsk}
              className="bg-[#008751] text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-green-700 transition-colors"
             >
               اقتراح ذكي
             </button>
          </div>
        </div>
      </div>

      {/* AI Recommendations */}
      { (loadingAi || aiRecs.length > 0) && (
        <div className="px-6 mt-6">
          <div className="bg-green-50 border border-green-100 rounded-3xl p-5 shadow-sm">
            <h3 className="text-sm font-bold text-[#008751] mb-3 flex items-center">
              ✨ اقتراحات الذكاء الاصطناعي لك:
            </h3>
            {loadingAi ? (
              <div className="animate-pulse flex space-x-4 space-x-reverse">
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-green-200 rounded w-3/4"></div>
                  <div className="h-3 bg-green-200 rounded"></div>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                {aiRecs.map((rec, i) => (
                  <div key={i} className="text-sm bg-white p-3 rounded-xl border border-green-100">
                    <span className="font-bold text-slate-800">{rec.name}</span>: {rec.description}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Categories */}
      <div className="px-6 py-8">
        <h3 className="text-lg font-bold text-slate-800 mb-4">التصنيفات</h3>
        <div className="grid grid-cols-3 gap-4">
          {CATEGORIES.map(cat => (
            <div key={cat.id} className="flex flex-col items-center group cursor-pointer">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-3xl mb-2 group-hover:bg-[#FFD700] transition-colors border border-slate-100">
                {cat.icon}
              </div>
              <span className="text-xs font-bold text-slate-600">{cat.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Stores List */}
      <div className="px-6 pb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-slate-800">أشهر المتاجر</h3>
          <button className="text-[#008751] text-sm font-bold">عرض الكل</button>
        </div>
        <div className="space-y-6">
          {MOCK_STORES.map(store => (
            <div 
              key={store.id} 
              onClick={() => onSelectStore(store)}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-shadow cursor-pointer relative"
            >
              <div className="h-40 overflow-hidden relative">
                <img src={store.cover} className="w-full h-full object-cover" alt={store.name} />
                <div className="absolute top-3 right-3 bg-[#008751] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                   {store.isOpen ? 'مفتوح' : 'مغلق'}
                </div>
              </div>
              <div className="p-4 flex items-start space-x-4 space-x-reverse">
                <img src={store.logo} className="w-14 h-14 rounded-2xl border-4 border-white -mt-10 relative z-10 shadow-sm object-cover" alt="logo" />
                <div className="flex-1">
                  <h4 className="font-bold text-slate-800 text-base">{store.name}</h4>
                  <div className="flex items-center text-xs text-slate-500 mt-1 space-x-3 space-x-reverse">
                    <span className="flex items-center"><span className="text-yellow-400 ml-1">⭐</span> {store.rating}</span>
                    <span className="flex items-center">🕒 {store.deliveryTime}</span>
                    <span className="flex items-center font-bold text-[#008751]">{store.deliveryFee} دج</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeView;
