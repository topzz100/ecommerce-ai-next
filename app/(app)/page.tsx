import FeaturedCarousel from "@/components/app/FeaturedCarousel";
import { productList } from "@/lib/dummyData/productList";
import { shuffle } from "@/lib/utils";
import Image from "next/image";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="">
      {/* Featured Product Carousel */}
      <Suspense fallback={<div className="">Loading featured products...</div>}>
        <FeaturedCarousel products={shuffle(productList)?.slice(0, 5)} />
      </Suspense>

      {/* Page banner */}

      {/* Category Tiles */}

      {/* Product section */}
    </div>
  );
}
