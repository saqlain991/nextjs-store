"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Menu,
  User,
  Home,
  ShoppingBag,
  Info,
  Phone,
  LogIn,
  UserPlus,
  ShoppingCart,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { usePathname } from "next/navigation";
import Navbar from "./components/Navbar";
import ProductCard from "./components/Product-Card";
import { latestProducts as products } from "./data/products";

const categories = [
  {
    id: 1,
    name: "Electronics",
    image:
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=500&h=500&fit=crop",
  },
  {
    id: 2,
    name: "Fashion",
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?w=500&h=500&fit=crop",
  },
  {
    id: 3,
    name: "Home & Living",
    image:
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=500&h=500&fit=crop",
  },
  {
    id: 4,
    name: "Books",
    image:
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=500&h=500&fit=crop",
  },
];

const heroSlides = [
  {
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&h=500&fit=crop",
    title: "Summer Collection",
    description: "Discover our latest arrivals",
  },
  {
    image:
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1600&h=500&fit=crop",
    title: "Winter Essentials",
    description: "Stay warm with our winter collection",
  },
  {
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600&h=500&fit=crop",
    title: "Fashion Week",
    description: "Explore trending styles",
  },
];

export default function HomePage() {
  // Autoplay Carousel plugin
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  // Get current pathname for active link styling
  const pathname = usePathname();

  return (
    <div>
      <Navbar />
      {/* Hero Banner */}
      <div className="relative w-full max-w-screen-2xl mx-auto">
        <Carousel
          className="w-full "
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {heroSlides.map((slide, index) => (
              <CarouselItem key={index}>
                <div className="relative h-[300px] sm:h-[400px] md:h-[500px]">
                  <Image
                    src={slide.image}
                    alt={`Hero ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="text-center text-white px-4">
                      <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4">
                        {slide.title}
                      </h1>
                      <p className="text-lg md:text-xl mb-8">
                        {slide.description}
                      </p>
                      <Button size="lg" asChild>
                        <Link href="/shop">Shop Now</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden sm:block">
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
          </div>
        </Carousel>
      </div>

      {/* Categories */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Shop by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Card key={category.id} className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{category.name}</CardTitle>
              </CardHeader>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  {/* Previous: <Link href={`/shop?category=${category.id}`}>View All</Link> */}
                  <Link href="/shop">View All</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Latest Products */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Latest Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0, 8).map((product) => (
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
            />
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Button asChild size="lg">
            <Link href="/store/shop">View More Products</Link>
          </Button>
        </div>
      </section>

      {/* FAQs */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full  mx-auto">
          <AccordionItem value="shipping">
            <AccordionTrigger>How long does shipping take?</AccordionTrigger>
            <AccordionContent>
              Standard shipping typically takes 3-5 business days within the
              continental US.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="returns">
            <AccordionTrigger>What&apos;s your return policy?</AccordionTrigger>
            <AccordionContent>
              We offer a 30-day return policy for unused items in their original
              packaging.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="payment">
            <AccordionTrigger>
              What payment methods do you accept?
            </AccordionTrigger>
            <AccordionContent>
              We accept all major credit cards, PayPal, and Apple Pay.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  );
}
