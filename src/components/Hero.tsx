import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
const Hero = () => {
  const words = ["Focus", "Calm", "Growth", "Balance", "Clarity"];
  const [currentWord, setCurrentWord] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord(prev => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden spotlight">
    <div className="container mx-auto px-4 text-center z-10">
      <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full">
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="text-sm text-foreground/80">AI-Powered Growth Tools</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Your Digital Market for{" "}
          <span className="gradient-text inline-block min-w-[200px]">
            {words[currentWord]}
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-xl md:text-2xl text-foreground/70 max-w-2xl mx-auto">
          Unlock your potential with digital products that help you focus, grow, and thrive. Upgrade your daily routine with curated tools crafted to elevate your mindset and accelerate your success.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <a href="/products">
            <Button size="lg" className="gradient-primary text-white border-0 glow-hover group">Explore Products<ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
          <a href="/testimonials">
            <Button size="lg" variant="outline" className="glass border-border/50 hover:border-primary/50">Testimonials</Button>
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
          <div className="space-y-1">
            <div className="text-3xl font-bold gradient-text">500+</div>
            <div className="text-sm text-foreground/60">Digital Products  </div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl font-bold gradient-text">50K+</div>
            <div className="text-sm text-foreground/60">Happy Customers</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl font-bold gradient-text">4.9★</div>
            <div className="text-sm text-foreground/60">Average Rating</div>
          </div>
        </div>
      </div>
    </div>

    {/* Background gradient orbs */}
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-glow-pulse" />
    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-glow-pulse" style={{
      animationDelay: "1s"
    }} />
  </section>;
};
export default Hero;