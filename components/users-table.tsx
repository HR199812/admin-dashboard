"use client";

import { useState } from "react";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Popover, PopoverTrigger } from "@/components/ui/popover";
import { LucideCirclePlus, LucideColumns2 } from "lucide-react";
import { usersData } from "@/app/server/users-response";
// Sample data
const users = usersData;

// Status badge variants
const statusVariants = {
  active: "bg-green-300 text-green-800", // Softer yet noticeable green
  pending: "bg-yellow-200 text-yellow-800", // Warm muted yellow
  inactive: "bg-gray-300 text-gray-800", // Neutral but distinct gray
  banned: "bg-red-300 text-red-800", // Soft warning red
} as const;

export default function UsersTable() {
  const [selectedRows, setSelectedRows] = useState<string[]>([]);

  const isAllSelected = selectedRows.length === users.length;
  const isSomeSelected = selectedRows.length > 0 && !isAllSelected;

  const toggleSelectAll = () => {
    if (isAllSelected) {
      setSelectedRows([]);
    } else {
      setSelectedRows(users.map((user) => user.id));
    }
  };

  const toggleSelectRow = (id: string) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  return (
    <div className="w-full">
      <div className="flex items-center gap-4 pb-4">
        {/* Search Input */}
        <div className="flex gap-2 max-w-sm">
          <Input
            className="placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground"
            placeholder="Search users..."
          />

          {/* Popover Buttons */}
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">
                <LucideCirclePlus className="h-4 w-4" /> Status
              </Button>
            </PopoverTrigger>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">
                <LucideCirclePlus className="h-4 w-4" /> Plan
              </Button>
            </PopoverTrigger>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">
                <LucideCirclePlus className="h-4 w-4" /> Role
              </Button>
            </PopoverTrigger>
          </Popover>
        </div>

        {/* Column Layout Button */}
        <Button variant="outline" className="ml-auto size-9">
          <LucideColumns2 className="h-5 w-5" />
        </Button>
      </div>
      <div className="w-full bg-white rounded-lg shadow border border-gray-200 h-[600px] flex flex-col">
        {/* Table Header */}
        <div className="overflow-hidden">
          <Table className="w-full border-collapse">
            <TableHeader className="sticky top-0 bg-white z-10 border-b border-gray-200">
              <TableRow className="px-8">
                <TableHead className="w-[50px]">
                  <Checkbox
                    checked={isAllSelected || isSomeSelected}
                    onCheckedChange={toggleSelectAll}
                    aria-label="Select all"
                  />
                </TableHead>
                <TableHead>Name</TableHead>
                <TableHead>
                  <Button
                    variant="ghost"
                    className="flex items-center gap-1 px-4 py-2 -ml-3"
                  >
                    Role <ArrowUpDown className="h-4 w-4" />
                  </Button>
                </TableHead>
                <TableHead>
                  <Button
                    variant="ghost"
                    className="flex items-center gap-1 px-4 py-2 -ml-3"
                  >
                    Plan <ArrowUpDown className="h-4 w-4" />
                  </Button>
                </TableHead>
                <TableHead>
                  <Button
                    variant="ghost"
                    className="flex items-center gap-1 px-4 py-2 -ml-3"
                  >
                    Email <ArrowUpDown className="h-4 w-4" />
                  </Button>
                </TableHead>
                <TableHead>
                  <Button
                    variant="ghost"
                    className="flex items-center gap-1 px-4 py-2 -ml-3"
                  >
                    Country <ArrowUpDown className="h-4 w-4" />
                  </Button>
                </TableHead>
                <TableHead>
                  <Button
                    variant="ghost"
                    className="flex items-center gap-1 px-4 py-2 -ml-3"
                  >
                    Status <ArrowUpDown className="h-4 w-4" />
                  </Button>
                </TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
          </Table>
        </div>

        {/* Scrollable Table Body */}
        <div className="overflow-y-auto flex-1">
          <Table className="w-full border-collapse">
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id} className="p-4 space-y-6">
                  <TableCell>
                    <Checkbox
                      checked={selectedRows.includes(user.id)}
                      onCheckedChange={() => toggleSelectRow(user.id)}
                      aria-label="Select row"
                    />
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-4">
                      <Avatar className="size-8">
                        <AvatarImage src={user.avatar} alt={user.name} />
                      </Avatar>
                      <div className="capitalize">{user.name}</div>
                    </div>
                  </TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>{user.plan}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.country}</TableCell>
                  <TableCell>
                    <Badge
                      className={`${
                        statusVariants[
                          user.status as keyof typeof statusVariants
                        ] || "bg-gray-300 text-gray-800"
                      } capitalize`}
                    >
                      {user.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="size-9 p-0">
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>View details</DropdownMenuItem>
                        <DropdownMenuItem>Edit user</DropdownMenuItem>
                        <DropdownMenuItem>Chat</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Delete user</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
