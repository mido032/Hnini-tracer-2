
export enum OrderStatus {
  PENDING = 'pending',
  ACCEPTED = 'accepted',
  PREPARING = 'preparing',
  READY = 'ready',
  DELIVERING = 'delivering',
  DELIVERED = 'delivered',
  CANCELLED = 'cancelled'
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export interface Store {
  id: string;
  name: string;
  logo: string;
  cover: string;
  rating: number;
  deliveryTime: string;
  deliveryFee: number;
  category: string;
  products: Product[];
  isOpen: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  name: string;
  phone: string;
  address?: string;
}

export interface Order {
  id: string;
  store: Store;
  items: CartItem[];
  status: OrderStatus;
  total: number;
  createdAt: string;
  driver?: {
    name: string;
    phone: string;
    image: string;
  };
}

export type ViewType = 'SPLASH' | 'HOME' | 'STORE' | 'CART' | 'TRACKING' | 'PROFILE' | 'MERCHANT_DASHBOARD';
