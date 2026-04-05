import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useLayoutEffect } from 'react';
import { Navbar, Footer } from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import LittleLions from './pages/LittleLions';
import BJJ from './pages/BJJ';
import MuayThai from './pages/MuayThai';
import Wrestling from './pages/Wrestling';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Boxing from './pages/Boxing';
import MMA from './pages/MMA';
import KidsJiuJitsu from './pages/KidsJiuJitsu';
import KidsPrograms from './pages/KidsPrograms';
import TeenJiuJitsu from './pages/TeenJiuJitsu';
import TeenBoxing from './pages/TeenBoxing';
import ScheduleAdult from './pages/ScheduleAdult';
import ScheduleKids from './pages/ScheduleKids';
import Rates from './pages/Rates';
import AdultPrograms from './pages/AdultPrograms';
import OnlineTraining from './pages/OnlineTraining';
import ThankYou from './pages/ThankYou';
import PrivateLessons from './pages/PrivateLessons';
import KidsPrivateLessons from './pages/KidsPrivateLessons';
import ImageGallery from './pages/ImageGallery';
import GitHubIntegration from './pages/GitHubIntegration';

function ScrollToTop() {
  const { pathname } = useLocation();
  
  useLayoutEffect(() => {
    // Reset scroll to top on every route change
    window.scrollTo(0, 0);
    
    // Prevent browser from restoring scroll position
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/bjj" element={<BJJ />} />
            <Route path="/muay-thai-boxing" element={<MuayThai />} />
            <Route path="/little-lions" element={<LittleLions />} />
            <Route path="/wrestling" element={<Wrestling />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/boxing" element={<Boxing />} />
            <Route path="/mma" element={<MMA />} />
            <Route path="/adult-programs" element={<AdultPrograms />} />
            <Route path="/kids-programs" element={<KidsPrograms />} />
            <Route path="/kids-jiu-jitsu" element={<KidsJiuJitsu />} />
            <Route path="/teen-jiu-jitsu" element={<TeenJiuJitsu />} />
            <Route path="/teen-boxing" element={<TeenBoxing />} />
            <Route path="/schedule-adult" element={<ScheduleAdult />} />
            <Route path="/schedule-kids" element={<ScheduleKids />} />
            <Route path="/rates" element={<Rates />} />
            <Route path="/online-training" element={<OnlineTraining />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/adult-private-lessons" element={<PrivateLessons />} />
            <Route path="/kids-private-lessons" element={<KidsPrivateLessons />} />
            <Route path="/image-gallery" element={<ImageGallery />} />
            <Route path="/github" element={<GitHubIntegration />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
