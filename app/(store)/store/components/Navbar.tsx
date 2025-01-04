import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Home,
  Info,
  LogIn,
  Menu,
  Phone,
  ShoppingBag,
  ShoppingCart,
  User,
  UserPlus,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="fixed top-0 right-0 z-50 w-full bg-background border-b">
      {/* Mobile & Medium Navigation */}
      <div className="lg:hidden flex items-center justify-between p-4 container mx-auto">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="flex flex-col gap-4 mt-8">
              <Link
                href="/store"
                className={`flex items-center gap-2 text-lg font-medium p-2 rounded-md transition-colors ${
                  pathname === "/store"
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted"
                }`}
              >
                <Home className="h-5 w-5" />
                Home
              </Link>
              <Link
                href="/store/shop"
                className={`flex items-center gap-2 text-lg font-medium p-2 rounded-md transition-colors ${
                  pathname === "/store/shop"
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted"
                }`}
              >
                <ShoppingBag className="h-5 w-5" />
                Shop
              </Link>
              <Link
                href="/store/about"
                className={`flex items-center gap-2 text-lg font-medium p-2 rounded-md transition-colors ${
                  pathname === "/store/about"
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted"
                }`}
              >
                <Info className="h-5 w-5" />
                About
              </Link>
              <Link
                href="/store/contact"
                className={`flex items-center gap-2 text-lg font-medium p-2 rounded-md transition-colors ${
                  pathname === "/store/contact"
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted"
                }`}
              >
                <Phone className="h-5 w-5" />
                Contact
              </Link>
              <div className="pt-4 border-t space-y-4">
                <Button asChild className="flex items-center gap-2">
                  <Link href="/store/auth/login">
                    <User className="h-5 w-5" />
                    <span>Login / Register</span>
                  </Link>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>

        <Link href="/store" className="text-2xl font-bold">
          <Image src={logo} alt="Logo" width={200} height={80} />
        </Link>

        <Link href="/store/cart">
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-5 w-5" />
          </Button>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center justify-between p-4 container px-16">
        <Link href="/store" className="text-2xl font-bold flex items-center">
          <Image
            src={logo}
            alt="Logo"
            width={200}
            height={80}
            className="object-contain"
          />
        </Link>

        <nav className="flex gap-8">
          <Link
            href="/store"
            className={`text-lg font-medium transition-colors ${
              pathname === "/store"
                ? "text-primary"
                : "text-foreground hover:text-primary"
            }`}
          >
            Home
          </Link>
          <Link
            href="/store/shop"
            className={`text-lg font-medium transition-colors ${
              pathname === "/store/shop"
                ? "text-primary"
                : "text-foreground hover:text-primary"
            }`}
          >
            Shop
          </Link>
          <Link
            href="/store/about"
            className={`text-lg font-medium transition-colors ${
              pathname === "/store/about"
                ? "text-primary"
                : "text-foreground hover:text-primary"
            }`}
          >
            About
          </Link>
          <Link
            href="/store/contact"
            className={`text-lg font-medium transition-colors ${
              pathname === "/store/contact"
                ? "text-primary"
                : "text-foreground hover:text-primary"
            }`}
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/store/cart">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </Link>
          <Button asChild className="flex items-center gap-2">
            <Link href="/store/auth/login">
              <User className="h-5 w-5" />
              <span>Login / Register</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
