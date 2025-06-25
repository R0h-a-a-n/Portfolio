import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { useInView } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

function GitHubIcon() {
  return (
    <svg height="28" width="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700 hover:text-black transition-colors duration-200">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 21.13V24" />
    </svg>
  );
}

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

function ProjectCard({ project }) {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section
      ref={ref}
      className="min-h-screen w-full flex justify-center items-center snap-center"
    >
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.18}
        glareColor="#fff"
        glarePosition="all"
        tiltMaxAngleX={12}
        tiltMaxAngleY={12}
        scale={1.04}
        transitionSpeed={1200}
        className="w-full flex justify-center"
      >
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl w-full rounded-xl border-2 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-white/70 backdrop-blur-lg flex flex-col transition-all duration-300 hover:shadow-[10px_10px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 cursor-pointer"
          onClick={() => navigate(`/blog/${project.slug}`)}
          tabIndex={0}
          role="button"
          aria-label={`Read more about ${project.title}`}
        >
          <div className="flex items-center justify-between p-4 border-b-2 border-black">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">{project.title}</h2>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-lg font-bold text-gray-900 hover:text-indigo-600 transition-colors duration-200"
              aria-label="GitHub Repository"
              onClick={e => e.stopPropagation()}
            >
              <GitHubIcon />
              <span>GitHub</span>
            </a>
          </div>

          <div className="p-6">
            <ul className="list-disc pl-6 text-base md:text-lg text-gray-800 font-medium space-y-3 leading-relaxed">
              {project.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      </Tilt>
    </section>
  );
}

function ProjectsPage() {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  }, []);

  const projects = [
    {
      title: 'Causana – Temporal Causal Inference Explorer',
      slug: 'causana-temporal-causal-inference-explorer',
      github: 'https://github.com/R0h-a-a-n/Causana',
      bullets: [
        'Developed an end-to-end causal analysis platform to infer time-lagged relationships in multivariate time series datasets using Granger causality and sliding-window inference.',
        'Implemented a modular pipeline with FastAPI-based causal engine, Go job runner, and Spring Boot gateway, enabling CSV ingestion, lag configuration, and concurrent job handling.',
        'Programmed a REST interface to output weighted causal graphs as JSON, integrating seamlessly with an interactive frontend DAG visualizer.',
        'Achieved 80% reduction in manual analysis time and ensured scalability to 100+ variables with tunable parameters for robust exploration.'
      ]
    },
    {
      title: 'Convidat – AI-Powered Sustainable Tourism Platform',
      slug: 'convidat-ai-powered-sustainable-tourism-platform',
      github: 'https://github.com/R0h-a-a-n/Convidat',
      bullets: [
        'Built a production-grade MERN microservices platform with 8 core services to promote eco-conscious tourism, including sustainable routing, carbon tracking, trip planning, and AI-powered city recommendations.',
        'Trained and deployed an SVD-based recommendation model via Flask to suggest optimal cities using contextual user–city interaction data, achieving 92% top-5 accuracy.',
        'Implemented modular services for eco-stay filtering, carbon emission tracking, and season-aware city ranking using Google Maps & Places APIs, cutting down route planning time by 40%.',
        'Developed REST APIs for Trip Itinerary, Packing, and Budget Planning, enabling personalized travel plans and reducing manual effort with auto-filled recommendations and dynamic carbon summaries.'
      ]
    },
    {
      title: 'OccluFix – Face Inpainting with Perceptual and Adversarial Losses',
      slug: 'occlufix-face-inpainting-with-perceptual-and-adversarial-losses',
      github: 'https://github.com/R0h-a-a-n/OccluFix',
      bullets: [
        'Built a U-Net-based inpainting model to reconstruct occluded facial regions using the CelebA dataset with 50,000+ samples.',
        'Enhanced output realism by combining L1, VGG16-based perceptual loss, and PatchGAN adversarial loss, boosting structural fidelity by 35%.',
        'Trained using mixed precision on a T4 GPU, cutting training time by 40% and achieving convergence within 4 hours.',
        'Reduced visual artifacts by 70% and improved masked-region reconstruction accuracy by 30% compared to L1-only baselines.'
      ]
    }
  ];

  return (
    <div ref={scrollContainerRef} className="w-full h-screen snap-y snap-mandatory overflow-y-scroll">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}

export default ProjectsPage;