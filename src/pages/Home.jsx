import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Hero from './Hero';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
// import Navbar from './Navbar';

function useSectionFade(ref, threshold = 0.2, minOpacity = 0.1) {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    function handleScroll() {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const t = threshold * vh;
      let newOp = 1;

      // Off-screen → invisible
      if (rect.bottom < 0 || rect.top > vh) {
        newOp = 0;
      }
      // Fade in from bottom 20%
      else if (rect.top > vh - t) {
        const p = (vh - rect.top) / t;           // 0 → 1 as top goes from vh → vh - t
        newOp = minOpacity + (1 - minOpacity) * p;
      }
      // Fade out through top 20%
      else if (rect.bottom < t) {
        const p = rect.bottom / t;               // 0 → 1 as bottom goes from 0 → t
        newOp = minOpacity + (1 - minOpacity) * p;
      }
      // Otherwise, full
      else {
        newOp = 1;
      }

      setOpacity(newOp);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [ref, threshold, minOpacity]);

  return opacity;
}

export default function Home() {
  const summaryRef = useRef(null);
  const skillsRef  = useRef(null);
  const projectsRef = useRef(null);
  const footerRef = useRef(null);
  const navigate = useNavigate();

  // 20% threshold, floor at 10% opacity
  const summaryOpacity = useSectionFade(summaryRef, 0.2, 0.1);
  const skillsOpacity  = useSectionFade(skillsRef,  0.2, 0.1);
  const projectsOpacity = useSectionFade(projectsRef, 0.2, 0.1);
  const footerOpacity = useSectionFade(footerRef, 0.2, 0.1);

  return (
    <div>
      {/* <Navbar /> */}
      <div ref={summaryRef}>
        <Hero />
      </div>

      {/* — SUMMARY SECTION — */}
      <motion.section
        ref={summaryRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: summaryOpacity }}
        transition={{ duration: 0.3 }}
        className="relative flex justify-center items-center w-full h-screen px-4 py-24"
      >
        {/* corner brackets */}
        <span className="absolute top-8 left-8 text-2xl text-gray-300 select-none">
          &#x250C;
        </span>
        <span className="absolute top-8 right-8 text-2xl text-gray-300 select-none">
          &#x2510;
        </span>
        <span className="absolute bottom-8 left-8 text-2xl text-gray-300 select-none">
          &#x2514;
        </span>
        <span className="absolute bottom-8 right-8 text-2xl text-gray-300 select-none">
          &#x2518;
        </span>

        <div
          className="relative z-10 max-w-4xl w-full rounded-2xl p-10 md:p-16 flex flex-col gap-8"
          style={{ fontFamily: 'Inter, system-ui, sans-serif', background: 'none' }}
        >
          <div className="text-black text-3xl md:text-4xl font-extrabold leading-snug mb-4 text-left">
            Hi, I'm Rohaan.<br />
            I love building seamless, accessible, and robust software experiences.
          </div>
          <div className="text-black text-2xl md:text-3xl font-semibold leading-snug text-left">
            I specialize in backend systems, AI, and scalable architectures—crafting products that blend logic, performance, and real-world impact.
          </div>
          <div className="text-black text-xl md:text-2xl font-medium leading-snug text-left">
            From full-stack apps and ML pipelines to recommendation engines, I thrive on solving complex problems and delivering clean, efficient solutions.
          </div>
          <div className="text-black text-xl md:text-2xl font-medium leading-snug text-left">
            Currently exploring distributed systems, concurrency in Go, and microservices in Java Spring Boot.
          </div>
        </div>
      </motion.section>

      {/* — SKILLS SECTION — */}
      <motion.section
        ref={skillsRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: skillsOpacity }}
        transition={{ duration: 0.5 }}
        className="w-full min-h-screen text-black px-6 py-32 flex justify-center items-start relative"
      >
        <div
          className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12"
          style={{ fontFamily: 'Inter, system-ui, sans-serif', background: 'none' }}
        >
          {/* Left */}
          <div className="flex flex-col justify-center space-y-6 px-2">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700">
              Skills
            </h2>
            <h1 className="text-5xl md:text-6xl font-bold text-black">
              Stack
            </h1>
            <p className="text-md md:text-lg text-gray-700 font-medium leading-relaxed">
              I build with modern languages, frameworks, and tools that make
              scalable software not just possible—but fast and reliable.
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col items-start justify-center pl-4 space-y-10 overflow-hidden relative w-full">
            {/* Languages */}
            <div className="w-full">
              <h3 className="text-2xl font-bold text-black mb-2">
                Languages
              </h3>
              <div className="h-[1px] bg-black w-1/2 mb-4" />
              <div className="flex flex-col space-y-4">
                {['Python','Java','JavaScript','TypeScript','Go','C','C++'].map((lang,i)=>(
                  <motion.div
                    key={lang}
                    initial={{ x: 100 }}
                    whileInView={{ x: 0 }}
                    viewport={{ amount: 0.3 }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="text-2xl font-semibold text-gray-800"
                  >
                    {lang}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Frameworks */}
            <div className="w-full">
              <h3 className="text-2xl font-bold text-black mt-6 mb-2">
                Frameworks
              </h3>
              <div className="h-[1px] bg-black w-1/2 mb-4" />
              <div className="flex flex-col space-y-4">
                {['Spring Boot','FastAPI','React.js','Flask','Express'].map((fw,i)=>(
                  <motion.div
                    key={fw}
                    initial={{ x: 100 }}
                    whileInView={{ x: 0 }}
                    viewport={{ amount: 0.3 }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="text-2xl font-semibold text-gray-800"
                  >
                    {fw}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="w-full">
              <h3 className="text-2xl font-bold text-black mt-6 mb-2">
                Tools
              </h3>
              <div className="h-[1px] bg-black w-1/2 mb-4" />
              <div className="flex flex-col space-y-4">
                {['Git','Docker','PostgreSQL','MongoDB','Redis','AWS','Postman'].map((tool,i)=>(
                  <motion.div
                    key={tool}
                    initial={{ x: 100 }}
                    whileInView={{ x: 0 }}
                    viewport={{ amount: 0.3 }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="text-2xl font-semibold text-gray-800"
                  >
                    {tool}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* — PROJECTS SECTION — */}
      <motion.section
        ref={projectsRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: projectsOpacity }}
        transition={{ duration: 0.5 }}
        className="w-full min-h-screen text-black px-6 py-32 flex justify-center items-center relative"
      >
        <div className="text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-4">Projects</h2>
          <p className="text-lg text-gray-700 mb-8">
            Here are some of the projects I'm proud of.
          </p>
          <button
            onClick={() => navigate('/projects')}
            className="inline-block bg-black text-white font-semibold py-3 px-8 rounded-md hover:bg-gray-800 transition-colors duration-300"
          >
            View All Projects
          </button>
        </div>
      </motion.section>

      {/* -- FOOTER SECTION -- */}
      <motion.div
        ref={footerRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: footerOpacity }}
        transition={{ duration: 0.5 }}
      >
        <Footer />
      </motion.div>
    </div>
  );
}
