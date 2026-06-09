import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ValueProposition from './components/ValueProposition';
import Services from './components/Services';
import Certifications from './components/Certifications';
import Clients from './components/Clients';
import WhyPartner from './components/WhyPartner';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark-950">
      <Navbar />
      <main>
        <Hero />
        <About />
        <ValueProposition />
        <Services />
        <Certifications />
        <Clients />
        <WhyPartner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
