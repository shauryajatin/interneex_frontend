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
import Dashboard from './pages/userDasboard';
// import AuthWrapper from './context/authContext';
import { AuthProvider } from './context/authContext'; // Import the AuthProvider
import PasswordReset from './pages/passwordReset';
// import AdminLogin from './pages/admin';
// import UserList from './pages/userList';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={
              <>
                <HeroSection />
                <MentorSection id="about" />
                <DynamicComponentApp id="courses" />
                <Pricing id="pricing" />
                <WhyChoose id="services" />
                <TestimonialSection id="testimonials" />
                <AlumniCompanies id="alumni" />
                <Footer />
              </>
            } />
            <Route path="/batches-and-webinar" element={<Bulletin />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/cancellation-refund-policy" element={<CancellationRefundPolicy />} />
            <Route path="/user" element={<Dashboard />} />
            <Route path="/reset-password" element={<PasswordReset />} />
            {/* <Route path="/secret-admin" element={<AdminLogin />} />
            <Route path="/userlist" element={<UserList />} /> */}

          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
