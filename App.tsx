
import React, { useState, useEffect } from 'react';
import { ViewType, Store, CartItem, Order, OrderStatus } from './types';
import { MOCK_STORES, MOCK_ORDER, COLORS } from './constants';
import HomeView from './views/HomeView';
import StoreView from './views/StoreView';
import CartView from './views/CartView';
import TrackingView from './views/TrackingView';
import ProfileView from './views/ProfileView';
import SplashView from './views/SplashView';
import BottomNav from './components/BottomNav';
import MerchantDashboard from './views/MerchantDashboard';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>('SPLASH');
  const [selectedStore, setSelectedStore] = useState<Store | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [activeOrder, setActiveOrder] = useState<Order | null>(MOCK_ORDER);

  useEffect(() => {
    if (currentView === 'SPLASH') {
      const timer = setTimeout(() => setCurrentView('HOME'), 2500);
      return () => clearTimeout(timer);
    }
  }, [currentView]);

  const addToCart = (item: CartItem) => {
    setCart(prev => {
      const existing = prev.find(i => i.product.id === item.product.id);
      if (existing) {
        return prev.map(i => i.product.id === item.product.id ? { ...i, quantity: i.quantity + item.quantity } : i);
      }
      return [...prev, item];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(i => i.product.id !== productId));
  };

  const renderView = () => {
    switch (currentView) {
      case 'SPLASH': return <SplashView />;
      case 'HOME': 
        return <HomeView 
          onSelectStore={(store) => { setSelectedStore(store); setCurrentView('STORE'); }} 
          onNotificationClick={() => setCurrentView('TRACKING')}
        />;
      case 'STORE': 
        return selectedStore ? <StoreView 
          store={selectedStore} 
          onBack={() => setCurrentView('HOME')} 
          onAddToCart={addToCart}
          cartCount={cart.reduce((sum, i) => sum + i.quantity, 0)}
          onGoToCart={() => setCurrentView('CART')}
        /> : null;
      case 'CART': 
        return <CartView 
          items={cart} 
          onBack={() => setCurrentView('STORE')} 
          onRemove={removeFromCart}
          onCheckout={() => {
            // Mock checkout
            setActiveOrder({
              id: `ORD-${Math.floor(Math.random() * 10000)}`,
              store: selectedStore!,
              items: cart,
              status: OrderStatus.PENDING,
              total: cart.reduce((s, i) => s + (i.product.price * i.quantity), 0) + (selectedStore?.deliveryFee || 0),
              createdAt: new Date().toISOString()
            });
            setCart([]);
            setCurrentView('TRACKING');
          }}
        />;
      case 'TRACKING': 
        return <TrackingView 
          order={activeOrder} 
          onBack={() => setCurrentView('HOME')} 
        />;
      case 'PROFILE': 
        return <ProfileView onSwitchToMerchant={() => setCurrentView('MERCHANT_DASHBOARD')} />;
      case 'MERCHANT_DASHBOARD':
        return <MerchantDashboard onBack={() => setCurrentView('PROFILE')} />;
      default: return <HomeView onSelectStore={(s) => { setSelectedStore(s); setCurrentView('STORE'); }} onNotificationClick={() => {}} />;
    }
  };

  if (currentView === 'SPLASH') return <SplashView />;

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-slate-50 text-right" dir="rtl">
      <main className="flex-1 overflow-y-auto pb-20">
        {renderView()}
      </main>
      
      {currentView !== 'MERCHANT_DASHBOARD' && (
        <BottomNav currentView={currentView} setView={setCurrentView} />
      )}
    </div>
  );
};

export default App;
