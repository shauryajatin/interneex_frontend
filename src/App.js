
import './App.css';
// import Navbar from './comopnents/navbar';
import HeroSection from './comopnents/hero';
import PlacementStats from './comopnents/placement';
import Skills from './comopnents/skills';
import WhyChoose from './comopnents/services';
import Pricing from './comopnents/plans';
import DynamicComponentApp from './comopnents/course';
import Mentor from './comopnents/mentor';

function App() {
  return (
    <div className="App">
   {/* <Navbar /> */}
   <HeroSection />
   <PlacementStats />
   <Mentor />

   <Skills />
   <DynamicComponentApp />
   <Pricing />

   <WhyChoose /> 
    </div>
  );
}

export default App;
