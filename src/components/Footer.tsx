import { Instagram, Twitter, Facebook, Linkedin, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="glass border-t border-border/30 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">Vincent</h3>
            <p className="text-foreground/60 text-sm">
              Products for a Better You
            </p>
          </div>

          {/* Products */}
          <div className="space-y-3">
            <h4 className="font-semibold">Products</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li><a href="#" className="hover:text-foreground transition-colors">Planners</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Soundscapes</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Journals</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Trackers</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-3">
            <h4 className="font-semibold">Company</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li><a href="#" className="hover:text-foreground transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-3">
            <h4 className="font-semibold">Support</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li><a href="#" className="hover:text-foreground transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Refunds</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-border/30">
          <p className="text-sm text-foreground/60">
            Developed by Abhas Paul
          </p>
          <p className="text-sm text-foreground/60">
            © 2025 Vincent. Made with <Heart className="inline h-4 w-4 text-accent fill-accent" /> for growth-minded individuals.
          </p>
          

          {/* Social Links */}
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:border-primary/50 transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:border-primary/50 transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:border-primary/50 transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:border-primary/50 transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
