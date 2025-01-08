import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import { SVGProps } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
// import { img1 } from "../../assets/apple.png";
// import { img2 } from "../../assets/google.png";
// import { img3 } from "../../assets/uber.png";
// import { img3 } from "../../assets/zomato.png";

export default function SingleProduct() {
  return (
    <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-20">
      <div className="grid gap-3 items-start">
        <div className="grid gap-4">
          <Image
            src="../../assets/giftcard-placeholder.svg"
            alt="Product Image"
            width={400}
            height={400}
            className=" object-cover border w-full rounded-lg overflow-hidden"
          />
          <div className="hidden md:grid grid-cols-4 gap-3">
            <button className="border hover:border-primary rounded-lg overflow-hidden transition-colors">
              <Image
                src="../../assets/giftcard-placeholder.svg"
                alt="Preview thumbnail"
                width={100}
                height={120}
                className="aspect-[5/6] object-cover"
              />
              <span className="sr-only">View Image 1</span>
            </button>
            <button className="border hover:border-primary rounded-lg overflow-hidden transition-colors">
              <Image
                src="../../assets/giftcard-placeholder.svg"
                alt="Preview thumbnail"
                width={100}
                height={120}
                className="aspect-[5/6] object-cover"
              />
              <span className="sr-only">View Image 2</span>
            </button>
            <button className="border hover:border-primary rounded-lg overflow-hidden transition-colors">
              <Image
                src="../../assets/giftcard-placeholder.svg"
                alt="Preview thumbnail"
                width={100}
                height={120}
                className="aspect-[5/6] object-cover"
              />
              <span className="sr-only">View Image 3</span>
            </button>
            <button className="border hover:border-primary rounded-lg overflow-hidden transition-colors">
              <Image
                src="../../assets/giftcard-placeholder.svg"
                alt="Preview thumbnail"
                width={100}
                height={120}
                className="aspect-[5/6] object-cover"
              />
              <span className="sr-only">View Image 4</span>
            </button>
          </div>
        </div>
      </div>
      <div className="grid gap-4 md:gap-10 items-start">
        <div className="grid gap-4">
          <h1 className="font-bold text-3xl lg:text-4xl">
            Google PlayStore Card
          </h1>
          <div>
            {/* <p>60% combed ringspun cotton/40% polyester jersey tee.</p> */}
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-0.5">
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
              <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
            </div>
            <div className="text-sm text-muted-foreground">(12 reviews)</div>
          </div>
          <div className="text-4xl font-bold">$99</div>
        </div>
        <form className="grid gap-4 md:gap-10">
          {/* Here Color starts  
          <div className="grid gap-2">
            <Label htmlFor="color" className="text-base">
              Color
            </Label>
            <RadioGroup
              id="color"
              defaultValue="black"
              className="flex items-center gap-2"
            >
              <Label
                htmlFor="color-black"
                className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
              >
                <RadioGroupItem id="color-black" value="black" />
                Black
              </Label>
              <Label
                htmlFor="color-white"
                className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
              >
                <RadioGroupItem id="color-white" value="white" />
                White
              </Label>
              <Label
                htmlFor="color-blue"
                className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
              >
                <RadioGroupItem id="color-blue" value="blue" />
                Blue
              </Label>
            </RadioGroup>
          </div> */}

          {/* Here Size starts 
          <div className="grid gap-2">
            <Label htmlFor="size" className="text-base">
              Size
            </Label>
            <RadioGroup
              id="size"
              defaultValue="m"
              className="flex items-center gap-2"
            >
              <Label
                htmlFor="size-xs"
                className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
              >
                <RadioGroupItem id="size-xs" value="xs" />
                XS
              </Label>
              <Label
                htmlFor="size-s"
                className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
              >
                <RadioGroupItem id="size-s" value="s" />S
              </Label>
              <Label
                htmlFor="size-m"
                className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
              >
                <RadioGroupItem id="size-m" value="m" />M
              </Label>
              <Label
                htmlFor="size-l"
                className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
              >
                <RadioGroupItem id="size-l" value="l" />L
              </Label>
              <Label
                htmlFor="size-xl"
                className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
              >
                <RadioGroupItem id="size-xl" value="xl" />
                XL
              </Label>
            </RadioGroup>
          </div> */}

          {/* Here Price starts  */}
          <div className="grid gap-2">
            <Label htmlFor="price" className="text-base">
              Price
            </Label>
            <RadioGroup
              id="price"
              defaultValue="5"
              className="flex items-center gap-2"
            >
              <Label
                htmlFor="price-5"
                className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
              >
                <RadioGroupItem id="price-5" value="5" />$ 5
              </Label>
              <Label
                htmlFor="price-10"
                className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
              >
                <RadioGroupItem id="price-10" value="s" />$ 10
              </Label>
              <Label
                htmlFor="price-20"
                className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
              >
                <RadioGroupItem id="price-20" value="20" />$ 20
              </Label>
              <Label
                htmlFor="price-50"
                className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
              >
                <RadioGroupItem id="price-50" value="50" />$ 50
              </Label>
              <Label
                htmlFor="price-100"
                className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
              >
                <RadioGroupItem id="price-100" value="100" />$ 100
              </Label>
            </RadioGroup>
          </div>
          {/* Custom Price Input Field */}
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="currency">Amount</Label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <span className="text-muted-foreground">$</span>
              </div>
              <Input
                id="currency"
                type="number"
                min={0}
                max={500}
                step={1}
                placeholder="Enter amount"
                className="pl-9"
              />
            </div>
          </div>

          <div className="grid gap-2  ">
            <Label htmlFor="quantity" className="text-base">
              Quantity
            </Label>
            <Select defaultValue="1">
              <SelectTrigger className="w-full max-w-sm items-center">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="4">4</SelectItem>
                <SelectItem value="5">5</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button size="lg">Add to cart</Button>
        </form>
        <Separator />
        <div className="grid gap-4 text-sm leading-loose">
          <h2 className="font-bold text-lg">Product Details</h2>
          <p>
            Introducing the Acme Circles T-Shirt, a perfect blend of style and
            comfort for the modern individual. This tee is crafted with a
            meticulous composition of 60% combed ringspun cotton and 40%
            polyester jersey, ensuring a soft and breathable fabric that feels
            gentle against the skin.
          </p>
          <p>
            The design of the Acme Circles T-Shirt is as striking as it is
            comfortable. The shirt features a unique circle-inspired pattern
            that adds a modern and eye-catching touch to your ensemble.
          </p>
          <h2 className="font-bold text-lg">Product Specifications</h2>
          <ul className="list-disc pl-6">
            <li>60% combed ringspun cotton, 40% polyester jersey</li>
            <li>Machine washable</li>
            <li>Relaxed fit</li>
            <li>Ribbed crew neckline</li>
          </ul>
        </div>
        {/* Customer Reviews Section 
        <div className="grid gap-4">
          <h2 className="font-bold text-lg">Customer Reviews</h2>
          <div className="flex gap-4">
            <Avatar className="w-10 h-10 border">
              <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="grid gap-4">
              <div className="flex gap-4 items-start">
                <div className="grid gap-0.5 text-sm">
                  <h3 className="font-semibold">Sarah Johnson</h3>
                  <time className="text-sm text-muted-foreground">
                    2 days ago
                  </time>
                </div>
                <div className="flex items-center gap-0.5 ml-auto">
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                  <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                </div>
              </div>
              <div className="text-sm leading-loose text-muted-foreground">
                <p>
                  I have been experimenting with my Acme Circles T-Shirt for a
                  few weeks now, and its been a great addition to my wardrobe.
                  The fabric is soft and comfortable, and the unique design
                  really stands out.
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <Avatar className="w-10 h-10 border">
              <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="grid gap-4">
              <div className="flex gap-4 items-start">
                <div className="grid gap-0.5 text-sm">
                  <h3 className="font-semibold">Alex Smith</h3>
                  <time className="text-sm text-muted-foreground">
                    3 weeks ago
                  </time>
                </div>
                <div className="flex items-center gap-0.5 ml-auto">
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                  <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                </div>
              </div>
              <div className="text-sm leading-loose text-muted-foreground">
                <p>
                  The Acme Circles T-Shirt is a great quality product. The
                  fabric is soft and durable, and the design is really unique
                  and eye-catching. I have received a lot of compliments when
                  wearing it.
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      {/* Related Product */}
    </div>
  );
}

function StarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
