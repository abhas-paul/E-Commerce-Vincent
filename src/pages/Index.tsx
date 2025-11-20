import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AIMoodRecommender from "@/components/AIMoodRecommender";
import Marketplace from "@/components/Marketplace";
import SponsoredProducts from "@/components/FeaturedCollections";
import ShoppingRewards from "@/components/DailyGrowthTools";
import CustomerSupport from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <AIMoodRecommender />
      <Marketplace />
      <SponsoredProducts />
      <ShoppingRewards />
      <CustomerSupport />
      <Footer />
    </div>
  );
};

export default Index;
