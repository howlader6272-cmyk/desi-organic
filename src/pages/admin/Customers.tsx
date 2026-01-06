import { Search, Mail, Phone, ShoppingBag } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const AdminCustomers = () => {
  // Demo customers
  const customers = [
    {
      id: "1",
      name: "রহিম উদ্দিন",
      email: "rahim@email.com",
      phone: "01712345678",
      orders: 5,
      total_spent: 8500,
      joined: "১৫ ডিসেম্বর, ২০২৩",
    },
    {
      id: "2",
      name: "ফাতেমা বেগম",
      email: "fatema@email.com",
      phone: "01812345678",
      orders: 3,
      total_spent: 4200,
      joined: "২০ ডিসেম্বর, ২০২৩",
    },
    {
      id: "3",
      name: "করিম সাহেব",
      email: "karim@email.com",
      phone: "01912345678",
      orders: 8,
      total_spent: 15600,
      joined: "১০ নভেম্বর, ২০২৩",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">কাস্টমার</h1>
        <p className="text-muted-foreground">সকল কাস্টমার দেখুন</p>
      </div>

      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input placeholder="কাস্টমার খুঁজুন..." className="pl-10" />
      </div>

      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>কাস্টমার</TableHead>
              <TableHead>যোগাযোগ</TableHead>
              <TableHead className="text-center">অর্ডার</TableHead>
              <TableHead className="text-right">মোট খরচ</TableHead>
              <TableHead>যোগদান</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customers.map((customer) => (
              <TableRow key={customer.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-bold text-primary">
                        {customer.name.charAt(0)}
                      </span>
                    </div>
                    <span className="font-medium">{customer.name}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="h-3 w-3 text-muted-foreground" />
                      {customer.email}
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="h-3 w-3 text-muted-foreground" />
                      {customer.phone}
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-center">
                  <Badge variant="secondary" className="gap-1">
                    <ShoppingBag className="h-3 w-3" />
                    {customer.orders}টি
                  </Badge>
                </TableCell>
                <TableCell className="text-right font-medium">
                  ৳{customer.total_spent.toLocaleString()}
                </TableCell>
                <TableCell className="text-sm text-muted-foreground">
                  {customer.joined}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AdminCustomers;
