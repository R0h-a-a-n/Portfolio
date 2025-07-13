// INSTRUCTIONS: To add your own project images, upload them to the public/projects/ folder (e.g., public/projects/causana1.jpg). Then, in the images array for each project below, use paths like '/projects/causana1.jpg'.

import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { useInView } from 'framer-motion';

function GitHubIcon() {
  return (
    <svg height="28" width="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white hover:text-yellow-300 transition-colors duration-200">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 21.13V24" />
    </svg>
  );
}

function ProjectSection({ project }) {
  const navigate = useNavigate();
  const [imgIdx, setImgIdx] = useState(0);
  const [centerHover, setCenterHover] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  // Fade overlay text when mouse is near center
  function handleMouseMove(e) {
    const { clientX, clientY } = e;
    const w = window.innerWidth;
    const h = window.innerHeight;
    // Center 40% of screen triggers fade
    const centerX = w * 0.3 < clientX && clientX < w * 0.7;
    const centerY = h * 0.3 < clientY && clientY < h * 0.7;
    setCenterHover(centerX && centerY);
  }
  function handleMouseLeave() {
    setCenterHover(false);
  }

  const summary = project.summary || project.bullets[0];

  return (
    <section
      ref={ref}
      className="min-h-screen w-full flex items-end snap-center relative overflow-hidden"
      style={{ background: 'none' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background image or gray fallback */}
      {project.images && project.images.length > 0 ? (
        <motion.img
          key={imgIdx}
          src={project.images[imgIdx]}
          alt={project.title + ' screenshot'}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: isInView ? 1 : 0, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0 w-full h-full min-h-screen object-contain bg-gray-900 z-0 select-none pointer-events-none"
          draggable={false}
        />
      ) : (
        <div className="absolute inset-0 w-full h-full min-h-screen bg-gray-900 z-0" />
      )}
      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 z-10" />
      {/* Carousel arrows */}
      {project.images && project.images.length > 1 && (
        <>
          <button
            onClick={e => { e.stopPropagation(); setImgIdx((prev) => (prev - 1 + project.images.length) % project.images.length); }}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/70 text-white rounded-full p-3 shadow-lg border border-white/20"
            aria-label="Previous image"
          >
            &#8592;
          </button>
          <button
            onClick={e => { e.stopPropagation(); setImgIdx((prev) => (prev + 1) % project.images.length); }}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/70 text-white rounded-full p-3 shadow-lg border border-white/20"
            aria-label="Next image"
          >
            &#8594;
          </button>
        </>
      )}
      {/* Dots for carousel */}
      {project.images && project.images.length > 1 && (
        <div className="absolute bottom-32 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {project.images.map((_, i) => (
            <span key={i} className={`inline-block w-2 h-2 rounded-full ${i === imgIdx ? 'bg-white' : 'bg-gray-500/60'}`}></span>
          ))}
        </div>
      )}
      {/* Overlayed text */}
      <motion.div
        className="relative z-20 w-full max-w-5xl px-10 pb-16 md:pb-24 flex flex-col items-start"
        animate={{ opacity: centerHover ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-1 mb-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
            {project.title}
          </h2>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform ml-1"
            aria-label="GitHub Repository"
            onClick={e => e.stopPropagation()}
          >
            <GitHubIcon />
          </a>
        </div>
        <p className="text-xl md:text-2xl text-gray-200 font-medium mb-6 drop-shadow-lg max-w-2xl">
          {summary}
        </p>
        <button
          className="mt-2 px-6 py-2 bg-white/90 text-black rounded-lg font-semibold shadow hover:bg-yellow-400 transition-colors duration-200 text-lg"
          onClick={e => { e.stopPropagation(); navigate(`/blog/${project.slug}`); }}
        >
          Read Full Blog
        </button>
      </motion.div>
    </section>
  );
}

function ProjectsPage() {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
    // Remove polka dot pattern from navbar for /projects only
    const navbar = document.querySelector('nav');
    if (navbar) {
      navbar.style.backgroundImage = 'none';
    }
    return () => {
      if (navbar) {
        navbar.style.backgroundImage = '';
      }
    };
  }, []);

  const projects = [
    {
      title: 'Causana – Temporal Causal Inference Explorer',
      slug: 'causana-temporal-causal-inference-explorer',
      github: 'https://github.com/R0h-a-a-n/Causana',
      images: [
        '/projects/causana1.jpg',
        '/projects/causana2.jpg',
      ],
      summary: 'End-to-end causal analysis platform for time-lagged relationships in multivariate time series.',
      bullets: [
        'End-to-end causal analysis platform for time-lagged relationships in multivariate time series.',
        'Implemented a modular pipeline with FastAPI-based causal engine, Go job runner, and Spring Boot gateway, enabling CSV ingestion, lag configuration, and concurrent job handling.',
        'Programmed a REST interface to output weighted causal graphs as JSON, integrating seamlessly with an interactive frontend DAG visualizer.',
        'Achieved 80% reduction in manual analysis time and ensured scalability to 100+ variables with tunable parameters for robust exploration.'
      ]
    },
    {
      title: 'Convidat – AI-Powered Sustainable Tourism Platform',
      slug: 'convidat-ai-powered-sustainable-tourism-platform',
      github: 'https://github.com/R0h-a-a-n/Convidat',
      images: [
        '/projects/convidat1.jpg',
        '/projects/convidat2.jpg',
      ],
      summary: 'Production-grade MERN microservices platform for eco-conscious tourism.',
      bullets: [
        'Production-grade MERN microservices platform for eco-conscious tourism.',
        'Trained and deployed an SVD-based recommendation model via Flask to suggest optimal cities using contextual user–city interaction data, achieving 92% top-5 accuracy.',
        'Implemented modular services for eco-stay filtering, carbon emission tracking, and season-aware city ranking using Google Maps & Places APIs, cutting down route planning time by 40%.',
        'Developed REST APIs for Trip Itinerary, Packing, and Budget Planning, enabling personalized travel plans and reducing manual effort with auto-filled recommendations and dynamic carbon summaries.'
      ]
    },
    {
      title: 'OccluFix – Face Inpainting with Perceptual and Adversarial Losses',
      slug: 'occlufix-face-inpainting-with-perceptual-and-adversarial-losses',
      github: 'https://github.com/R0h-a-a-n/OccluFix',
      images: [
        '/projects/occlufix1.png',
        '/projects/occlufix2.png',
        '/projects/occlufix3.png',
      ],
      summary: 'U-Net-based inpainting model for occluded facial regions using CelebA dataset.',
      bullets: [
        'U-Net-based inpainting model for occluded facial regions using CelebA dataset.',
        'Enhanced output realism by combining L1, VGG16-based perceptual loss, and PatchGAN adversarial loss, boosting structural fidelity by 35%.',
        'Trained using mixed precision on a T4 GPU, cutting training time by 40% and achieving convergence within 4 hours.',
        'Reduced visual artifacts by 70% and improved masked-region reconstruction accuracy by 30% compared to L1-only baselines.'
      ]
    }
  ];

  return (
    <div ref={scrollContainerRef} className="w-full h-screen snap-y snap-mandatory overflow-y-scroll">
      {projects.map((project) => (
        <ProjectSection key={project.slug} project={project} />
      ))}
    </div>
  );
}

export default ProjectsPage;