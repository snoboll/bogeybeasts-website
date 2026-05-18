import Nav from '../components/Nav';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Rarity from '../components/Rarity';
import Battle from '../components/Battle';
import BeastShowcase from '../components/BeastShowcase';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <Rarity />
        <BeastShowcase />
        <Battle />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
