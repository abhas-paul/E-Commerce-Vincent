import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Tech Entrepreneur",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    rating: 5,
    text: "The MacBook Pro I purchased has completely transformed my workflow. Fast shipping and excellent customer service!"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Software Developer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    rating: 5,
    text: "Amazing selection of electronics! The RTX 4090 arrived perfectly packaged and works flawlessly. Highly recommend!"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Graphic Designer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
    rating: 5,
    text: "The iPad Pro with Apple Pencil is a game-changer for my design work. Best purchase I've made this year!"
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Content Creator",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
    rating: 5,
    text: "The Canon camera quality is outstanding! Perfect for my YouTube videos. Customer support was incredibly helpful."
  },
  {
    id: 5,
    name: "Lisa Wang",
    role: "Marketing Manager",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
    rating: 5,
    text: "Love my new AirPods Pro! The noise cancellation is incredible for my daily commute. Worth every penny!"
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Gaming Enthusiast",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150",
    rating: 5,
    text: "The PlayStation 5 exceeded all expectations! Lightning-fast delivery and the gaming experience is phenomenal."
  },
  {
    id: 7,
    name: "Amanda Foster",
    role: "Fitness Coach",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150",
    rating: 5,
    text: "My Apple Watch Series 9 helps me track my fitness goals perfectly. The health features are incredibly accurate!"
  },
  {
    id: 8,
    name: "Robert Martinez",
    role: "Photographer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
    rating: 5,
    text: "The Dell XPS laptop is powerful and portable. Perfect for editing photos on the go. Fantastic build quality!"
  },
  {
    id: 9,
    name: "Jennifer Lee",
    role: "Food Blogger",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150",
    rating: 5,
    text: "The KitchenAid mixer has revolutionized my baking! Sturdy, reliable, and makes everything so much easier."
  },
  {
    id: 10,
    name: "Christopher Brown",
    role: "Music Producer",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150",
    rating: 5,
    text: "Sony WH-1000XM5 headphones are a must-have for any audio professional. Crystal clear sound quality!"
  },
  {
    id: 11,
    name: "Michelle Taylor",
    role: "Interior Designer",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150",
    rating: 5,
    text: "The Samsung 4K Smart TV looks stunning in my living room. Picture quality is absolutely breathtaking!"
  },
  {
    id: 12,
    name: "Daniel Kim",
    role: "Data Scientist",
    image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=150",
    rating: 5,
    text: "The AMD Ryzen processor delivers incredible performance for my machine learning projects. Great value!"
  },
  {
    id: 13,
    name: "Sophia Anderson",
    role: "Fashion Influencer",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150",
    rating: 5,
    text: "The iPhone 15 Pro Max camera is perfect for my Instagram content. Colors are vibrant and true to life!"
  },
  {
    id: 14,
    name: "Ryan O'Connor",
    role: "Freelance Writer",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150",
    rating: 5,
    text: "The Kindle Paperwhite is my favorite reading companion. Battery lasts forever and the screen is easy on the eyes!"
  },
  {
    id: 15,
    name: "Isabella Garcia",
    role: "Business Analyst",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150",
    rating: 5,
    text: "Samsung Galaxy S24 Ultra is the best Android phone I've owned. The S Pen is incredibly useful for work!"
  },
  {
    id: 16,
    name: "Kevin Patel",
    role: "Web Developer",
    image: "https://images.unsplash.com/photo-1522556189639-b150ed9c4330?w=150",
    rating: 5,
    text: "The Dell UltraSharp monitor has improved my productivity tenfold. Colors are accurate and screen is huge!"
  },
  {
    id: 17,
    name: "Olivia Scott",
    role: "Yoga Instructor",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150",
    rating: 5,
    text: "Love the Bose earbuds for my yoga sessions! Comfortable fit and amazing sound quality during meditation."
  },
  {
    id: 18,
    name: "Marcus Johnson",
    role: "IT Consultant",
    image: "https://images.unsplash.com/photo-1507081323647-4d250478b919?w=150",
    rating: 5,
    text: "The Dyson vacuum is worth every cent! Powerful suction and the battery life is impressive. Very satisfied!"
  },
  {
    id: 19,
    name: "Emma Thompson",
    role: "Chef",
    image: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=150",
    rating: 5,
    text: "The Instant Pot has saved me so much time in the kitchen! Makes meal prep effortless. Best kitchen gadget!"
  },
  {
    id: 20,
    name: "Tyler Robinson",
    role: "Video Editor",
    image: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=150",
    rating: 5,
    text: "The MacBook Air M2 handles 4K video editing smoothly. Lightweight, powerful, and the battery life is unreal!"
  }
];

const Testimonials = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 relative spotlight">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold">
              What Our <span className="gradient-text">Customers Say</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Real stories from real customers who love shopping with us
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.id}
                className="glass border-border/50 hover:border-primary/50 transition-all glow-hover p-6 space-y-4 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Quote Icon */}
                <div className="flex justify-between items-start">
                  <Quote className="h-8 w-8 text-primary/30" />
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-foreground/80 italic">"{testimonial.text}"</p>

                {/* Customer Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-border/30">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover ring-2 ring-primary/20"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-foreground/60">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center space-y-2 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="text-4xl font-bold gradient-text">50K+</div>
              <div className="text-foreground/60">Happy Customers</div>
            </div>
            <div className="text-center space-y-2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-4xl font-bold gradient-text">4.9</div>
              <div className="text-foreground/60">Average Rating</div>
            </div>
            <div className="text-center space-y-2 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="text-4xl font-bold gradient-text">100%</div>
              <div className="text-foreground/60">Satisfaction Rate</div>
            </div>
            <div className="text-center space-y-2 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="text-4xl font-bold gradient-text">24/7</div>
              <div className="text-foreground/60">Support Available</div>
            </div>
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </>
  );
};

export default Testimonials;
