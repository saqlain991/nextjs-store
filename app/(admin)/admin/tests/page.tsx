"use client";
import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHead,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Edit, PlusCircle, Search, Trash, View } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

import Image from "next/image";

import Link from "next/link";

const TestPage = () => {
  const [blogData, setBlogData] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // State to handle the search query
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpenEdit, setIsModalOpenEdit] = useState(false);
  const [editData, setEditData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null); // For tracking the order being updated
  const [statusToUpdate, setStatusToUpdate] = useState(""); // For tracking the new status

  const itemsPerPage = 10;

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.post("/api/blogtest", {
        route: "get",
        search: searchQuery,
      });
      setBlogData(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [searchQuery]);

  const handleDeleteClick = async (id) => {
    try {
      await axios.post("/api/blogtest", { route: "delete", id: id });
      setBlogData(blogData.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleClickEdit = (item) => {
    setEditData(item);
    setIsModalOpenEdit(true);
  };

  const handleModalCloseEdit = () => {
    setIsModalOpenEdit(false);
    fetchData();
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(blogData.length / itemsPerPage);

  const handleAddClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    fetchData();
  };

  const handleStatusChange = (order, newStatus) => {
    setSelectedOrder(order);
    setStatusToUpdate(newStatus);
  };

  const updateOrderStatus = async (orderId, status) => {
    try {
      await axios.post("/api/blogtest", {
        route: "update",
        id: orderId,
        status,
      });
      fetchData();
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const filteredData = (blogData || []).filter((item) => {
    const lowercaseSearchQuery = searchQuery.toLowerCase();
    return (
      item.id.toString().toLowerCase().includes(lowercaseSearchQuery) ||
      (item.name && item.name.toLowerCase().includes(lowercaseSearchQuery))
    );
  });

  return (
    <div>
      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex flex-col w-full mb-4 md:mb-0">
            <h1 className="font-bold text-2xl pb-3">Coupons List</h1>
            <form>
              <div className="relative w-full">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search Here..."
                  className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                  value={searchQuery}
                  onChange={handleSearch}
                />
              </div>
            </form>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <Button
              size="sm"
              variant="outline"
              className="h-7 gap-1"
              onClick={handleAddClick}
            >
              <PlusCircle className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Add Coupons
              </span>
            </Button>
          </div>
        </div>
        <Card className="w-full overflow-hidden">
          <CardContent>
            <ScrollArea className="max-w-full h-[480px] overflow-x-auto overflow-y-auto">
              <Table className="min-w-full">
                <TableHeader>
                  <TableRow>
                    <TableHead className="whitespace-nowrap">Blog Id</TableHead>
                    <TableHead className="whitespace-nowrap">Image</TableHead>
                    <TableHead className="whitespace-nowrap"> Name</TableHead>
                    <TableHead className="whitespace-nowrap">Heading</TableHead>
                    <TableHead className="whitespace-nowrap">
                      Author Name
                    </TableHead>
                    <TableHead className="whitespace-nowrap">
                      Publish Date
                    </TableHead>
                    <TableHead className="whitespace-nowrap">
                      Description
                    </TableHead>
                    <TableHead className="whitespace-nowrap">Tags</TableHead>
                    <TableHead className="whitespace-nowrap">
                      ExternalLinks 1
                    </TableHead>
                    <TableHead className="whitespace-nowrap">
                      ExternalLinks 2
                    </TableHead>
                    <TableHead className="text-center whitespace-nowrap">
                      Action
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredData.length === 0 ? (
                    <TableRow>
                      <TableCell
                        colSpan="13"
                        className="text-center font-medium"
                      >
                        No Data is Available related to search
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredData
                      .slice(
                        (currentPage - 1) * itemsPerPage,
                        currentPage * itemsPerPage
                      )
                      .map((item) => (
                        <TableRow key={item.id}>
                          <TableCell>#{item.id}</TableCell>
                          <TableCell>
                            <Image
                              src={item.image}
                              alt={item.name}
                              width={150}
                              height={150}
                            />
                          </TableCell>
                          <TableCell>{item.name}</TableCell>
                          <TableCell className="line-clamp-2">
                            {item.heading}
                          </TableCell>
                          <TableCell>{item.authorName}</TableCell>
                          <TableCell>
                            {item.publishDate
                              ? new Date(item.publishDate).toLocaleDateString()
                              : "Not Published"}
                          </TableCell>
                          <TableCell className="max-w-96 line-clamp-2">
                            {item.description}
                          </TableCell>
                          <TableCell>{item.keyword}</TableCell>
                          <TableCell className="whitespace-nowrap">
                            <Link
                              href={item.externalLink1}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {item.externalLink1}
                            </Link>{" "}
                          </TableCell>
                          <TableCell>
                            <Link
                              href={item.externalLink2}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {item.externalLink2}
                            </Link>
                          </TableCell>
                          <TableCell className="text-center whitespace-nowrap gap-2">
                            <Button
                              size="icon"
                              variant="ghost"
                              onClick={() => handleViewClick(item.id)}
                            >
                              <View />
                              <span className="sr-only">View</span>
                            </Button>
                            <Button
                              size="icon"
                              variant="ghost"
                              onClick={() => handleEditClick(item)}
                            >
                              <Edit />
                              <span className="sr-only">Edit</span>
                            </Button>
                            <Button
                              size="icon"
                              variant="ghost"
                              onClick={() => handleDeleteClick(item.id)}
                            >
                              <Trash />
                              <span className="sr-only">Delete</span>
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))
                  )}
                </TableBody>
              </Table>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </CardContent>
          <CustomPagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
          <CardFooter>
            <div>
              Showing{" "}
              {Math.min(currentPage * itemsPerPage, filteredData.length)} of{" "}
              {filteredData.length} entries
            </div>
          </CardFooter>
        </Card>

        <EditBlogModal
          isModalOpenEdit={isModalOpenEdit}
          handleModalCloseEdit={handleModalCloseEdit}
          editData={editData}
        />

        <AddBlogsModal
          isModalOpen={isModalOpen}
          handleModalClose={handleModalClose}
        />

        <ToastContainer />
      </main>
    </div>
  );
};

export default TestPage;
