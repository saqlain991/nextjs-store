import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const EditProductDialog = ({
  open,
  product,
  onClose,
}: {
  open: boolean;
  product: any;
  onClose: () => void;
}) => {
  const [productData, setProductData] = useState(product);

  useEffect(() => {
    setProductData(product || {});
  }, [product]);

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
    console.log("Updated Product:", productData);
    onClose();
  };

  if (!product) return null;

  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Product</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Input
            name="name"
            placeholder="Name"
            value={productData.name || ""}
            onChange={handleChange}
          />
          <Textarea
            name="description"
            placeholder="Description"
            value={productData.description || ""}
            onChange={handleChange}
          />
          <Input
            name="price"
            type="number"
            placeholder="Price"
            value={productData.price || ""}
            onChange={handleChange}
          />
          <Input
            name="quantity"
            type="number"
            placeholder="Quantity"
            value={productData.quantity || ""}
            onChange={handleChange}
          />
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="stock"
              checked={productData.stock || false}
              onChange={handleChange}
            />
            <span>In Stock</span>
          </label>
        </div>
        <div className="flex justify-end mt-4">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button className="ml-2" onClick={handleSubmit}>
            Save Changes
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditProductDialog;
