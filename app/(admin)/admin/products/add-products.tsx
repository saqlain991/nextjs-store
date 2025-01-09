"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const AddProductPage = () => {
  const router = useRouter();
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: "",
    quantity: "",
    stock: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement; // Assert the type
    const checked =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;

    setProductData({
      ...productData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = () => {
    console.log("New Product:", productData);
    router.push("/products");
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Add Product</h2>
      <div className="space-y-4">
        <Input
          name="name"
          placeholder="Name"
          value={productData.name}
          onChange={handleChange}
        />
        <Textarea
          name="description"
          placeholder="Description"
          value={productData.description}
          onChange={handleChange}
        />
        <Input
          name="price"
          type="number"
          placeholder="Price"
          value={productData.price}
          onChange={handleChange}
        />
        <Input
          name="quantity"
          type="number"
          placeholder="Quantity"
          value={productData.quantity}
          onChange={handleChange}
        />
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="stock"
            checked={productData.stock}
            onChange={handleChange}
          />
          <span>In Stock</span>
        </label>
      </div>
      <div className="flex justify-end mt-4">
        <Button variant="outline" onClick={() => router.push("/products")}>
          Cancel
        </Button>
        <Button className="ml-2" onClick={handleSubmit}>
          Add Product
        </Button>
      </div>
    </div>
  );
};

export default AddProductPage;
