
import React from 'react';
import { Store, OrderStatus } from './types';

export const COLORS = {
  primary: '#008751', // Algerian Green
  secondary: '#FFD700', // Gold/Yellow
  background: '#f8fafc',
  text: '#1e293b'
};

export const CATEGORIES = [
  { id: '1', name: 'مطاعم', icon: '🍔', slug: 'restaurants' },
  { id: '2', name: 'بقالة', icon: '🛒', slug: 'grocery' },
  { id: '3', name: 'خضر وفواكه', icon: '🥬', slug: 'fruits' },
  { id: '4', name: 'مخابز', icon: '🥖', slug: 'bakery' },
  { id: '5', name: 'صيدليات', icon: '💊', slug: 'pharmacy' },
  { id: '6', name: 'مقاهي', icon: '☕', slug: 'cafe' },
];

export const MOCK_STORES: Store[] = [
  {
    id: 's1',
    name: 'برجر كينج الحراش',
    logo: 'https://picsum.photos/seed/bk/100/100',
    cover: 'https://picsum.photos/seed/food1/800/400',
    rating: 4.8,
    deliveryTime: '25-35 دقيقة',
    deliveryFee: 200,
    category: 'restaurants',
    isOpen: true,
    products: [
      { id: 'p1', name: 'وجبة ووبر كلاسيك', description: 'لحم بقري مشوي بلهب مع خس وطماطم', price: 850, image: 'https://picsum.photos/seed/burger1/200/200', category: 'Main' },
      { id: 'p2', name: 'تشيز برجر مضاعف', description: 'شريحتين لحم مع جبنة شيدر', price: 650, image: 'https://picsum.photos/seed/burger2/200/200', category: 'Main' }
    ]
  },
  {
    id: 's2',
    name: 'مخبزة الياسمين',
    logo: 'https://picsum.photos/seed/bakery/100/100',
    cover: 'https://picsum.photos/seed/food2/800/400',
    rating: 4.5,
    deliveryTime: '15-20 دقيقة',
    deliveryFee: 100,
    category: 'bakery',
    isOpen: true,
    products: [
      { id: 'p3', name: 'خبز فرنسي ساخن', description: 'باغيت تقليدي محضر يومياً', price: 20, image: 'https://picsum.photos/seed/bread1/200/200', category: 'Breads' },
      { id: 'p4', name: 'كرواسون زبدة', description: 'فطيرة فرنسية هشة بالزبدة', price: 60, image: 'https://picsum.photos/seed/bread2/200/200', category: 'Pastries' }
    ]
  },
  {
    id: 's3',
    name: 'سوبر ماركت الوفاء',
    logo: 'https://picsum.photos/seed/mart/100/100',
    cover: 'https://picsum.photos/seed/food3/800/400',
    rating: 4.2,
    deliveryTime: '40-50 دقيقة',
    deliveryFee: 150,
    category: 'grocery',
    isOpen: true,
    products: [
      { id: 'p5', name: 'حليب الصومام 1ل', description: 'حليب كامل الدسم مبستر', price: 110, image: 'https://picsum.photos/seed/milk/200/200', category: 'Dairy' }
    ]
  }
];

export const MOCK_ORDER = {
  id: 'ORD-2025-X1',
  store: MOCK_STORES[0],
  items: [{ product: MOCK_STORES[0].products[0], quantity: 2 }],
  status: OrderStatus.DELIVERING,
  total: 1900,
  createdAt: new Date().toISOString(),
  driver: {
    name: 'أحمد صالح',
    phone: '0661 234 567',
    image: 'https://i.pravatar.cc/150?u=ahmed'
  }
};
