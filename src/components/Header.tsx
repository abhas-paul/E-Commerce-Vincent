import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Search, ShoppingCart, User, Menu } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/hooks/useCart";
import { Link } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { toast } = useToast();
  const { getTotalItems } = useCart();
  const cartItemsCount = getTotalItems();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSignUp = () => {
    toast({
      title: "Welcome to Vincent! 🎯",
      description: "Sign up feature coming soon. Stay tuned for your growth journey!",
    });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2 glass" : "py-4 bg-background/30 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <h1 className="text-2xl font-bold gradient-text cursor-pointer">Vincent</h1>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="/#marketplace" className="text-foreground/80 hover:text-foreground transition-colors">
              Marketplace
            </a>
            <Link to="/products" className="text-foreground/80 hover:text-foreground transition-colors">
              Explore Products
            </Link>
            <Link to="/testimonials" className="text-foreground/80 hover:text-foreground transition-colors">
              Testimonials
            </Link>
            <a href="/products" className="text-foreground/80 hover:text-foreground transition-colors">
              Collections
            </a>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative"
              onClick={() => toast({
                title: "Shopping Cart",
                description: "Cart feature coming soon! Your items are saved.",
              })}
            >
              <ShoppingCart className="h-5 w-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-bold">
                  {cartItemsCount}
                </span>
              )}
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <User className="h-5 w-5" />
            </Button>
            <Button onClick={handleSignUp} className="hidden md:flex gradient-primary text-white border-0">
              Sign Up
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
