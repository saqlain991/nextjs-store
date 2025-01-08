import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Pagination } from "@/components/ui/pagination";
import React from "react";

interface Pagination {
  page: number;
  totalPages: number;
}

const ProductPage = () => {
  return (
    <div className="p-6">
      {/* Page Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Product Page</h2>
        <div className="flex gap-4">
          <Input placeholder="Search products..." className="w-60" />
          <Button>Add Product</Button>
        </div>
      </div>

      {/* Product Table */}
      <Card>
        <CardHeader>
          <CardTitle>Product List</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="w-full h-[400px]">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="h-12 px-4 text-left font-medium">ID</th>
                  <th className="h-12 px-4 text-left font-medium">Name</th>
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
                {[...Array(6)].map((_, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-4">#{index + 1}</td>
                    <td className="p-4">Product {index + 1}</td>
                    <td className="p-4 truncate w-40">
                      This is a sample product description.
                    </td>
                    <td className="p-4">$10.00</td>
                    <td className="p-4">50</td>
                    <td className="p-4">In Stock</td>
                    <td className="p-4">
                      <Button variant="outline" className="mr-2">
                        Edit
                      </Button>
                      <Button variant="outline">View</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ScrollArea>
        </CardContent>
      </Card>

      {/* Pagination */}
      <div className="flex justify-end mt-4">
        <Pagination />
      </div>
    </div>
  );
};

export default ProductPage;
