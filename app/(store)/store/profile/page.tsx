"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/ui/date-picker";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState<string>("profile");
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    altPhone: "",
    email: "",
    gender: "",
    dob: "",
  });

  // Handle Input Changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // Handle Select Changes
  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, gender: value }));
  };

  // Handle Date Changes
  const handleDateChange = (date: Date | undefined) => {
    setFormData((prev) => ({ ...prev, dob: date ? date.toDateString() : "" }));
  };

  // Enable Editing
  const handleEdit = () => {
    setIsEditing(true);
  };

  // Save Changes
  const handleSubmit = () => {
    console.log("Profile Data:", formData);
    setIsEditing(false);
  };

  // Discard Changes
  const handleDiscard = () => {
    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      altPhone: "",
      email: "",
      gender: "",
      dob: "",
    });
    setIsEditing(false);
  };

  return (
    <div className="flex flex-col md:flex-row p-6 space-x-6 my-10 md:mt-20 bg-gray-100 rounded-lg">
      {/* Left Section: Navigation Buttons */}
      <div className="w-full md:w-1/4 p-4 rounded-lg space-y-4">
        {["profile", "orders", "support"].map((tab) => (
          <Button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`w-full py-2 px-4 rounded-lg ${
              activeTab === tab
                ? "bg-primary text-white hover:bg-gray-600"
                : "border border-gray-300 bg-gray-100 text-black hover:text-white"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </Button>
        ))}
      </div>

      {/* Right Section: Content Based on Active Tab */}
      <div className="w-full md:w-3/4 bg-white p-6 rounded-lg">
        {activeTab === "profile" && (
          <>
            <h2 className="text-2xl font-semibold mb-2">Profile</h2>
            <p>Your personal profile details go here.</p>
            <Separator className="my-4" />

            {/* Profile Form */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="grid gap-1.5">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  type="text"
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="John"
                  disabled={!isEditing}
                />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  type="text"
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Doe"
                  disabled={!isEditing}
                />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  type="number"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 9090909090"
                  disabled={!isEditing}
                />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="altPhone">Alternative Phone</Label>
                <Input
                  type="number"
                  id="altPhone"
                  value={formData.altPhone}
                  onChange={handleChange}
                  placeholder="+91 9090909090"
                  disabled={!isEditing}
                />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john.doe@example.com"
                  disabled={!isEditing}
                />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="gender">Gender</Label>
                <Select
                  onValueChange={handleSelectChange}
                  disabled={!isEditing}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="dob">DOB</Label>
                <DatePicker
                  onDateChange={handleDateChange}
                  disabled={!isEditing}
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-10">
              {!isEditing ? (
                <Button
                  className="py-2 px-4 bg-primary text-white rounded-lg hover:bg-primary"
                  onClick={handleEdit}
                >
                  Edit Profile
                </Button>
              ) : (
                <>
                  <Button
                    className="py-2 px-4 bg-primary text-white rounded-lg hover:bg-primary"
                    onClick={handleSubmit}
                  >
                    Update Profile
                  </Button>
                  <Button
                    variant="outline"
                    className="py-2 px-4 rounded-lg"
                    onClick={handleDiscard}
                  >
                    Discard
                  </Button>
                </>
              )}
            </div>
          </>
        )}

        {/* Orders Content */}
        {activeTab === "orders" && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Orders</h2>
            <p>
              View your order history, track shipments, and manage your orders
              here.
            </p>
            {/* Example Order List */}
            <div className="mt-4">
              <div className="border-b py-2">
                <strong>Order #1</strong>
                <p>Placed on: 01/10/2025</p>
                <p>Status: Shipped</p>
              </div>
              <div className="border-b py-2">
                <strong>Order #2</strong>
                <p>Placed on: 15/09/2025</p>
                <p>Status: Delivered</p>
              </div>
            </div>
          </div>
        )}

        {/* Support Content */}
        {activeTab === "support" && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Support</h2>
            <p>
              If you need assistance, please contact our support team or check
              our FAQs.
            </p>
            <div className="mt-4">
              <Button className="py-2 px-4 bg-primary text-white rounded-lg hover:bg-primary">
                Contact Support
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
