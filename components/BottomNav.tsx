
import React from 'react';
import { ViewType } from '../types';
import { COLORS } from '../constants';

interface Props {
  currentView: ViewType;
  setView: (v: ViewType) => void;
}

const BottomNav: React.FC<Props> = ({ currentView, setView }) => {
  const tabs: { id: ViewType; label: string; icon: string }[] = [
    { id: 'HOME', label: 'الرئيسية', icon: '🏠' },
    { id: 'TRACKING', label: 'الطلبات', icon: '📦' },
    { id: 'CART', label: 'السلة', icon: '🛒' },
    { id: 'PROFILE', label: 'حسابي', icon: '👤' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 flex justify-around items-center px-4 py-3 safe-bottom z-50">
      {tabs.map(tab => {
        const isActive = currentView === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => setView(tab.id)}
            className="flex flex-col items-center space-y-1 transition-all"
          >
            <span className={`text-2xl ${isActive ? 'scale-110' : 'opacity-60 grayscale'}`}>
              {tab.icon}
            </span>
            <span className={`text-xs font-bold ${isActive ? 'text-[#008751]' : 'text-slate-400'}`}>
              {tab.label}
            </span>
            {isActive && <div className="w-1 h-1 bg-[#008751] rounded-full"></div>}
          </button>
        );
      })}
    </div>
  );
};

export default BottomNav;
