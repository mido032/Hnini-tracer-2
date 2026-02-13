
import React from 'react';
import { CartItem } from '../types';

interface Props {
  items: CartItem[];
  onBack: () => void;
  onRemove: (id: string) => void;
  onCheckout: () => void;
}

const CartView: React.FC<Props> = ({ items, onBack, onRemove, onCheckout }) => {
  const subtotal = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const deliveryFee = items.length > 0 ? 200 : 0;
  const total = subtotal + deliveryFee;

  return (
    <div className="p-6 pb-32 min-h-full">
      <div className="flex items-center mb-8">
        <button onClick={onBack} className="w-10 h-10 bg-white shadow-sm rounded-full flex items-center justify-center text-slate-800 ml-4">
           <span className="rotate-180">➜</span>
        </button>
        <h1 className="text-2xl font-bold text-slate-800">سلة التسوق</h1>
      </div>

      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
           <div className="text-7xl grayscale opacity-30">🧺</div>
           <p className="text-slate-400 font-bold">سلتك فارغة حالياً</p>
           <button onClick={onBack} className="bg-[#008751] text-white px-8 py-3 rounded-full font-bold">ابدأ التسوق</button>
        </div>
      ) : (
        <>
          <div className="space-y-4 mb-8">
            {items.map(item => (
              <div key={item.product.id} className="bg-white p-4 rounded-3xl flex items-center space-x-4 space-x-reverse shadow-sm border border-slate-100">
                <img src={item.product.image} className="w-20 h-20 rounded-2xl object-cover" alt={item.product.name} />
                <div className="flex-1">
                  <h4 className="font-bold text-slate-800">{item.product.name}</h4>
                  <p className="text-sm text-[#008751] font-bold mt-1">{item.product.price} دج</p>
                  <div className="flex items-center space-x-3 mt-2 space-x-reverse">
                     <span className="text-xs bg-slate-100 px-3 py-1 rounded-full text-slate-600 font-bold">الكمية: {item.quantity}</span>
                  </div>
                </div>
                <button 
                  onClick={() => onRemove(item.product.id)}
                  className="text-red-400 text-xl font-bold p-2"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 space-y-4">
             <div className="flex justify-between items-center text-slate-500">
                <span>المجموع الفرعي:</span>
                <span className="font-bold">{subtotal} دج</span>
             </div>
             <div className="flex justify-between items-center text-slate-500">
                <span>رسوم التوصيل:</span>
                <span className="font-bold">{deliveryFee} دج</span>
             </div>
             <div className="border-t border-slate-100 pt-4 flex justify-between items-center">
                <span className="text-lg font-bold text-slate-800">الإجمالي الكلي:</span>
                <span className="text-2xl font-bold text-[#008751]">{total} دج</span>
             </div>
          </div>

          <div className="mt-8 space-y-4">
             <div className="bg-yellow-50 border border-yellow-100 p-4 rounded-2xl flex items-center space-x-3 space-x-reverse">
                <span className="text-2xl">💵</span>
                <div className="flex-1">
                   <p className="text-xs font-bold text-yellow-800">طريقة الدفع:</p>
                   <p className="text-sm text-yellow-700">الدفع عند الاستلام (Cash on Delivery)</p>
                </div>
             </div>
             
             <button 
              onClick={onCheckout}
              className="w-full bg-[#008751] text-white p-5 rounded-3xl shadow-xl font-bold text-lg active:scale-95 transition-transform"
             >
                تأكيد الطلب
             </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartView;
