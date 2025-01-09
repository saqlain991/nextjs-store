"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";

const AddProductPage = () => {
  return (
    <div className="p-6">
      {/* Page Header */}

      {/* Product Table */}
      <Card>
        <CardHeader>
          <CardTitle>Add Product Page</CardTitle>
        </CardHeader>
        <Separator className="border-t" />
        <CardContent>
          <div className="grid grid-cols-2 gap-2 justify-between items-center my-4 ">
            <div className="flex flex-col gap-2">
              <Label>Name</Label>
              <Input name="name" placeholder="Name" />{" "}
            </div>
            <div className="flex flex-col gap-2">
              <Label>Image</Label>
              <Input id="image" type="file" />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Price</Label>
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
                  placeholder="Enter product price"
                  className="pl-9"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label>Quantity</Label>
              <Input name="qty" placeholder="120" />{" "}
            </div>
            <div className="flex flex-col gap-2">
              <Label>Stock</Label>
              <Switch name="stock" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Label>Description</Label>
            <Textarea draggable="false"></Textarea>
          </div>
          <div className="flex justify-start mt-4">
            <Button variant="outline">Cancel</Button>
            <Button className="ml-2">Add Product</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddProductPage;
