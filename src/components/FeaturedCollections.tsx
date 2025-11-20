import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ShoppingCart, Zap, Award, Crown, TrendingUp } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { useToast } from "@/hooks/use-toast";

const sponsoredProducts = [
  {
    id: "sponsored-1",
    title: "MacBook Air M2 13-inch",
    description: "Lightweight powerhouse with M2 chip, 8GB RAM, 256GB SSD, perfect for everyday computing and portability.",
    icon: Star,
    price: 1099,
    originalPrice: 1199,
    badge: "BEST SELLER",
    badgeColor: "accent",
    rating: 4.9,
    sales: 2547,
    category: "electronics",
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500"
  },
  {
    id: "sponsored-2",
    title: "AirPods Pro 2nd Generation",
    description: "Premium wireless earbuds with active noise cancellation, spatial audio, and up to 6 hours battery life.",
    icon: Zap,
    price: 249,
    originalPrice: 299,
    badge: "SPONSORED",
    badgeColor: "primary",
    rating: 4.8,
    sales: 1893,
    category: "electronics",
    image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=500"
  },
  {
    id: "sponsored-3",
    title: "Samsung 55-inch 4K Smart TV",
    description: "Crystal UHD television with HDR, smart features, and gaming mode for immersive entertainment experience.",
    icon: Award,
    price: 599,
    originalPrice: 799,
    badge: "LIMITED OFFER",
    badgeColor: "secondary",
    rating: 4.9,
    sales: 1654,
    category: "electronics",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500"
  },
  {
    id: "sponsored-4",
    title: "Instant Pot Duo Plus 8-Quart",
    description: "9-in-1 electric pressure cooker with sterilizer, yogurt maker, and slow cooker for easy meal preparation.",
    icon: TrendingUp,
    price: 119,
    originalPrice: 159,
    badge: "FEATURED",
    badgeColor: "accent",
    rating: 4.7,
    sales: 1234,
    category: "home",
    image: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=500"
  },
];

const SponsoredProducts = () => {
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (product: typeof sponsoredProducts[0]) => {
    addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      category: product.category,
    });
    toast({
      title: "Added to cart! 🛒",
      description: `${product.title} has been added to your cart.`,
    });
  };

  return (
    <section id="collections" className="py-24 relative spotlight">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured <span className="gradient-text">Premium Products</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Handpicked premium products to accelerate your transformation journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {sponsoredProducts.map((product, index) => {
            const Icon = product.icon;
            const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
            
            return (
              <Card
                key={product.id}
                className="glass border-2 border-border/50 hover:border-primary/50 transition-all glow-hover p-8 space-y-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Header with Image */}
                <div className="flex items-start gap-6">
                  <div className="h-24 w-24 rounded-xl overflow-hidden flex-shrink-0 group-hover:scale-105 transition-transform relative">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className={`inline-flex items-center gap-2 glass px-3 py-1 rounded-full text-sm bg-${product.badgeColor}/10`}>
                      <Crown className="h-4 w-4" />
                      <span className="font-semibold">{product.badge}</span>
                    </div>
                    <h3 className="text-2xl font-bold">{product.title}</h3>
                  </div>
                </div>

                {/* Content */}
                <p className="text-foreground/70">{product.description}</p>

                {/* Details */}
                <div className="flex items-center justify-between pt-4 border-t border-border/30">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-sm text-foreground/60">
                      <span>★ {product.rating}</span>
                      <span>•</span>
                      <span>{product.sales.toLocaleString()} sold</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-3xl font-bold gradient-text">${product.price}</span>
                      <span className="text-sm text-foreground/40 line-through">${product.originalPrice}</span>
                      <span className="text-sm text-accent font-semibold">Save {discount}%</span>
                    </div>
                  </div>
                  <Button 
                    onClick={() => handleAddToCart(product)}
                    className="gradient-primary text-white border-0 group"
                  >
                    <ShoppingCart className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    Add to Cart
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SponsoredProducts;
