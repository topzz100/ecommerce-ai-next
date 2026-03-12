import { create } from "zustand";

export interface CartItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  //   id:string
}

type CartState = {
  items: CartItem[];
  isOpen: boolean;
  addToCart: (product: Omit<CartItem, "quantity">, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  // increaseQty: (id: string) => void;
  // decreaseQty: (id: string) => void;
  cartItem: (productId: string) => void;
  clearCart: () => void;
  toggleCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  totalItems: () => number;
  totalPrice: () => number;
};

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  isOpen: false,

  addToCart: (product, quantity = 1) =>
    set((state) => {
      const existing = state.items.find(
        (item) => item.productId === product.productId,
      );

      if (existing) {
        return {
          items: state.items.map((item) =>
            item.productId === product.productId
              ? { ...item, quantity: item.quantity + quantity }
              : item,
          ),
        };
      }

      return {
        items: [...state.items, { ...product, quantity: 1 }],
      };
    }),

  removeFromCart: (productId) =>
    set((state) => ({
      items: state.items.filter((item) => item.productId !== productId),
    })),

  updateQuantity: (productId, quantity) =>
    set((state) => {
      if (quantity <= 0) {
        return {
          items: state.items.filter((item) => item.productId !== productId),
        };
      }
      return {
        items: state.items.map((item) =>
          item.productId === productId ? { ...item, quantity } : item,
        ),
      };
    }),
  // increaseQty: (id) =>
  //   set((state) => ({
  //     items: state.items.map((item) =>
  //       item.id === id
  //         ? { ...item, quantity: item.quantity + 1 }
  //         : item
  //     ),
  //   })),

  // decreaseQty: (id) =>
  //   set((state) => ({
  //     items: state.items
  //       .map((item) =>
  //         item.id === id
  //           ? { ...item, quantity: item.quantity - 1 }
  //           : item
  //       )
  //       .filter((item) => item.quantity > 0),
  //   })),

  cartItem: (productId) =>
    get().items.find((item) => item.productId === productId),
  clearCart: () => set({ items: [] }),
  openCart: () => set({ isOpen: true }),
  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
  closeCart: () => set({ isOpen: false }),

  totalItems: () => get().items.reduce((sum, item) => sum + item.quantity, 0),

  totalPrice: () =>
    get().items.reduce((sum, item) => sum + item.price * item.quantity, 0),
}));
