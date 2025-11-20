import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MessageCircle, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CustomerSupport = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent! 📧",
      description: "Our team will get back to you within 24 hours.",
    });
  };

  return (
    <section className="py-24 relative spotlight">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Need Help? <span className="gradient-text">We're Here for You</span>
            </h2>
            <p className="text-xl text-foreground/70">
              Get in touch with our support team or send us a message
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="glass border-2 border-border/50 rounded-2xl p-8 space-y-6 glow">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full gradient-primary flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email Us</h4>
                    <p className="text-foreground/70 text-sm">support@vincent.com</p>
                    <p className="text-foreground/70 text-sm">sales@vincent.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full gradient-secondary flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Call Us</h4>
                    <p className="text-foreground/70 text-sm">+1 (555) 123-4567</p>
                    <p className="text-foreground/70 text-sm">Mon-Fri: 9AM - 6PM EST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full gradient-accent flex-shrink-0">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Business Hours</h4>
                    <p className="text-foreground/70 text-sm">Monday - Friday: 9AM - 6PM</p>
                    <p className="text-foreground/70 text-sm">Weekend: 10AM - 4PM EST</p>
                  </div>
                </div>
              </div>

              <Button className="w-full gradient-primary text-white border-0 group mt-6">
                <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Start Live Chat
              </Button>
            </div>

            {/* Contact Form */}
            <div className="glass border-2 border-border/50 rounded-2xl p-8 glow">
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Your Name"
                    className="glass border-border/50"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className="glass border-border/50"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    placeholder="Subject"
                    className="glass border-border/50"
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    className="glass border-border/50 min-h-[120px]"
                    required
                  />
                </div>
                <Button type="submit" className="w-full gradient-primary text-white border-0 glow-hover group">
                  Send Message
                  <Mail className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerSupport;
