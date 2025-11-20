import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star, TrendingUp } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const allProducts = [
  { id: "prod-1", title: "iPhone 15 Pro Max 256GB", category: "Smartphones", price: 1199, rating: 4.9, description: "Latest iPhone with titanium design, A17 Pro chip, and advanced camera system", image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500", sales: 3240 },
  { id: "prod-2", title: "MacBook Pro 16-inch M3", category: "Laptops", price: 2499, rating: 4.9, description: "Ultimate laptop for productivity with M3 chip, 18GB RAM, 512GB SSD", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500", sales: 2547 },
  { id: "prod-3", title: "Samsung Galaxy S24 Ultra", category: "Smartphones", price: 1299, rating: 4.8, description: "Flagship Android phone with S Pen, 12GB RAM, 256GB storage", image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500", sales: 2893 },
  { id: "prod-4", title: "iPad Pro 12.9-inch M2", category: "Tablets", price: 1099, rating: 4.9, description: "Powerful tablet with M2 chip, perfect for creativity and productivity", image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500", sales: 1654 },
  { id: "prod-5", title: "Sony WH-1000XM5", category: "Audio", price: 399, rating: 4.9, description: "Industry-leading noise cancelling headphones with premium sound", image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500", sales: 4120 },
  { id: "prod-6", title: "Dell XPS 15 Laptop", category: "Laptops", price: 1799, rating: 4.8, description: "Premium laptop with Intel i7, RTX graphics, and stunning display", image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500", sales: 1876 },
  { id: "prod-7", title: "Apple Watch Ultra 2", category: "Wearables", price: 799, rating: 4.8, description: "Rugged smartwatch with advanced fitness and health tracking", image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500", sales: 2234 },
  { id: "prod-8", title: "NVIDIA RTX 4090", category: "Components", price: 1899, rating: 4.9, description: "Ultimate GPU for gaming, AI, and creative work with 24GB VRAM", image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=500", sales: 1567 },
  { id: "prod-9", title: "PlayStation 5 Slim", category: "Gaming", price: 449, rating: 4.9, description: "Next-gen gaming console with 1TB storage and DualSense controller", image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=500", sales: 5432 },
  { id: "prod-10", title: "AirPods Pro 2nd Gen", category: "Audio", price: 249, rating: 4.8, description: "Premium wireless earbuds with active noise cancellation", image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=500", sales: 6789 },
  { id: "prod-11", title: "Canon EOS R6 Mark II", category: "Cameras", price: 2499, rating: 4.9, description: "Professional mirrorless camera with advanced autofocus", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500", sales: 892 },
  { id: "prod-12", title: "Samsung 55\" 4K Smart TV", category: "TVs", price: 599, rating: 4.7, description: "Crystal UHD television with HDR and smart features", image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500", sales: 3456 },
  { id: "prod-13", title: "AMD Ryzen 9 7950X", category: "Components", price: 549, rating: 4.8, description: "16-core processor for extreme performance and multitasking", image: "https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=500", sales: 1234 },
  { id: "prod-14", title: "Bose QuietComfort Earbuds", category: "Audio", price: 299, rating: 4.7, description: "Premium wireless earbuds with world-class noise cancellation", image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500", sales: 2876 },
  { id: "prod-15", title: "Microsoft Surface Pro 9", category: "Tablets", price: 999, rating: 4.7, description: "Versatile 2-in-1 tablet with Intel i5 and Windows 11", image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=500", sales: 1543 },
  { id: "prod-16", title: "Dyson V15 Detect", category: "Home", price: 649, rating: 4.9, description: "Powerful cordless vacuum with laser dust detection", image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=500", sales: 2109 },
  { id: "prod-17", title: "KitchenAid Stand Mixer", category: "Home", price: 449, rating: 4.8, description: "Professional-grade mixer for baking enthusiasts", image: "https://images.unsplash.com/photo-1578643463396-0997cb5328c1?w=500", sales: 1876 },
  { id: "prod-18", title: "Nespresso Vertuo", category: "Home", price: 199, rating: 4.7, description: "Premium coffee machine with milk frother included", image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=500", sales: 3245 },
  { id: "prod-19", title: "Instant Pot Duo Plus", category: "Home", price: 119, rating: 4.8, description: "9-in-1 electric pressure cooker for easy meal prep", image: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=500", sales: 4321 },
  { id: "prod-20", title: "Dell UltraSharp 27\" Monitor", category: "Monitors", price: 599, rating: 4.8, description: "4K USB-C monitor with HDR support for professionals", image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500", sales: 1987 }
];

const categories = ["All", "Smartphones", "Laptops", "Audio", "Gaming", "Home", "Cameras", "Components"];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (product: typeof allProducts[0]) => {
    addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      category: product.category,
      image: product.image,
    });
    toast({
      title: "Added to cart! 🛒",
      description: `${product.title} has been added to your cart.`,
    });
  };

  const filteredProducts = selectedCategory === "All" 
    ? allProducts 
    : allProducts.filter(p => p.category === selectedCategory);

  return (
    <>
      <Header />
      <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 relative spotlight">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold">
              Explore Our <span className="gradient-text">Products</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Premium electronics and lifestyle products at unbeatable prices
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`transition-all ${
                  selectedCategory === category
                    ? "gradient-primary text-white border-0 glow"
                    : "glass border-border/50 hover:border-primary/50"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <Card
                key={product.id}
                className="glass border-border/50 hover:border-primary/50 transition-all glow-hover overflow-hidden group animate-fade-in"
                style={{ animationDelay: `${index * 0.03}s` }}
              >
                {/* Product Image */}
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute top-3 right-3 glass px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                    <TrendingUp className="h-3 w-3" />
                    {product.sales.toLocaleString()}
                  </div>
                  <div className="absolute bottom-3 left-3 glass px-2 py-1 rounded-full text-xs">
                    {product.category}
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-4 space-y-3">
                  <div>
                    <h3 className="font-semibold mb-1 line-clamp-2 group-hover:text-primary transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-sm text-foreground/60 line-clamp-2">
                      {product.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-1 text-sm">
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    <span className="font-medium">{product.rating}</span>
                    <span className="text-foreground/40">({product.sales})</span>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-border/30">
                    <span className="text-xl font-bold gradient-text">${product.price}</span>
                    <Button
                      onClick={() => handleAddToCart(product)}
                      size="sm"
                      className="gradient-primary text-white border-0 group/btn"
                    >
                      <ShoppingCart className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                      Add
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* No Results */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-foreground/60">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>
      </div>
      <Footer />
    </>
  );
};

export default Products;
