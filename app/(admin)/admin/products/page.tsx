"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { productData } from "../data/productData";
import Image from "next/image";

const ProductPage = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);

  const itemsPerPage = 10;

  const filteredData = productData.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.id.toString().includes(searchTerm)
  );

  const paginatedData = filteredData.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleAddProduct = () => {
    router.push("/products/add-product");
  };

  const handleEdit = (product: any) => {
    router.push(`/products/edit-product?id=${product.id}`);
  };

  return (
    <div className="p-6">
      {/* Page Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Product Page</h2>
        <div className="flex gap-4">
          <Input
            placeholder="Search products..."
            className="w-60"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <Button onClick={handleAddProduct}>Add Product</Button>
        </div>
      </div>

      {/* Product Table */}
      <Card>
        <CardHeader>
          <CardTitle>Product List</CardTitle>
        </CardHeader>
        <Separator className="border-t" />
        <CardContent>
          <ScrollArea className="w-full h-[400px]">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="h-12 px-4 text-left font-medium">ID</th>
                  <th className="h-12 px-4 text-left font-medium">Name</th>
                  <th className="h-12 px-4 text-left font-medium">Image</th>
                  <th className="h-12 px-4 text-left font-medium">
                    Description
                  </th>
                  <th className="h-12 px-4 text-left font-medium">Price</th>
                  <th className="h-12 px-4 text-left font-medium">Quantity</th>
                  <th className="h-12 px-4 text-left font-medium">Stock</th>
                  <th className="h-12 px-4 text-left font-medium">Action</th>
                </tr>
              </thead>
              <tbody>
                {paginatedData.map((product) => (
                  <tr key={product.id} className="border-b">
                    <td className="p-4">#{product.id}</td>
                    <td className="p-4">{product.name}</td>
                    <td className="p-4">
                      <Image
                        src={product.imageUrl}
                        alt={product.name}
                        width={40}
                        height={40}
                      />
                    </td>

                    <td className="p-4 truncate w-40">{product.description}</td>
                    <td className="p-4">${product.price.toFixed(2)}</td>
                    <td className="p-4">{product.quantity}</td>
                    <td className="p-4">
                      {product.stock ? (
                        <Badge>In Stock</Badge>
                      ) : (
                        <Badge variant="secondary">Out of Stock</Badge>
                      )}
                    </td>
                    <td className="p-4">
                      <Button
                        variant="outline"
                        className="mr-2"
                        onClick={() => handleEdit(product)}
                      >
                        Edit
                      </Button>
                      <Button variant="outline">Delete</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductPage;
