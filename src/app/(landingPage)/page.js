import BuidProfil from "./_components/build-profil-section";
import CollectionSection from "./_components/collections-section";
import CreateAndSell from "./_components/create-and-sell-section";
import HeroSection from "./_components/hero-section";

export default function Home() {
  return (
    <>
      {/* Hero section */}
      <HeroSection />
      {/* Collection section */}
      <CollectionSection />
      {/* Create&Sell-Section */}
      <CreateAndSell />
      {/* Build profil section */}
      <BuidProfil />
    </>
  );
}
