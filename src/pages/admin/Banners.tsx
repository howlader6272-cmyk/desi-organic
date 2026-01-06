import { Plus, Edit, Trash2, Image as ImageIcon, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";

const AdminBanners = () => {
  // Demo banners
  const banners = [
    {
      id: "1",
      title_bn: "১০০% খাঁটি অর্গানিক পণ্য",
      position: "hero",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=300&h=150&fit=crop",
      link: "/products",
      is_active: true,
    },
    {
      id: "2",
      title_bn: "মধু কালেকশন",
      position: "promo",
      image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=300&h=150&fit=crop",
      link: "/category/honey",
      is_active: true,
    },
    {
      id: "3",
      title_bn: "মসলা কালেকশন",
      position: "promo",
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=300&h=150&fit=crop",
      link: "/category/spices",
      is_active: false,
    },
  ];

  const getPositionBadge = (position: string) => {
    const config: Record<string, string> = {
      hero: "হিরো ব্যানার",
      promo: "প্রমো ব্যানার",
    };
    return <Badge variant="secondary">{config[position] || position}</Badge>;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">ব্যানার</h1>
          <p className="text-muted-foreground">হোমপেজ ব্যানার পরিচালনা করুন</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          নতুন ব্যানার
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {banners.map((banner) => (
          <div
            key={banner.id}
            className="bg-card rounded-xl border border-border overflow-hidden"
          >
            <div className="aspect-video relative bg-muted">
              {banner.image ? (
                <img
                  src={banner.image}
                  alt={banner.title_bn}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <ImageIcon className="h-12 w-12 text-muted-foreground" />
                </div>
              )}
              {!banner.is_active && (
                <div className="absolute inset-0 bg-foreground/50 flex items-center justify-center">
                  <span className="text-white font-bold">নিষ্ক্রিয়</span>
                </div>
              )}
            </div>
            <div className="p-4 space-y-3">
              <div className="flex items-start justify-between">
                <h3 className="font-medium text-foreground">{banner.title_bn}</h3>
                {getPositionBadge(banner.position)}
              </div>
              {banner.link && (
                <a
                  href={banner.link}
                  className="flex items-center gap-1 text-sm text-primary hover:underline"
                >
                  <ExternalLink className="h-3 w-3" />
                  {banner.link}
                </a>
              )}
              <div className="flex items-center justify-between pt-2 border-t border-border">
                <div className="flex items-center gap-2">
                  <Switch checked={banner.is_active} />
                  <span className="text-sm text-muted-foreground">সক্রিয়</span>
                </div>
                <div className="flex items-center gap-1">
                  <Button variant="ghost" size="icon">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-destructive">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminBanners;
