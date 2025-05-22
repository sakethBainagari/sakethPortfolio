import { BrowserRouter } from "react-router-dom";
import { Suspense, useState, useEffect } from "react";
import { About, Contact, Experience, Education, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Loading } from "./components";
import CodingProfiles from "./components/CodingProfiles";
import { testimonials } from "./constants";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show loading screen for 1 second
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Education />
        <Tech />
        <CodingProfiles />
        <Works />
        {testimonials.length > 0 && <Feedbacks />}
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
