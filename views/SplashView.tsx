
import React from 'react';
import { COLORS } from '../constants';

const SplashView: React.FC = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-[#008751]">
      <div className="animate-bounce">
         <div className="bg-white p-6 rounded-3xl shadow-2xl mb-6">
            <h1 className="text-5xl font-bold text-[#008751] tracking-tighter">هنيني</h1>
         </div>
      </div>
      <div className="text-center text-white space-y-2 opacity-90">
        <p className="text-xl font-medium">وصلك طلبك وين ما كنت</p>
        <div className="flex justify-center space-x-2 space-x-reverse pt-8">
           <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
           <div className="w-3 h-3 bg-white rounded-full animate-pulse delay-75"></div>
           <div className="w-3 h-3 bg-white rounded-full animate-pulse delay-150"></div>
        </div>
      </div>
    </div>
  );
};

export default SplashView;
