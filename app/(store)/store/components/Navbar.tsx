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
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserButton, useAuth } from "@clerk/nextjs";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const pathname = usePathname();
  const { isSignedIn } = useAuth();

  return (
    <div className="fixed top-0 right-0 z-50 w-full bg-background border-b ">
      {/* Mobile Navigation */}
      <div className="lg:hidden flex items-center justify-between p-4 container mx-auto">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="flex flex-col gap-4 mt-8">
              <Link href="/store" className="nav-link">
                <Home className="h-5 w-5" />
                Home
              </Link>
              <Link href="/store/shop" className="nav-link">
                <ShoppingBag className="h-5 w-5" />
                Shop
              </Link>
              <Link href="/store/about" className="nav-link">
                <Info className="h-5 w-5" />
                About
              </Link>
              <Link href="/store/contact" className="nav-link">
                <Phone className="h-5 w-5" />
                Contact
              </Link>
              <div className="pt-4 border-t space-y-4">
                {isSignedIn ? (
                  <UserButton />
                ) : (
                  <Button asChild>
                    <Link href="/store/sign-in">
                      <LogIn className="h-5 w-5" />
                      <span>Login</span>
                    </Link>
                  </Button>
                )}
              </div>
            </nav>
          </SheetContent>
        </Sheet>

        <Link href="/store">
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
        <Link href="/store">
          <Image src={logo} alt="Logo" width={200} height={80} />
        </Link>

        <nav className="flex gap-8">
          <Link href="/store" className="nav-link">
            Home
          </Link>
          <Link href="/store/shop" className="nav-link">
            Shop
          </Link>
          <Link href="/store/about" className="nav-link">
            About
          </Link>
          <Link href="/store/contact" className="nav-link">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/store/cart">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </Link>
          {isSignedIn ? (
            <UserButton />
          ) : (
            <Button asChild>
              <Link href="/store/sign-in">
                <LogIn className="h-5 w-5" />
                Login
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
