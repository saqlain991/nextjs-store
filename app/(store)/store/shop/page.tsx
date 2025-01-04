"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { latestProducts } from "../data/products";
import Image from "next/image";
import ProductCard from "../components/Product-Card";
import { Search, X } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Slider } from "@/components/ui/slider";
import BrokenImage from "../assets/broken-image.png";
import NoProductFound from "../assets/product-not-found.png";
import { useRouter } from "next/navigation";

export default function ShopPage() {
  const router = useRouter();
  const [sortBy, setSortBy] = useState("newest");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredProducts, setFilteredProducts] = useState(latestProducts);
  const [isCustomPrice, setIsCustomPrice] = useState(false);
  const productsPerPage = 9;

  // Calculate actual max price from products
  const actualMaxPrice = Math.max(
    ...latestProducts.map((product) => product.price)
  );

  // Initialize price range with actual max price
  const [priceRange, setPriceRange] = useState([0, actualMaxPrice]);

  const categories = [
    { id: "all", name: "All" },
    { id: "electronics", name: "Electronics" },
    { id: "fashion", name: "Fashion" },
    { id: "home-living", name: "Home & Living" },
    { id: "books", name: "Books" },
  ];

  const priceRanges = [
    { id: "under-50", label: "Under $50", min: 0, max: 50 },
    { id: "50-100", label: "$50 - $100", min: 50, max: 100 },
    { id: "100-200", label: "$100 - $200", min: 100, max: 200 },
    { id: "over-200", label: "Over $200", min: 200, max: actualMaxPrice },
  ];

  const filterProducts = () => {
    let filtered = latestProducts;

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Price range filter - only show products within the actual price range
    filtered = filtered.filter(
      (product) =>
        product.price >= priceRange[0] &&
        product.price <= Math.min(priceRange[1], actualMaxPrice)
    );

    // Sort products
    switch (sortBy) {
      case "newest":
        filtered = [...filtered].sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        break;
      case "price-low":
        filtered = [...filtered].sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered = [...filtered].sort((a, b) => b.price - a.price);
        break;
    }

    setFilteredProducts(filtered);
    setCurrentPage(1);
  };

  useEffect(() => {
    filterProducts();
  }, [searchQuery, selectedCategory, priceRange, sortBy]);

  const handleSearch = () => {
    filterProducts();
  };

  const handleSearchClick = () => {
    handleSearch();
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearchClick();
    }
  };

  const clearSearch = () => {
    setSearchQuery("");
  };

  const handlePriceRangeClick = (min: number, max: number) => {
    setIsCustomPrice(false);
    setPriceRange([min, max]);
  };

  const handleCustomPriceChange = (value: number[]) => {
    setIsCustomPrice(true);
    setPriceRange([0, value[0]]);
  };

  // Calculate pagination
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const displayedProducts = filteredProducts.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleViewDetails = (productId: number) => {
    router.push(`/store/shop/${productId.toString()}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="h-[200px] relative mb-8">
        <Image
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&h=400&fit=crop"
          alt="Shop Banner"
          fill
          className="object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Shop All Products</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters */}
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-4">Categories</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={
                    selectedCategory === category.id ? "default" : "ghost"
                  }
                  className="w-full justify-start"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Price Range</h3>
            <div className="space-y-2 mb-6">
              {priceRanges.map((range) => (
                <Button
                  key={range.id}
                  variant={
                    !isCustomPrice &&
                    priceRange[0] === range.min &&
                    priceRange[1] === range.max
                      ? "default"
                      : "ghost"
                  }
                  className="w-full justify-start"
                  onClick={() => handlePriceRangeClick(range.min, range.max)}
                >
                  {range.label}
                </Button>
              ))}
            </div>
            <div className="px-4">
              <h4 className="text-sm font-medium mb-2">Choose Price:</h4>
              <Slider
                defaultValue={[actualMaxPrice]}
                max={actualMaxPrice + 200}
                step={1}
                value={[priceRange[1]]}
                onValueChange={handleCustomPriceChange}
                className="mb-6"
              />
              <div className="flex justify-between text-sm">
                <span>$0</span>
                <span>${priceRange[1].toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="lg:col-span-3">
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="flex-1 flex gap-2">
              <div className="flex-1 relative">
                <Input
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="pr-8"
                />
                {searchQuery && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full px-2 hover:bg-transparent"
                    onClick={clearSearch}
                  >
                    <X className="h-4 w-4 text-gray-500" />
                  </Button>
                )}
              </div>
              <Button onClick={handleSearchClick}>
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {displayedProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id.toString()}
                  imageUrl={product.image || "../assets/broken-image.png"}
                  category={product.category}
                  title={product.name}
                  rating={product.rating}
                  description={product.description}
                  price={product.price}
                  inStock={product.inStock}
                  maxQuantity={product.maxQuantity}
                  // onViewDetails={() => handleViewDetails(product.id)}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12">
              <Image
                src={NoProductFound}
                alt="No products found"
                width={400}
                height={400}
                className="mb-4"
              />
              <p className="text-lg text-gray-500">No products found</p>
            </div>
          )}

          {/* Pagination */}
          {displayedProducts.length > 0 && (
            <div className="mt-8">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      onClick={() => handlePageChange(currentPage - 1)}
                      className={
                        currentPage === 1
                          ? "pointer-events-none opacity-50"
                          : "cursor-pointer"
                      }
                    />
                  </PaginationItem>
                  {[...Array(totalPages)].map((_, index) => (
                    <PaginationItem key={index + 1}>
                      <PaginationLink
                        onClick={() => handlePageChange(index + 1)}
                        isActive={currentPage === index + 1}
                      >
                        {index + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  <PaginationItem>
                    <PaginationNext
                      onClick={() => handlePageChange(currentPage + 1)}
                      className={
                        currentPage === totalPages
                          ? "pointer-events-none opacity-50"
                          : "cursor-pointer"
                      }
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
