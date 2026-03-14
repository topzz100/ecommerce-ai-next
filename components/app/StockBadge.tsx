"use client";

import { Badge } from "@/components/ui/badge";
import { isLowStock } from "@/lib/constants/stock";
import { useCartStore } from "@/lib/store/cart.store";
//import { useCartItem } from "@/lib/store/cart-store-provider";
import { cn } from "@/lib/utils";
//import { isLowStock as checkLowStock } from "@/lib/constants/stock";

interface StockBadgeProps {
  productId: string;
  stock: number;
  className?: string;
}

export function StockBadge({ productId, stock, className }: StockBadgeProps) {
  // const cartItem = useCartItem(productId);

  const cartItem = useCartStore((state) =>
    state.items.find((item) => item.productId === productId),
  );

  const quantityInCart = cartItem?.quantity ?? 0;
  const isAtMax = quantityInCart >= stock && stock > 0;
  const lowStock = isLowStock(stock);

  if (isAtMax) {
    return (
      <Badge
        variant="secondary"
        className={cn("w-fit bg-blue-100 text-blue-800", className)}
      >
        Max in cart
      </Badge>
    );
  }

  if (lowStock) {
    return (
      <Badge
        variant="secondary"
        className={cn("w-fit bg-amber-100 text-amber-800", className)}
      >
        Only {stock} left in stock
      </Badge>
    );
  }

  return null;
}
