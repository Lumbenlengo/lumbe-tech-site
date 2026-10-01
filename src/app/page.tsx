import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import AWSCloud from "@/components/AWSCloud";
import AIAutomation from "@/components/AIAutomation";
import WhyLumbeTech from "@/components/WhyLumbeTech";
import HowWeWork from "@/components/HowWeWork";
import Founder from "@/components/Founder";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <AWSCloud />
        <AIAutomation />
        <WhyLumbeTech />
        <HowWeWork />
        <Founder />
        <FinalCTA />
      </main>
      <footer className="footer">
        <div className="container footer-inner">
          <span className="footer-text">© 2026 Lumbe Tech</span>
          <span className="footer-text">contact@lumbetech.com</span>
        </div>
      </footer>
    </>
  );
}
