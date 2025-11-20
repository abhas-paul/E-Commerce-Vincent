import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Sparkles, ShoppingCart } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { useToast } from "@/hooks/use-toast";
const moods = [{
  id: "focus",
  label: "Focus",
  icon: Heart,
  color: "primary"
}, {
  id: "calm",
  label: "Calm",
  icon: Heart,
  color: "secondary"
}, {
  id: "creative",
  label: "Creative",
  icon: Heart,
  color: "accent"
}, {
  id: "energized",
  label: "Energized",
  icon: Heart,
  color: "primary"
}, {
  id: "growth",
  label: "Growth",
  icon: Heart,
  color: "accent"
}];
const products = {
  focus: [{
    id: "focus-1",
    title: "MacBook Pro 16-inch M3",
    description: "Ultimate laptop for productivity with M3 chip, 18GB RAM, 512GB SSD",
    price: 2499,
    rating: 4.9,
    category: "electronics",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500"
  }, {
    id: "focus-2",
    title: "Dell UltraSharp 27 Monitor",
    description: "4K USB-C monitor with HDR support, perfect for multitasking",
    price: 599,
    rating: 4.8,
    category: "electronics",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500"
  }, {
    id: "focus-3",
    title: "Sony WH-1000XM5 Headphones",
    description: "Industry-leading noise cancellation for distraction-free work",
    price: 399,
    rating: 4.9,
    category: "electronics",
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500"
  }],
  calm: [{
    id: "calm-1",
    title: "Ben & Jerry's Ice Cream Variety Pack",
    description: "12 pints of premium ice cream in assorted flavors",
    price: 48,
    rating: 4.9,
    category: "food",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500"
  }, {
    id: "calm-2",
    title: "Kindle Paperwhite 11th Gen",
    description: "Waterproof e-reader with adjustable warm light and 8GB storage",
    price: 139,
    rating: 4.8,
    category: "electronics",
    image: "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=500"
  }, {
    id: "calm-3",
    title: "Starbucks Coffee Gift Set",
    description: "Premium ground coffee collection with 6 different roasts",
    price: 35,
    rating: 4.7,
    category: "food",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500"
  }],
  creative: [{
    id: "creative-1",
    title: "iPad Pro 12.9-inch with Apple Pencil",
    description: "M2 chip, 128GB, includes Apple Pencil for digital creativity",
    price: 1299,
    rating: 4.9,
    category: "electronics",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500"
  }, {
    id: "creative-2",
    title: "Canon EOS R6 Camera Kit",
    description: "Full-frame mirrorless camera with 24-105mm lens",
    price: 2899,
    rating: 4.8,
    category: "electronics",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500"
  }, {
    id: "creative-3",
    title: "Wacom Cintiq Drawing Tablet",
    description: "22-inch pen display for professional digital art",
    price: 1199,
    rating: 4.9,
    category: "electronics",
    image: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=500"
  }],
  energized: [{
    id: "energized-1",
    title: "iPhone 15 Pro Max 256GB",
    description: "Latest iPhone with titanium design, A17 Pro chip, and advanced camera",
    price: 1199,
    rating: 4.9,
    category: "electronics",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500"
  }, {
    id: "energized-2",
    title: "Samsung Galaxy S24 Ultra",
    description: "Flagship Android phone with S Pen, 12GB RAM, 256GB storage",
    price: 1299,
    rating: 4.8,
    category: "electronics",
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500"
  }, {
    id: "energized-3",
    title: "Apple Watch Series 9",
    description: "Advanced health tracking, fitness features, GPS + Cellular",
    price: 499,
    rating: 4.8,
    category: "electronics",
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500"
  }],
  growth: [{
    id: "growth-1",
    title: "NVIDIA RTX 4090 Graphics Card",
    description: "Ultimate GPU for gaming, AI, and creative work with 24GB VRAM",
    price: 1899,
    rating: 4.9,
    category: "electronics",
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=500"
  }, {
    id: "growth-2",
    title: "AMD Ryzen 9 7950X CPU",
    description: "16-core processor for extreme performance and multitasking",
    price: 549,
    rating: 4.8,
    category: "electronics",
    image: "https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=500"
  }, {
    id: "growth-3",
    title: "PlayStation 5 Console",
    description: "Next-gen gaming console with 1TB SSD and DualSense controller",
    price: 499,
    rating: 4.9,
    category: "electronics",
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=500"
  }]
};
const AIMoodRecommender = () => {
  const [selectedMood, setSelectedMood] = useState("focus");
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (product: typeof products.focus[0]) => {
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
  return <section className="py-24 relative spotlight">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Let Our <span className="gradient-text">AI Guide You</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Choose your mood to see recommended products tailored to your current needs
          </p>
        </div>

        {/* Mood Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {moods.map(mood => {
          const Icon = mood.icon;
          return <Button key={mood.id} onClick={() => setSelectedMood(mood.id)} className={`glass border-2 transition-all ${selectedMood === mood.id ? "border-primary bg-primary/10 glow" : "border-border/50 hover:border-primary/50"}`} size="lg">
                <Icon className="mr-2 h-5 w-5" />
                {mood.label}
              </Button>;
        })}
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {products[selectedMood as keyof typeof products].map((product, index) => {
            const MoodIcon = moods.find(m => m.id === selectedMood)?.icon || Sparkles;
            return (
              <Card 
                key={product.id} 
                className="glass border-border/50 hover:border-primary/50 transition-all glow-hover p-6 space-y-4 animate-fade-in" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-48 bg-gradient-primary rounded-lg flex items-center justify-center relative overflow-hidden group">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
                  <MoodIcon className="h-16 w-16 text-white relative z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                  <p className="text-foreground/60 text-sm mb-4 line-clamp-2">{product.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold gradient-text">${product.price}</span>
                    <span className="text-sm text-foreground/60">★ {product.rating}</span>
                  </div>
                </div>
                <Button 
                  onClick={() => handleAddToCart(product)}
                  className="w-full gradient-primary text-white border-0 group"
                >
                  <ShoppingCart className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  Add to Cart
                </Button>
              </Card>
            );
          })}
        </div>
      </div>
    </section>;
};
export default AIMoodRecommender;