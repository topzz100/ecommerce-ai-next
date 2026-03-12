"use client";

import { Minus, Plus, ShoppingBag } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
//import { useCartActions, useCartItem } from "@/lib/store/cart-store-provider";
import { cn } from "@/lib/utils";
import { useCartStore } from "@/lib/store/cart.store";

interface AddToCartButtonProps {
  productId: string;
  name: string;
  price: number;
  image?: string;
  stock: number;
  className?: string;
}

export function AddToCartButton({
  productId,
  name,
  price,
  image,
  stock,
  className,
}: AddToCartButtonProps) {
  // const { addItem, updateQuantity } = useCartActions();
  // const cartItem = useCartItem(productId);

  //const quantityInCart = cartItem?.quantity ?? 0;
  const addToCart = useCartStore((state) => state.addToCart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const cartItem = useCartStore((state: any) => state.cartItem);
  const items = useCartStore((state: any) => state.items);

  console.log(items, "itemsqqq>>>>>>>>>");
  // const quantityInCart: any = () =>
  //   useCartStore(
  //     (state) =>
  //       state.items.find((item) => item.productId === productId)?.quantity ?? 0,
  //   );
  //const quantityInCart = cartItem(productId)?.quantity ?? 0;
  const quantityInCart = useCartStore(
    (state) =>
      state.items.find((item) => item.productId === productId)?.quantity ?? 0,
  );
  const isOutOfStock = stock <= 0;
  const isAtMax = quantityInCart >= stock;

  const handleAdd = () => {
    // if (quantityInCart < stock) {
    //   console.log("testqqqqq 111");
    //   toast.success(`Added ${name}`);
    // }
    addToCart({ productId, name, price, image }, 1);
    toast.success(`Added ${name}`);
    console.log("testqqqqq 111");
  };

  const handleDecrement = () => {
    if (quantityInCart > 0) {
      updateQuantity(productId, quantityInCart - 1);
    }
  };

  // Out of stock
  if (isOutOfStock) {
    return (
      <Button
        disabled
        variant="secondary"
        className={cn("h-11 w-full", className)}
      >
        Out of Stock
      </Button>
    );
  }

  // Not in cart - show Add to Basket button
  if (quantityInCart === 0) {
    return (
      <Button onClick={handleAdd} className={cn("h-11 w-full", className)}>
        <ShoppingBag className="mr-2 h-4 w-4" />
        Add to Basket
      </Button>
    );
  }

  console.log(quantityInCart, "--------------", quantityInCart, "qqqqqqqq");

  // In cart - show quantity controls
  return (
    <div
      className={cn(
        "flex h-11 w-full items-center rounded-md border border-zinc-200 bg-white dark:border-zinc-700 dark:bg-zinc-900",
        className,
      )}
    >
      <Button
        variant="ghost"
        size="icon"
        className="h-full flex-1 rounded-r-none"
        onClick={handleDecrement}
      >
        <Minus className="h-4 w-4" />
      </Button>
      <span className="flex-1 text-center text-sm font-semibold tabular-nums">
        {quantityInCart}
      </span>
      <Button
        variant="ghost"
        size="icon"
        className="h-full flex-1 rounded-l-none disabled:opacity-20"
        onClick={() => handleAdd()}
        disabled={isAtMax}
      >
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  );
}
