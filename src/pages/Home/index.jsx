import { Helmet } from "react-helmet";
import { Footer, Header } from "components";
import CustomerTestimonialsSection from "./CustomerTestimonialsSection";
import FeaturesSection from "./FeaturesSection";
import HomeShowcaseSection from "./HomeShowcaseSection";
import NewArrivalsSection from "./NewArrivalsSection";
import ShopBySection from "./ShopBySection";
import FurniStorePromotionSection from "./FurniStorePromotionSection";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home - FurniStore</title>
        <meta
          name="description"
          content="Shop FurniStore for high-quality furniture and home decor. Enjoy discounts, free shipping, and dedicated support. Transform your space today!"
        />
      </Helmet>
      <div className="flex w-full flex-col gap-8 md:gap-12">
        <div className="flex flex-col gap-8">
          <Header />

          <HomeShowcaseSection />

          <FeaturesSection />
        </div>

        <ShopBySection />

        <NewArrivalsSection />
        <FurniStorePromotionSection />
        <CustomerTestimonialsSection />
        <Footer />
      </div>
    </>
  );
}
