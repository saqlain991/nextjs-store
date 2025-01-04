import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          {/* <h3 className="font-bold mb-4">About Us</h3> */}
          <Image src={logo} alt="Logo" width={200} height={80} />
          <p className="text-muted-foreground pt-2">
            Your trusted destination for quality products and exceptional
            service.
          </p>
        </div>
        <div>
          <h3 className="font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/store/shop"
                className="text-muted-foreground hover:text-primary"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                href="/store/about"
                className="text-muted-foreground hover:text-primary"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/store/contact"
                className="text-muted-foreground hover:text-primary"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Customer Service</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/store/shipping"
                className="text-muted-foreground hover:text-primary"
              >
                Shipping Info
              </Link>
            </li>
            <li>
              <Link
                href="/store/returns"
                className="text-muted-foreground hover:text-primary"
              >
                Returns
              </Link>
            </li>
            <li>
              <Link
                href="/store/faq"
                className="text-muted-foreground hover:text-primary"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:max-w-sm">
          <h3 className="font-bold pb-4">Newsletter</h3>
          <p className="text-muted-foreground mb-4">
            Subscribe to receive updates and special offers.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-3 py-2 rounded-md border min-w-0"
            />
            <Button className="whitespace-nowrap">Subscribe</Button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
