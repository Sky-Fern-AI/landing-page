import HeaderResearch from './components/layout/HeaderResearch';
import HeroResearch from './components/sections/HeroResearch';
import ResearchForm from './components/sections/ResearchForm';
import WhyParticipate from './components/sections/WhyParticipate';
import OurApproach from './components/sections/OurApproach';
import Testimonials from './components/sections/Testimonials';
import FooterResearch from './components/sections/FooterResearch';

function App() {
  return (
    <div className="min-h-screen bg-cloud-50">
      <HeaderResearch />
      
      <main>
        <section id="hero">
          <HeroResearch />
        </section>
        
        <section id="research-form">
          <ResearchForm />
        </section>
        
        <section id="why-participate">
          <WhyParticipate />
        </section>
        
        <section id="our-approach">
          <OurApproach />
        </section>

        <section id="testimonials">
          <Testimonials />
        </section>
      </main>

      <FooterResearch />
    </div>
  );
}

export default App;