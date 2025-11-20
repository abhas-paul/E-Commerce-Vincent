import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Gift, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const rewards = [
  {
    icon: Trophy,
    title: "Daily Deal Challenge",
    content: "Buy any 2 products today and get 10% off your next purchase automatically applied at checkout.",
    action: "Start Shopping",
    badge: "10% OFF",
    progress: "Valid for 24 hours"
  },
  {
    icon: Gift,
    title: "Cashback Quest",
    content: "Spend $50 or more this week and earn $5 cashback credit to use on your next order.",
    action: "Track Progress",
    badge: "$5 BACK",
    progress: "$12 of $50 spent"
  },
  {
    icon: Zap,
    title: "Loyalty Rewards",
    content: "Complete 3 purchases this month to unlock VIP status with exclusive discounts and early access.",
    action: "View Benefits",
    badge: "VIP STATUS",
    progress: "1 of 3 complete"
  },
];

const ShoppingRewards = () => {
  const { toast } = useToast();

  const handleRewardClick = (rewardTitle: string) => {
    toast({
      title: "Reward Activated! 🎁",
      description: `${rewardTitle} is now active. Start shopping to earn your reward!`,
    });
  };

  return (
    <section id="tools" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Daily Rewards & <span className="gradient-text">Challenges</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Shop smart and earn exclusive rewards, cashback, and VIP benefits
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {rewards.map((reward, index) => {
            const Icon = reward.icon;
            return (
              <Card
                key={index}
                className="glass border-border/50 hover:border-primary/50 transition-all glow-hover p-8 space-y-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-primary">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="glass px-3 py-1 rounded-full text-sm font-semibold gradient-text">
                    {reward.badge}
                  </div>
                </div>
                <div className="space-y-3 text-left">
                  <h3 className="text-xl font-semibold">{reward.title}</h3>
                  <p className="text-foreground/70 min-h-[4rem]">{reward.content}</p>
                  <div className="pt-2">
                    <div className="text-sm text-foreground/60 mb-2">{reward.progress}</div>
                    <div className="w-full h-2 bg-background/50 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-primary transition-all" 
                        style={{ width: index === 0 ? '0%' : index === 1 ? '24%' : '33%' }}
                      />
                    </div>
                  </div>
                </div>
                <Button 
                  onClick={() => handleRewardClick(reward.title)}
                  className="w-full gradient-primary text-white border-0"
                >
                  {reward.action}
                </Button>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ShoppingRewards;
