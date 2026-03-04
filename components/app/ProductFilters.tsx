"use client";

import { useState } from "react";
import { X } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { COLORS, MATERIALS, SORT_OPTIONS } from "@/lib/constants/filters";

interface ProductFiltersProps {
  categories: any;
}

const ProductFilters = ({ categories }: ProductFiltersProps) => {
  // Dummy local states
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [color, setColor] = useState("all");
  const [material, setMaterial] = useState("all");
  const [sort, setSort] = useState("name");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
  const [inStock, setInStock] = useState(false);

  const isSearchActive = !!search;
  const isCategoryActive = category !== "all";
  const isColorActive = color !== "all";
  const isMaterialActive = material !== "all";
  const isPriceActive = priceRange[0] > 0 || priceRange[1] < 5000;
  const isInStockActive = inStock;

  const activeFilterCount = [
    isSearchActive,
    isCategoryActive,
    isColorActive,
    isMaterialActive,
    isPriceActive,
    isInStockActive,
  ].filter(Boolean).length;

  const hasActiveFilters = activeFilterCount > 0;

  const clearAll = () => {
    setSearch("");
    setCategory("all");
    setColor("all");
    setMaterial("all");
    setSort("name");
    setPriceRange([0, 5000]);
    setInStock(false);
  };

  const clearSingle = (key: string) => {
    switch (key) {
      case "q":
        setSearch("");
        break;
      case "category":
        setCategory("all");
        break;
      case "color":
        setColor("all");
        break;
      case "material":
        setMaterial("all");
        break;
      case "price":
        setPriceRange([0, 5000]);
        break;
      case "inStock":
        setInStock(false);
        break;
    }
  };

  const FilterLabel = ({
    children,
    isActive,
    filterKey,
  }: {
    children: React.ReactNode;
    isActive: boolean;
    filterKey: string;
  }) => (
    <div className="mb-2 flex items-center justify-between">
      <span
        className={`block text-sm font-medium ${
          isActive
            ? "text-zinc-900 dark:text-zinc-100"
            : "text-zinc-700 dark:text-zinc-300"
        }`}
      >
        {children}
        {isActive && (
          <Badge className="ml-2 h-5 bg-amber-500 px-1.5 text-xs text-white">
            Active
          </Badge>
        )}
      </span>

      {isActive && (
        <button
          type="button"
          onClick={() => clearSingle(filterKey)}
          className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );

  return (
    <div className="space-y-6 rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
      {/* Clear All */}
      {hasActiveFilters && (
        <div className="rounded-lg border-2 border-amber-300 bg-amber-50 p-3 dark:border-amber-700 dark:bg-amber-950">
          <div className="mb-2 text-sm font-medium text-amber-800 dark:text-amber-200">
            {activeFilterCount} {activeFilterCount === 1 ? "filter" : "filters"}{" "}
            applied
          </div>
          <Button
            size="sm"
            onClick={clearAll}
            className="w-full bg-amber-500 text-white hover:bg-amber-600"
          >
            <X className="mr-2 h-4 w-4" />
            Clear All Filters
          </Button>
        </div>
      )}

      {/* Search */}
      <div>
        <FilterLabel isActive={isSearchActive} filterKey="q">
          Search
        </FilterLabel>

        <div className="flex gap-2">
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            className={`flex-1 ${
              isSearchActive ? "border-amber-500 ring-1 ring-amber-500" : ""
            }`}
          />
          <Button size="sm">Search</Button>
        </div>
      </div>

      {/* Category */}
      <div>
        <FilterLabel isActive={isCategoryActive} filterKey="category">
          Category
        </FilterLabel>

        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger
            className={
              isCategoryActive ? "border-amber-500 ring-1 ring-amber-500" : ""
            }
          >
            <SelectValue placeholder="All Categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {categories.map((cat) => (
              <SelectItem key={cat._id} value={cat.slug ?? ""}>
                {cat.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Color */}
      <div>
        <FilterLabel isActive={isColorActive} filterKey="color">
          Color
        </FilterLabel>

        <Select value={color} onValueChange={setColor}>
          <SelectTrigger
            className={
              isColorActive ? "border-amber-500 ring-1 ring-amber-500" : ""
            }
          >
            <SelectValue placeholder="All Colors" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Colors</SelectItem>
            {COLORS.map((c) => (
              <SelectItem key={c.value} value={c.value}>
                {c.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Material */}
      <div>
        <FilterLabel isActive={isMaterialActive} filterKey="material">
          Material
        </FilterLabel>

        <Select value={material} onValueChange={setMaterial}>
          <SelectTrigger
            className={
              isMaterialActive ? "border-amber-500 ring-1 ring-amber-500" : ""
            }
          >
            <SelectValue placeholder="All Materials" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Materials</SelectItem>
            {MATERIALS.map((m) => (
              <SelectItem key={m.value} value={m.value}>
                {m.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Price Range */}
      <div>
        <FilterLabel isActive={isPriceActive} filterKey="price">
          Price Range: £{priceRange[0]} - £{priceRange[1]}
        </FilterLabel>

        <Slider
          min={0}
          max={5000}
          step={100}
          value={priceRange}
          onValueChange={(value) => setPriceRange(value as [number, number])}
          className="mt-4"
        />
      </div>

      {/* In Stock */}
      <div>
        <label className="flex cursor-pointer items-center gap-3">
          <input
            type="checkbox"
            checked={inStock}
            onChange={(e) => setInStock(e.target.checked)}
            className="h-5 w-5 rounded border-zinc-300 text-amber-500"
          />
          <span className="text-sm font-medium">
            Show only in-stock
            {isInStockActive && (
              <Badge className="ml-2 h-5 bg-amber-500 px-1.5 text-xs text-white">
                Active
              </Badge>
            )}
          </span>
        </label>
      </div>

      {/* Sort */}
      <div>
        <span className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Sort By
        </span>

        <Select value={sort} onValueChange={setSort}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {SORT_OPTIONS.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default ProductFilters;
