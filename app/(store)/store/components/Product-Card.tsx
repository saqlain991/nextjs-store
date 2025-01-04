import Image from "next/image";
import { Star, ShoppingCart, Heart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  id: string;
  imageUrl: string;
  category: string;
  title: string;
  rating: number;
  description: string;
  price: number | undefined;
  inStock: boolean;
  maxQuantity: number;
}

export default function ProductCard({
  id,
  imageUrl,
  category,
  title,
  rating,
  description,
  price,
  inStock,
  maxQuantity,
}: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const router = useRouter();

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    // Here you can add logic to save to localStorage or your backend
  };

  const handleViewDetails = () => {
    router.push(`/store/product/${id}`);
  };

  return (
    <Card className="w-full max-w-sm mx-auto">
      <CardContent className="p-0 relative">
        <Badge className="absolute top-2 left-2 z-10">{category}</Badge>
        <div className="relative w-full ">
          <Image
            src={imageUrl}
            alt={title}
            height={400}
            width={500}
            style={{ objectFit: "cover" }}
            className="rounded-t-lg"
          />
        </div>
      </CardContent>
      <CardContent className="p-4">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
              }`}
            />
          ))}
          <span className="ml-2 text-sm text-gray-600">({rating})</span>
        </div>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-xl font-bold">
            ${typeof price === "number" ? price.toFixed(2) : "N/A"}
          </span>
          <Badge variant={inStock ? "default" : "secondary"}>
            {inStock ? "In Stock" : "Out of Stock"}
          </Badge>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-2">
        <div className="flex items-center gap-2 w-full">
          <Input
            type="number"
            defaultValue={1}
            min={1}
            max={maxQuantity}
            className="w-20"
          />
          <Button className="flex-1">
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
        </div>
        <div className="flex gap-2 w-full">
          <Button
            variant="secondary"
            className="flex-1"
            onClick={handleViewDetails}
          >
            <Eye className="w-4 h-4 mr-2" />
            View Details
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={handleWishlist}
            className={isWishlisted ? "bg-red-100" : ""}
          >
            <Heart
              className={`w-4 h-4 ${
                isWishlisted ? "text-red-500 fill-current" : ""
              }`}
            />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
