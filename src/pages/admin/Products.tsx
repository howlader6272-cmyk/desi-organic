import { useState } from "react";
import {
  Search,
  Plus,
  Edit,
  Trash2,
  MoreHorizontal,
  Image as ImageIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const AdminProducts = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Demo products data
  const products = [
    {
      id: "1",
      name_bn: "সুন্দরবনের খাঁটি মধু",
      category: "মধু",
      base_price: 850,
      sale_price: 750,
      stock: 50,
      is_featured: true,
      is_active: true,
      image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=80&h=80&fit=crop",
    },
    {
      id: "2",
      name_bn: "খাঁটি গাওয়া ঘি",
      category: "ঘি",
      base_price: 1200,
      sale_price: null,
      stock: 30,
      is_featured: true,
      is_active: true,
      image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=80&h=80&fit=crop",
    },
    {
      id: "3",
      name_bn: "কালোজিরা তেল",
      category: "তেল",
      base_price: 550,
      sale_price: 480,
      stock: 8,
      is_featured: false,
      is_active: true,
      image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=80&h=80&fit=crop",
    },
    {
      id: "4",
      name_bn: "চিনিগুঁড়া চাল",
      category: "চাল",
      base_price: 750,
      sale_price: null,
      stock: 100,
      is_featured: false,
      is_active: false,
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=80&h=80&fit=crop",
    },
  ];

  const filteredProducts = products.filter((product) =>
    product.name_bn.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">পণ্য ম্যানেজমেন্ট</h1>
          <p className="text-muted-foreground">সকল পণ্য দেখুন এবং পরিচালনা করুন</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          নতুন পণ্য যোগ করুন
        </Button>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="পণ্য খুঁজুন..."
          className="pl-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Products Table */}
      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>পণ্য</TableHead>
              <TableHead>ক্যাটাগরি</TableHead>
              <TableHead className="text-right">দাম</TableHead>
              <TableHead className="text-center">স্টক</TableHead>
              <TableHead className="text-center">বিশেষ</TableHead>
              <TableHead className="text-center">সক্রিয়</TableHead>
              <TableHead className="text-right">অ্যাকশন</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredProducts.map((product) => (
              <TableRow key={product.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-muted">
                      {product.image ? (
                        <img
                          src={product.image}
                          alt={product.name_bn}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <ImageIcon className="h-5 w-5 text-muted-foreground" />
                        </div>
                      )}
                    </div>
                    <span className="font-medium">{product.name_bn}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="secondary">{product.category}</Badge>
                </TableCell>
                <TableCell className="text-right">
                  {product.sale_price ? (
                    <div>
                      <span className="font-medium text-primary">
                        ৳{product.sale_price}
                      </span>
                      <span className="text-sm text-muted-foreground line-through ml-2">
                        ৳{product.base_price}
                      </span>
                    </div>
                  ) : (
                    <span className="font-medium">৳{product.base_price}</span>
                  )}
                </TableCell>
                <TableCell className="text-center">
                  <span
                    className={`font-medium ${
                      product.stock <= 10 ? "text-destructive" : "text-foreground"
                    }`}
                  >
                    {product.stock}
                  </span>
                </TableCell>
                <TableCell className="text-center">
                  <Switch checked={product.is_featured} />
                </TableCell>
                <TableCell className="text-center">
                  <Switch checked={product.is_active} />
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
                        <Edit className="h-4 w-4 mr-2" />
                        এডিট করুন
                      </DropdownMenuItem>
                      <DropdownMenuItem>ভ্যারিয়েন্ট</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">
                        <Trash2 className="h-4 w-4 mr-2" />
                        মুছে ফেলুন
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AdminProducts;
