import Navbar from '../components/Navbar';
import Header from '../components/Header';
import ServicesSection from '../components/Services/ServiceSection';
import Footer from '../components/Footer';
import About from '../components/About';
import FeedbackSection from '../components/FeedbackSection';
import CuriositiesSection from '../components/CuriositiesSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#c7e9f4] text-[#0d3d66] font-sans">
     <Navbar />
      <main className="overflow-x-hidden">
        <Header />
        <About />
        <ServicesSection />
        <FeedbackSection />
        <CuriositiesSection />
      </main>
      <Footer />
    </div>
  );
}
