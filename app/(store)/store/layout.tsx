"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex flex-col lg:px-16">
      <header className="border-b">
        <Navbar />
      </header>

      <main className="flex-1">{children}</main>

      <Footer />
    </div>
  );
}
