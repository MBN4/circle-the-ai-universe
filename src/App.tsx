import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { MouseFollower } from './components/MouseFollower';
import { ScrollToTop } from './components/ScrollToTop';
import { LoadingScreen } from './components/LoadingScreen';
import { Home } from './pages/Home';
import { Directory } from './pages/Directory';
import { Submit } from './pages/Submit';
import { About } from './pages/About';
import { cn } from './lib/utils';

function AppContent() {
  const location = useLocation();
  const { theme } = useTheme();
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={cn(
      "min-h-screen transition-colors duration-500 relative overflow-x-hidden",
      theme === 'dark' ? "mesh-gradient text-white" : "mesh-gradient-light text-gray-900"
    )}>
      <AnimatePresence>
        {isLoading && <LoadingScreen key="loader" />}
      </AnimatePresence>
      
      <ScrollToTop />
      <MouseFollower />
      <Navbar />
      
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/directory" element={<Directory />} />
            <Route path="/submit" element={<Submit />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}
