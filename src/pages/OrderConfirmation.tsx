import { Link, useParams } from "react-router-dom";
import { CheckCircle, Package, Download, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import TopNotificationBar from "@/components/layout/TopNotificationBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const OrderConfirmation = () => {
  const { orderNumber } = useParams();

  return (
    <div className="min-h-screen flex flex-col">
      <TopNotificationBar />
      <Header cartCount={0} />

      <main className="flex-1 py-12">
        <div className="container max-w-2xl">
          <div className="bg-card rounded-2xl p-8 md:p-12 border border-border text-center">
            {/* Success Icon */}
            <div className="w-20 h-20 mx-auto mb-6 rounded-full gradient-organic flex items-center justify-center">
              <CheckCircle className="h-10 w-10 text-primary-foreground" />
            </div>

            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              অর্ডার সফল হয়েছে! 🎉
            </h1>
            <p className="text-muted-foreground mb-6">
              আপনার অর্ডার আমরা পেয়েছি এবং শীঘ্রই প্রসেস করা হবে।
            </p>

            {/* Order Number */}
            <div className="bg-muted rounded-xl p-4 mb-6">
              <p className="text-sm text-muted-foreground mb-1">অর্ডার নম্বর</p>
              <p className="text-xl font-bold text-primary">{orderNumber}</p>
            </div>

            {/* Order Status */}
            <div className="bg-primary/5 rounded-xl p-6 mb-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Package className="h-5 w-5 text-primary" />
                <span className="font-medium text-foreground">অর্ডার স্ট্যাটাস</span>
              </div>
              <div className="flex items-center justify-between max-w-xs mx-auto">
                {["অর্ডার করা হয়েছে", "প্রসেসিং", "শিপ করা হয়েছে", "ডেলিভারি"].map((step, idx) => (
                  <div key={step} className="flex flex-col items-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                        idx === 0
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {idx + 1}
                    </div>
                    <span className="text-xs mt-1 text-muted-foreground">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Info */}
            <div className="text-sm text-muted-foreground mb-8 space-y-2">
              <p>📧 অর্ডারের আপডেট আপনার ফোনে SMS এর মাধ্যমে জানানো হবে।</p>
              <p>📞 যেকোনো সমস্যায় কল করুন: +880 1XXX-XXXXXX</p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="outline" className="gap-2">
                <Download className="h-4 w-4" />
                ইনভয়েস ডাউনলোড
              </Button>
              <Link to="/products">
                <Button className="gap-2 w-full sm:w-auto">
                  আরো কেনাকাটা করুন
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OrderConfirmation;
