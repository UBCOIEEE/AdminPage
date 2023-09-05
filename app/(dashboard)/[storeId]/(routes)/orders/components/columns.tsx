"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { Button  } from "@/components/ui/button"
import { CellAction } from "./cell-action"

export type OrderColumn = {
  id: string; 
  phone: string;
  address: string;
  isPaid: boolean;
  totalPrice: string;
  products: string;
  createdAt: string;
}

export const columns: ColumnDef<OrderColumn>[] = [
  {
    accessorKey: "products",
    header: "Products"
  },
  {
    accessorKey: "phone",
    header: "Phone"
  },
  {
    accessorKey: "address",
    header: "Address"
  },
  {
    accessorKey: "totalPrice",
    header: "Total price"
  },
  {
    accessorKey: "isPaid",
    header: "Paid"
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
];

/*"use client"

import { Button } from "@/components/ui/button"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type BillboardColumn = {
  id: string;
  label: string;
  //status: string //"pending" | "processing" | "success" | "failed"
  //email: string
  createdAt: string;
}

export const columns: ColumnDef<BillboardColumn>[] = [
  /*{
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "label",
    header: "Label",
    /*header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Email
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
  },},
  {
    accessorKey: "createdAt",
    header: "Date",
  },
]
*/