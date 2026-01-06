import { useState } from "react";
import {
  Search,
  Filter,
  Eye,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
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

const AdminOrders = () => {
  const [statusFilter, setStatusFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Demo orders data
  const orders = [
    {
      id: "ORD-20240120-1234",
      customer: "রহিম উদ্দিন",
      phone: "01712345678",
      items: 3,
      total: 1850,
      status: "pending",
      payment: "cod",
      date: "২০ জানুয়ারি, ২০২৪",
    },
    {
      id: "ORD-20240119-5678",
      customer: "ফাতেমা বেগম",
      phone: "01812345678",
      items: 1,
      total: 750,
      status: "confirmed",
      payment: "partial",
      date: "১৯ জানুয়ারি, ২০২৪",
    },
    {
      id: "ORD-20240118-9012",
      customer: "করিম সাহেব",
      phone: "01912345678",
      items: 4,
      total: 2200,
      status: "shipped",
      payment: "cod",
      date: "১৮ জানুয়ারি, ২০২৪",
    },
    {
      id: "ORD-20240117-3456",
      customer: "নাসরিন আক্তার",
      phone: "01612345678",
      items: 2,
      total: 480,
      status: "delivered",
      payment: "paid",
      date: "১৭ জানুয়ারি, ২০২৪",
    },
    {
      id: "ORD-20240116-7890",
      customer: "আলী হোসেন",
      phone: "01512345678",
      items: 5,
      total: 3100,
      status: "cancelled",
      payment: "refunded",
      date: "১৬ জানুয়ারি, ২০২৪",
    },
  ];

  const getStatusBadge = (status: string) => {
    const config: Record<string, { label: string; className: string }> = {
      pending: { label: "পেন্ডিং", className: "bg-yellow-100 text-yellow-700" },
      confirmed: { label: "কনফার্মড", className: "bg-blue-100 text-blue-700" },
      processing: { label: "প্রসেসিং", className: "bg-purple-100 text-purple-700" },
      shipped: { label: "শিপড", className: "bg-indigo-100 text-indigo-700" },
      delivered: { label: "ডেলিভার্ড", className: "bg-green-100 text-green-700" },
      cancelled: { label: "বাতিল", className: "bg-red-100 text-red-700" },
    };
    const { label, className } = config[status] || config.pending;
    return <Badge className={className}>{label}</Badge>;
  };

  const getPaymentBadge = (payment: string) => {
    const config: Record<string, { label: string; variant: "outline" | "default" | "secondary" }> = {
      cod: { label: "COD", variant: "outline" },
      partial: { label: "আংশিক", variant: "secondary" },
      paid: { label: "পেইড", variant: "default" },
      refunded: { label: "রিফান্ড", variant: "outline" },
    };
    const { label, variant } = config[payment] || config.cod;
    return <Badge variant={variant}>{label}</Badge>;
  };

  const filteredOrders = orders.filter((order) => {
    if (statusFilter !== "all" && order.status !== statusFilter) return false;
    if (searchQuery && !order.id.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !order.customer.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">অর্ডার ম্যানেজমেন্ট</h1>
        <p className="text-muted-foreground">সকল অর্ডার দেখুন এবং পরিচালনা করুন</p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="অর্ডার নম্বর বা কাস্টমার খুঁজুন..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full sm:w-48">
            <Filter className="h-4 w-4 mr-2" />
            <SelectValue placeholder="স্ট্যাটাস" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">সব অর্ডার</SelectItem>
            <SelectItem value="pending">পেন্ডিং</SelectItem>
            <SelectItem value="confirmed">কনফার্মড</SelectItem>
            <SelectItem value="processing">প্রসেসিং</SelectItem>
            <SelectItem value="shipped">শিপড</SelectItem>
            <SelectItem value="delivered">ডেলিভার্ড</SelectItem>
            <SelectItem value="cancelled">বাতিল</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Orders Table */}
      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>অর্ডার</TableHead>
              <TableHead>কাস্টমার</TableHead>
              <TableHead className="text-center">পণ্য</TableHead>
              <TableHead className="text-right">মোট</TableHead>
              <TableHead className="text-center">স্ট্যাটাস</TableHead>
              <TableHead className="text-center">পেমেন্ট</TableHead>
              <TableHead className="text-center">তারিখ</TableHead>
              <TableHead className="text-right">অ্যাকশন</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>
                  <div>
                    <p className="font-medium">{order.customer}</p>
                    <p className="text-sm text-muted-foreground">{order.phone}</p>
                  </div>
                </TableCell>
                <TableCell className="text-center">{order.items}টি</TableCell>
                <TableCell className="text-right font-medium">
                  ৳{order.total.toLocaleString()}
                </TableCell>
                <TableCell className="text-center">
                  {getStatusBadge(order.status)}
                </TableCell>
                <TableCell className="text-center">
                  {getPaymentBadge(order.payment)}
                </TableCell>
                <TableCell className="text-center text-sm">
                  {order.date}
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Eye className="h-4 w-4 mr-2" />
                        বিস্তারিত দেখুন
                      </DropdownMenuItem>
                      <DropdownMenuItem>স্ট্যাটাস আপডেট</DropdownMenuItem>
                      <DropdownMenuItem>ট্র্যাকিং যোগ করুন</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">
                        অর্ডার বাতিল
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Pagination */}
        <div className="flex items-center justify-between p-4 border-t border-border">
          <p className="text-sm text-muted-foreground">
            {filteredOrders.length}টি অর্ডার দেখানো হচ্ছে
          </p>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" disabled>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm">
              ১
            </Button>
            <Button variant="outline" size="icon" disabled>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminOrders;
