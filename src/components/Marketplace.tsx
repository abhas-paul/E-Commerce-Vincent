import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Filter, Calendar, Music, BookOpen, Heart, CheckSquare, ShoppingCart, Star } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { useToast } from "@/hooks/use-toast";

const categories = [
  { id: "all", label: "All Products", icon: null },
  { id: "electronics", label: "Electronics", icon: Calendar },
  { id: "food", label: "Food & Beverages", icon: Music },
  { id: "home", label: "Home & Kitchen", icon: BookOpen },
  { id: "accessories", label: "Accessories", icon: Heart },
  { id: "gaming", label: "Gaming", icon: CheckSquare },
];

const products = [
  { id: "1", title: "iPhone 15 Pro 128GB", category: "electronics", price: 999, rating: 4.9, description: "Latest iPhone with titanium design and A17 Pro chip", sales: 1240, image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500" },
  { id: "2", title: "Samsung Galaxy S24 256GB", category: "electronics", price: 899, rating: 4.8, description: "Flagship Android phone with AI features", sales: 2100, image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500" },
  { id: "3", title: "Haagen-Dazs Ice Cream 8-Pack", category: "food", price: 32, rating: 4.7, description: "Premium ice cream in assorted flavors", sales: 890, image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500" },
  { id: "4", title: "Nespresso Coffee Machine", category: "home", price: 199, rating: 4.9, description: "Premium espresso maker with milk frother", sales: 3200, image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=500" },
  { id: "5", title: "Sony WH-1000XM5 Headphones", category: "electronics", price: 399, rating: 4.8, description: "Best-in-class noise cancelling headphones", sales: 1560, image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500" },
  { id: "6", title: "Dell XPS 15 Laptop", category: "electronics", price: 1799, rating: 4.8, description: "Premium laptop with Intel i7 and RTX graphics", sales: 720, image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500" },
  { id: "7", title: "Dyson V15 Vacuum Cleaner", category: "home", price: 649, rating: 4.9, description: "Powerful cordless vacuum with laser detection", sales: 1890, image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=500" },
  { id: "8", title: "Apple Watch Ultra 2", category: "accessories", price: 799, rating: 4.8, description: "Rugged smartwatch with advanced fitness tracking", sales: 980, image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500" },
  { id: "9", title: "PlayStation 5 Slim", category: "gaming", price: 449, rating: 4.9, description: "Next-gen gaming console with 1TB storage", sales: 1450, image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=500" },
  { id: "10", title: "NVIDIA RTX 4080 GPU", category: "electronics", price: 1199, rating: 4.9, description: "High-performance graphics card for gaming and AI", sales: 2340, image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=500" },
  { id: "11", title: "Bose QuietComfort Earbuds", category: "accessories", price: 299, rating: 4.7, description: "Premium wireless earbuds with active noise cancellation", sales: 1670, image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500" },
  { id: "12", title: "KitchenAid Stand Mixer", category: "home", price: 449, rating: 4.8, description: "Professional-grade mixer for baking enthusiasts", sales: 1120, image: "https://images.unsplash.com/photo-1578643463396-0997cb5328c1?w=500" },
];

const Marketplace = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (product: typeof products[0]) => {
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

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="marketplace" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Explore Our <span className="gradient-text">Marketplace</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Discover digital tools designed to elevate your daily routine
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-4xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-foreground/40" />
            <Input
              placeholder="Search products..."
              className="pl-10 glass border-border/50"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline" className="glass border-border/50">
            <Filter className="mr-2 h-5 w-5" />
            Filters
          </Button>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                variant="outline"
                className={`glass border transition-all ${
                  selectedCategory === category.id
                    ? "border-primary bg-primary/10"
                    : "border-border/50 hover:border-primary/50"
                }`}
              >
                {Icon && <Icon className="mr-2 h-4 w-4" />}
                {category.label}
              </Button>
            );
          })}
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              className="glass border-border/50 overflow-hidden hover:border-primary/50 transition-all group hover-scale"
            >
              <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <div className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm px-2 py-1 rounded-full text-xs">
                  {product.sales.toLocaleString()} sales
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-foreground/60 text-sm">{product.description}</p>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold gradient-text">${product.price}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                      <span className="text-sm text-foreground/70 font-medium">{product.rating}</span>
                      <span className="text-xs text-foreground/50 ml-1">({product.sales})</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      className="gradient-bg"
                      onClick={() => handleAddToCart(product)}
                    >
                      <ShoppingCart className="h-4 w-4 mr-1" />
                      Add
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-foreground/60">No products found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Marketplace;
