import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from "./comopnents/hero"
import MentorSection from "./comopnents/mentor"
import DynamicComponentApp from "./comopnents/course"
import Pricing from './comopnents/plans';
import WhyChoose from './comopnents/services';
import TestimonialSection from './comopnents/testimonials';
import AlumniCompanies from './comopnents/alumni'
import Footer from './comopnents/footer';
import Mentor from './comopnents/mentor';
import Bulletin from './pages/bulletin';
import PrivacyPolicy from './pages/Privacy';
import TermsAndConditions from './pages/T&C';
import CancellationRefundPolicy from './pages/Refund';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <Mentor id="about" />
              <DynamicComponentApp id="courses" />
              <Pricing id="pricing" />
              <WhyChoose id="services" />
              <TestimonialSection id="testimonials" />
              <AlumniCompanies id="alumni" />
              <Footer />
            </>
          } />
          <Route path="/batches-and-webinar" element={<Bulletin />} />
          <Route path="/Privacy" element={< PrivacyPolicy/>} />
          <Route path="/T&C" element={< TermsAndConditions/>} />
          <Route path="/Refund-Policy" element={< CancellationRefundPolicy/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
