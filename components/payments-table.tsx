"use client"

import { useState } from "react"
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Sample data
const payments = [
  {
    id: "1",
    status: "success",
    email: "ken99@example.com",
    amount: "$316.00",
  },
  {
    id: "2",
    status: "success",
    email: "Abe45@example.com",
    amount: "$242.00",
  },
  {
    id: "3",
    status: "processing",
    email: "Monserrat44@example.com",
    amount: "$837.00",
  },
  {
    id: "4",
    status: "failed",
    email: "carmella@example.com",
    amount: "$721.00",
  },
]

export default function PaymentsTable() {
  const [selectedRows, setSelectedRows] = useState<string[]>([])
  const [filterValue, setFilterValue] = useState("")

  const isAllSelected = selectedRows.length === payments.length
  const isSomeSelected = selectedRows.length > 0 && !isAllSelected

  const toggleSelectAll = () => {
    if (isAllSelected) {
      setSelectedRows([])
    } else {
      setSelectedRows(payments.map((payment) => payment.id))
    }
  }

  const toggleSelectRow = (id: string) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id))
    } else {
      setSelectedRows([...selectedRows, id])
    }
  }

  return (
    <Card className="rounded-xl">
      <CardHeader className="flex flex-col space-y-1.5 p-6">
        <CardTitle className="font-semibold tracking-tight text-xl">Payments</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">Manage your payments.</CardDescription>
      </CardHeader>
      <CardContent className="p-6 pt-0">
        <div className="mb-4 flex items-center gap-4">
          <Input
            className="max-w-sm"
            placeholder="Filter emails..."
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto">
                Columns <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Checkbox id="status" className="mr-2" defaultChecked />
                <label htmlFor="status">Status</label>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Checkbox id="email" className="mr-2" defaultChecked />
                <label htmlFor="email">Email</label>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Checkbox id="amount" className="mr-2" defaultChecked />
                <label htmlFor="amount">Amount</label>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]">
                  <Checkbox
                    checked={isAllSelected || isSomeSelected}
                    onCheckedChange={toggleSelectAll}
                    aria-label="Select all"
                  />
                </TableHead>
                <TableHead>Status</TableHead>
                <TableHead>
                  <Button variant="ghost" className="flex items-center gap-1 px-4 py-2">
                    Email
                    <ArrowUpDown className="h-4 w-4" />
                  </Button>
                </TableHead>
                <TableHead>
                  <div className="text-right">Amount</div>
                </TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {payments.map((payment) => (
                <TableRow key={payment.id}>
                  <TableCell>
                    <Checkbox
                      checked={selectedRows.includes(payment.id)}
                      onCheckedChange={() => toggleSelectRow(payment.id)}
                      aria-label="Select row"
                    />
                  </TableCell>
                  <TableCell>
                    <div className="capitalize">{payment.status}</div>
                  </TableCell>
                  <TableCell>
                    <div className="lowercase">{payment.email}</div>
                  </TableCell>
                  <TableCell>
                    <div className="text-right font-medium">{payment.amount}</div>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>View payment</DropdownMenuItem>
                        <DropdownMenuItem>View receipt</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Delete payment</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="flex items-center justify-end space-x-2 pt-4">
          <div className="flex-1 text-sm text-muted-foreground">
            {selectedRows.length} of {payments.length} row(s) selected.
          </div>
          <div className="space-x-2">
            <Button variant="outline" size="sm" className="h-8 rounded-md px-3 text-xs" disabled>
              Previous
            </Button>
            <Button variant="outline" size="sm" className="h-8 rounded-md px-3 text-xs" disabled>
              Next
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

