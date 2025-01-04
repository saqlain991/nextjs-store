import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>

        <div className="relative h-[400px] mb-8">
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=400&fit=crop"
            alt="Team"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            Welcome to our store, where quality meets convenience. We started
            our journey in 2020 with a simple mission: to provide exceptional
            products and outstanding service to our customers.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">Our Mission</h2>
          <p className="mb-6">
            To deliver high-quality products that enhance our customers lives
            while providing exceptional service and maintaining sustainable
            business practices.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">Our Values</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Quality First</li>
            <li>Customer Satisfaction</li>
            <li>Integrity</li>
            <li>Innovation</li>
            <li>Sustainability</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="text-center">
              <h3 className="font-bold mb-2">Quality Products</h3>
              <p className="text-muted-foreground">
                Carefully curated selection of premium products
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-bold mb-2">Fast Shipping</h3>
              <p className="text-muted-foreground">
                Quick and reliable delivery to your doorstep
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-bold mb-2">24/7 Support</h3>
              <p className="text-muted-foreground">
                Always here to help with your questions
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
