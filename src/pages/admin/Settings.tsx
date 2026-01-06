import { Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AdminSettings = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">সেটিংস</h1>
        <p className="text-muted-foreground">স্টোর সেটিংস পরিচালনা করুন</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Store Info */}
        <Card>
          <CardHeader>
            <CardTitle>স্টোর তথ্য</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="store-name">স্টোরের নাম</Label>
              <Input id="store-name" defaultValue="অর্গানিক স্টোর" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="tagline">ট্যাগলাইন</Label>
              <Input id="tagline" defaultValue="প্রকৃতির স্পর্শে স্বাস্থ্যকর জীবন" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">ফোন নম্বর</Label>
              <Input id="phone" defaultValue="+880 1XXX-XXXXXX" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">ইমেইল</Label>
              <Input id="email" type="email" defaultValue="info@organicstore.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">ঠিকানা</Label>
              <Textarea id="address" defaultValue="ঢাকা, বাংলাদেশ" />
            </div>
          </CardContent>
        </Card>

        {/* Notification Bar */}
        <Card>
          <CardHeader>
            <CardTitle>নোটিফিকেশন বার</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="notification-1">বার্তা ১</Label>
              <Input
                id="notification-1"
                defaultValue="🌿 সম্পূর্ণ অর্গানিক ও প্রাকৃতিক পণ্য - কোনো রাসায়নিক নেই!"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="notification-2">বার্তা ২</Label>
              <Input
                id="notification-2"
                defaultValue="🚚 ঢাকায় ৬০ টাকা ও ঢাকার বাইরে ১২০ টাকা ডেলিভারি চার্জ"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="notification-3">বার্তা ৩</Label>
              <Input
                id="notification-3"
                defaultValue="💯 ১০০% মানি ব্যাক গ্যারান্টি!"
              />
            </div>
          </CardContent>
        </Card>

        {/* Social Links */}
        <Card>
          <CardHeader>
            <CardTitle>সোশ্যাল লিংক</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="facebook">Facebook</Label>
              <Input id="facebook" placeholder="https://facebook.com/..." />
            </div>
            <div className="space-y-2">
              <Label htmlFor="instagram">Instagram</Label>
              <Input id="instagram" placeholder="https://instagram.com/..." />
            </div>
            <div className="space-y-2">
              <Label htmlFor="youtube">YouTube</Label>
              <Input id="youtube" placeholder="https://youtube.com/..." />
            </div>
          </CardContent>
        </Card>

        {/* Working Hours */}
        <Card>
          <CardHeader>
            <CardTitle>কাজের সময়</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="hours">সার্ভিস টাইম</Label>
              <Input id="hours" defaultValue="প্রতিদিন সকাল ৯টা - রাত ১০টা" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-end">
        <Button className="gap-2">
          <Save className="h-4 w-4" />
          সংরক্ষণ করুন
        </Button>
      </div>
    </div>
  );
};

export default AdminSettings;
