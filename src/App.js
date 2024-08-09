
import './App.css';
import Navbar from './comopnents/navbar';
import HeroSection from './comopnents/hero';
import PlacementStats from './comopnents/placement';
import Skills from './comopnents/skills';
import WhyChoose from './comopnents/services';
import Pricing from './comopnents/plans';
import ProblemTarget from './comopnents/course';

function App() {
  return (
    <div className="App">
   {/* <Navbar /> */}
   <HeroSection />
   <PlacementStats />
   <Skills />
   <WhyChoose /> 
   <Pricing />
   <ProblemTarget />

    </div>
  );
}

export default App;
