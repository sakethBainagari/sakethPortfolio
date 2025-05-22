import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Education, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import CodingProfiles from "./components/CodingProfiles";
import { testimonials } from "./constants";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <StarsCanvas />
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
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
