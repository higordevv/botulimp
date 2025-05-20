import Navbar from '../components/Navbar';
import Header from '../components/Header';
import ServicesSection from '../components/Services/ServiceSection';
import Footer from '../components/Footer';
import About from '../components/About';
import FeedbackSection from '../components/FeedbackSection';
import CuriositiesSection from '../components/CuriositiesSection';

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="overflow-x-hidden">
        <Header />
      </main>
      <About />
      <ServicesSection />
      <FeedbackSection />
      <CuriositiesSection />
      <Footer />
    </>
  );
}
