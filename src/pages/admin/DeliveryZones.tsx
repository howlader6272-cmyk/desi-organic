import { Plus, Edit, Trash2, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const AdminDeliveryZones = () => {
  // Demo zones
  const zones = [
    { id: "1", name_bn: "ঢাকা সিটি", charge: 60, free_above: 2000, days: "১-২ দিন", is_active: true },
    { id: "2", name_bn: "ঢাকার বাইরে (বিভাগীয় শহর)", charge: 100, free_above: 3000, days: "২-৩ দিন", is_active: true },
    { id: "3", name_bn: "ঢাকার বাইরে (অন্যান্য)", charge: 120, free_above: null, days: "৩-৫ দিন", is_active: true },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">ডেলিভারি জোন</h1>
          <p className="text-muted-foreground">ডেলিভারি চার্জ পরিচালনা করুন</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          নতুন জোন
        </Button>
      </div>

      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>জোন</TableHead>
              <TableHead className="text-right">চার্জ</TableHead>
              <TableHead className="text-right">ফ্রি ডেলিভারি</TableHead>
              <TableHead className="text-center">সময়</TableHead>
              <TableHead className="text-center">সক্রিয়</TableHead>
              <TableHead className="text-right">অ্যাকশন</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {zones.map((zone) => (
              <TableRow key={zone.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Truck className="h-5 w-5 text-primary" />
                    </div>
                    <span className="font-medium">{zone.name_bn}</span>
                  </div>
                </TableCell>
                <TableCell className="text-right font-medium">
                  ৳{zone.charge}
                </TableCell>
                <TableCell className="text-right">
                  {zone.free_above ? `৳${zone.free_above}+` : "প্রযোজ্য নয়"}
                </TableCell>
                <TableCell className="text-center">{zone.days}</TableCell>
                <TableCell className="text-center">
                  <Switch checked={zone.is_active} />
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

export default AdminDeliveryZones;
