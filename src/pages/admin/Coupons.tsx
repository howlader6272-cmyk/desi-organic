import { Plus, Edit, Trash2, Tag, Percent } from "lucide-react";
import { Button } from "@/components/ui/button";
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

const AdminCoupons = () => {
  // Demo coupons
  const coupons = [
    {
      id: "1",
      code: "ORGANIC10",
      type: "percentage",
      value: 10,
      min_order: 500,
      usage: 45,
      limit: 100,
      valid_until: "৩১ জানুয়ারি, ২০২৪",
      is_active: true,
    },
    {
      id: "2",
      code: "WELCOME50",
      type: "fixed",
      value: 50,
      min_order: 300,
      usage: 120,
      limit: 200,
      valid_until: "২৮ ফেব্রুয়ারি, ২০২৪",
      is_active: true,
    },
    {
      id: "3",
      code: "SUMMER20",
      type: "percentage",
      value: 20,
      min_order: 1000,
      usage: 30,
      limit: 50,
      valid_until: "১৫ ডিসেম্বর, ২০২৩",
      is_active: false,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">কুপন</h1>
          <p className="text-muted-foreground">ডিসকাউন্ট কুপন পরিচালনা করুন</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          নতুন কুপন
        </Button>
      </div>

      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>কোড</TableHead>
              <TableHead>ছাড়</TableHead>
              <TableHead className="text-center">মিনিমাম অর্ডার</TableHead>
              <TableHead className="text-center">ব্যবহার</TableHead>
              <TableHead>মেয়াদ</TableHead>
              <TableHead className="text-center">সক্রিয়</TableHead>
              <TableHead className="text-right">অ্যাকশন</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {coupons.map((coupon) => (
              <TableRow key={coupon.id}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Tag className="h-4 w-4 text-primary" />
                    <code className="font-mono font-bold">{coupon.code}</code>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="secondary" className="gap-1">
                    {coupon.type === "percentage" ? (
                      <>
                        <Percent className="h-3 w-3" />
                        {coupon.value}%
                      </>
                    ) : (
                      <>৳{coupon.value}</>
                    )}
                  </Badge>
                </TableCell>
                <TableCell className="text-center">৳{coupon.min_order}</TableCell>
                <TableCell className="text-center">
                  {coupon.usage}/{coupon.limit}
                </TableCell>
                <TableCell className="text-sm">{coupon.valid_until}</TableCell>
                <TableCell className="text-center">
                  <Switch checked={coupon.is_active} />
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-1">
                    <Button variant="ghost" size="icon">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AdminCoupons;
