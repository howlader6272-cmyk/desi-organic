import { Plus, Edit, Trash2, MoreHorizontal, FolderTree } from "lucide-react";
import { Button } from "@/components/ui/button";
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
import { Switch } from "@/components/ui/switch";

const AdminCategories = () => {
  // Demo categories
  const categories = [
    { id: "1", name_bn: "মধু", slug: "honey", products: 8, is_active: true },
    { id: "2", name_bn: "ঘি", slug: "ghee", products: 5, is_active: true },
    { id: "3", name_bn: "তেল", slug: "oil", products: 12, is_active: true },
    { id: "4", name_bn: "চাল", slug: "rice", products: 6, is_active: true },
    { id: "5", name_bn: "মসলা", slug: "spices", products: 15, is_active: true },
    { id: "6", name_bn: "ড্রাই ফ্রুটস", slug: "dry-fruits", products: 10, is_active: false },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">ক্যাটাগরি</h1>
          <p className="text-muted-foreground">পণ্যের ক্যাটাগরি পরিচালনা করুন</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          নতুন ক্যাটাগরি
        </Button>
      </div>

      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ক্যাটাগরি</TableHead>
              <TableHead>স্লাগ</TableHead>
              <TableHead className="text-center">পণ্য সংখ্যা</TableHead>
              <TableHead className="text-center">সক্রিয়</TableHead>
              <TableHead className="text-right">অ্যাকশন</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {categories.map((cat) => (
              <TableRow key={cat.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <FolderTree className="h-5 w-5 text-primary" />
                    </div>
                    <span className="font-medium">{cat.name_bn}</span>
                  </div>
                </TableCell>
                <TableCell className="text-muted-foreground">{cat.slug}</TableCell>
                <TableCell className="text-center">{cat.products}টি</TableCell>
                <TableCell className="text-center">
                  <Switch checked={cat.is_active} />
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
                        এডিট
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">
                        <Trash2 className="h-4 w-4 mr-2" />
                        মুছুন
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

export default AdminCategories;
