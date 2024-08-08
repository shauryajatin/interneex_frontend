
import './App.css';
import Navbar from './comopnents/navbar';
import HeroSection from './comopnents/hero';
import PlacementStats from './comopnents/placement';
import Skills from './comopnents/skills';

function App() {
  return (
    <div className="App">
   <Navbar />
   <HeroSection />
   <PlacementStats />
   <Skills />
    </div>
  );
}

export default App;
