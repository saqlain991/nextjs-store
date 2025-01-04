"use client";

import { useParams } from "next/navigation";
import { latestProducts } from "../../data/products";
import Image from "next/image";
// ... (keep other imports)

export default function ProductPage() {
  const params = useParams();
  const product = latestProducts.find((p) => p.id.toString() === params.id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6">
      <div className="grid gap-3 items-start">
        <div className="grid gap-4">
          <Image
            src={product.image}
            alt={product.name}
            width={600}
            height={900}
            className="aspect-[2/3] object-cover border w-full rounded-lg overflow-hidden"
          />
          {/* ... rest of the image gallery */}
        </div>
      </div>
      <div className="grid gap-4 md:gap-10 items-start">
        <div className="grid gap-4">
          <h1 className="font-bold text-3xl lg:text-4xl">{product.name}</h1>
          <div>
            <p>{product.description}</p>
          </div>
          {/* ... rest of the product details */}
          <div className="text-4xl font-bold">${product.price}</div>
        </div>
        {/* ... rest of the component */}
      </div>
    </div>
  );
}
