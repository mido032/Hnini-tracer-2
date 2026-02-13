
import React from 'react';
import { Store, Product, CartItem } from '../types';

interface Props {
  store: Store;
  onBack: () => void;
  onAddToCart: (item: CartItem) => void;
  cartCount: number;
  onGoToCart: () => void;
}

const StoreView: React.FC<Props> = ({ store, onBack, onAddToCart, cartCount, onGoToCart }) => {
  return (
    <div className="relative min-h-screen bg-slate-50 animate-in slide-in-from-left duration-300">
      {/* Cover and Header */}
      <div className="h-64 relative">
        <img src={store.cover} className="w-full h-full object-cover" alt="cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <button 
          onClick={onBack}
          className="absolute top-6 right-6 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white"
        >
          <span className="rotate-180">➜</span>
        </button>
        <div className="absolute bottom-6 right-6 flex items-center space-x-4 space-x-reverse">
          <img src={store.logo} className="w-20 h-20 rounded-3xl border-4 border-white shadow-xl object-cover" alt="logo" />
          <div className="text-white">
            <h1 className="text-2xl font-bold">{store.name}</h1>
            <p className="text-sm opacity-90">{store.category} • {store.deliveryTime}</p>
          </div>
        </div>
      </div>

      {/* Info Stats */}
      <div className="flex justify-around bg-white py-4 shadow-sm border-b border-slate-100">
        <div className="text-center">
           <div className="text-slate-400 text-xs mb-1">التقييم</div>
           <div className="font-bold text-slate-800">⭐ {store.rating}</div>
        </div>
        <div className="w-px h-10 bg-slate-100"></div>
        <div className="text-center">
           <div className="text-slate-400 text-xs mb-1">التوصيل</div>
           <div className="font-bold text-[#008751]">{store.deliveryFee} دج</div>
        </div>
        <div className="w-px h-10 bg-slate-100"></div>
        <div className="text-center">
           <div className="text-slate-400 text-xs mb-1">الوقت</div>
           <div className="font-bold text-slate-800">{store.deliveryTime}</div>
        </div>
      </div>

      {/* Menu */}
      <div className="px-6 py-8 pb-32">
        <h2 className="text-xl font-bold text-slate-800 mb-6">قائمة المأكولات</h2>
        <div className="space-y-4">
          {store.products.map(product => (
            <div key={product.id} className="bg-white p-4 rounded-3xl flex items-center space-x-4 space-x-reverse shadow-sm border border-slate-100">
              <img src={product.image} className="w-24 h-24 rounded-2xl object-cover" alt={product.name} />
              <div className="flex-1">
                <h4 className="font-bold text-slate-800">{product.name}</h4>
                <p className="text-xs text-slate-400 line-clamp-2 mt-1">{product.description}</p>
                <div className="flex justify-between items-center mt-3">
                   <span className="font-bold text-[#008751]">{product.price} دج</span>
                   <button 
                    onClick={() => onAddToCart({ product, quantity: 1 })}
                    className="w-10 h-10 bg-[#FFD700] rounded-full flex items-center justify-center text-slate-800 shadow-sm active:scale-95 transition-transform"
                   >
                     +
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Cart Button */}
      {cartCount > 0 && (
        <div className="fixed bottom-24 left-6 right-6 animate-in slide-in-from-bottom duration-500">
          <button 
            onClick={onGoToCart}
            className="w-full bg-[#008751] text-white p-5 rounded-3xl shadow-xl flex justify-between items-center font-bold"
          >
            <div className="flex items-center space-x-3 space-x-reverse">
               <span className="bg-white text-[#008751] w-8 h-8 rounded-full flex items-center justify-center text-sm">{cartCount}</span>
               <span>عرض السلة</span>
            </div>
            <span>➜</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default StoreView;
