import Navbar from '../components/Navbar';
import Header from '../components/Header';
import ServicesSection from '../components/Services/ServiceSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#c7e9f4] text-[#0d3d66] font-sans">
      <Navbar />
      <Header />
      <ServicesSection />
      <Footer />
    </div>
  );
}
