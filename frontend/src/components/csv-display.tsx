import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const invoices = [
  {
    product: "Product 1",
    city: "Bangalore",
    quantity: "56",
    date: "13th September 2023",
  },
  {
    product: "Product 2",
    city: "Bangalore",
    quantity: "72",
    date: "13th September 2023",
  },
  {
    product: "Product 3",
    city: "Bangalore",
    quantity: "43",
    date: "13th September 2023",
  },
  {
    product: "Product 4",
    city: "Bangalore",
    quantity: "92",
    date: "13th September 2023",
  },
  {
    product: "Product 5",
    city: "Bangalore",
    quantity: "31",
    date: "13th September 2023",
  },
  {
    product: "Product 6",
    city: "Bangalore",
    quantity: "55",
    date: "13th September 2023",
  },
  {
    product: "Product 7",
    city: "Bangalore",
    quantity: "12",
    date: "13th September 2023",
  },
]

export default function CSVDisplay() {
  return (
    <>
      <Table>
        <TableCaption>Required Inventory.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead>Region</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Quantity</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.product}>
              <TableCell className="font-medium">{invoice.product}</TableCell>
              <TableCell>{invoice.city}</TableCell>
              <TableCell>{invoice.date}</TableCell>
              <TableCell>{invoice.quantity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}
