import {
  ShoppingCart,
  Package,
  Users,
  TrendingUp,
  ArrowUp,
  ArrowDown,
  Clock,
  AlertTriangle,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AdminDashboard = () => {
  // Demo stats data
  const stats = [
    {
      title: "আজকের অর্ডার",
      value: "১২",
      change: "+৩",
      changeType: "positive",
      icon: ShoppingCart,
    },
    {
      title: "মোট পণ্য",
      value: "৪৮",
      change: "+২",
      changeType: "positive",
      icon: Package,
    },
    {
      title: "মোট কাস্টমার",
      value: "২৫৬",
      change: "+১৫",
      changeType: "positive",
      icon: Users,
    },
    {
      title: "আজকের বিক্রি",
      value: "৳১৫,৮৫০",
      change: "+১২%",
      changeType: "positive",
      icon: TrendingUp,
    },
  ];

  const recentOrders = [
    { id: "ORD-1234", customer: "রহিম উদ্দিন", amount: 1850, status: "pending" },
    { id: "ORD-1235", customer: "ফাতেমা বেগম", amount: 750, status: "confirmed" },
    { id: "ORD-1236", customer: "করিম সাহেব", amount: 2200, status: "shipped" },
    { id: "ORD-1237", customer: "নাসরিন আক্তার", amount: 480, status: "delivered" },
    { id: "ORD-1238", customer: "আলী হোসেন", amount: 1100, status: "pending" },
  ];

  const lowStockProducts = [
    { name: "সুন্দরবনের খাঁটি মধু", stock: 5 },
    { name: "খাঁটি গাওয়া ঘি (৫০০গ্রাম)", stock: 3 },
    { name: "কালোজিরা তেল", stock: 8 },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "text-yellow-600 bg-yellow-100";
      case "confirmed":
        return "text-blue-600 bg-blue-100";
      case "shipped":
        return "text-purple-600 bg-purple-100";
      case "delivered":
        return "text-green-600 bg-green-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  const getStatusLabel = (status: string) => {
    const labels: Record<string, string> = {
      pending: "পেন্ডিং",
      confirmed: "কনফার্মড",
      shipped: "শিপড",
      delivered: "ডেলিভার্ড",
    };
    return labels[status] || status;
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">ড্যাশবোর্ড</h1>
        <p className="text-muted-foreground">স্বাগতম, অ্যাডমিন প্যানেলে</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold text-foreground mt-1">
                    {stat.value}
                  </p>
                  <div
                    className={`flex items-center gap-1 mt-1 text-sm ${
                      stat.changeType === "positive"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {stat.changeType === "positive" ? (
                      <ArrowUp className="h-3 w-3" />
                    ) : (
                      <ArrowDown className="h-3 w-3" />
                    )}
                    {stat.change}
                  </div>
                </div>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              সাম্প্রতিক অর্ডার
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div
                  key={order.id}
                  className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
                >
                  <div>
                    <p className="font-medium text-foreground">{order.id}</p>
                    <p className="text-sm text-muted-foreground">
                      {order.customer}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-foreground">
                      ৳{order.amount.toLocaleString()}
                    </p>
                    <span
                      className={`inline-block px-2 py-0.5 text-xs rounded-full ${getStatusColor(
                        order.status
                      )}`}
                    >
                      {getStatusLabel(order.status)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Low Stock Alert */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive">
              <AlertTriangle className="h-5 w-5" />
              স্টক কম আছে
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {lowStockProducts.map((product, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-destructive/5 rounded-lg border border-destructive/20"
                >
                  <p className="font-medium text-foreground">{product.name}</p>
                  <span className="text-sm font-bold text-destructive">
                    {product.stock}টি বাকি
                  </span>
                </div>
              ))}
              {lowStockProducts.length === 0 && (
                <p className="text-center text-muted-foreground py-4">
                  সব পণ্যের স্টক পর্যাপ্ত আছে
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
