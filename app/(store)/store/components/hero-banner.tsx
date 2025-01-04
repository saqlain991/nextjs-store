'use client';

import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Image from 'next/image';
import Link from 'next/link';

export function HeroBanner() {
  return (
    <Carousel className="w-full max-w-screen-2xl mx-auto">
      <CarouselContent>
        <CarouselItem>
          <div className="relative h-[500px]">
            <Image
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&h=500&fit=crop"
              alt="Hero 1"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Summer Collection</h1>
                <p className="text-xl mb-8">Discover our latest arrivals</p>
                <Button size="lg" asChild>
                  <Link href="/store/shop">Shop Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}