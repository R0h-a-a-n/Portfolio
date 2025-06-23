import { useNavigate } from 'react-router-dom';

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

function ProjectsPage() {
  const navigate = useNavigate();
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
    <div className="w-full min-h-screen snap-y snap-mandatory overflow-y-scroll px-2">
      {projects.map((project) => (
        <section
          key={project.title}
          className="min-h-screen w-full flex justify-center items-center snap-center"
        >
          <div
            className="max-w-4xl w-full rounded-3xl border border-gray-300 shadow-2xl bg-white/60 backdrop-blur-md px-6 md:px-10 py-8 md:py-10 relative flex flex-col gap-6 transition-all duration-300 hover:scale-[1.015] hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)] cursor-pointer"
            onClick={() => navigate(`/blog/${project.slug}`)}
            tabIndex={0}
            role="button"
            aria-label={`Read more about ${project.title}`}
          >
            {/* Gradient Accent Bar */}
            <div className="absolute top-8 left-0 h-10 w-1 rounded-full bg-gradient-to-b from-indigo-500 via-pink-400 to-yellow-400" />

            {/* Title & GitHub */}
            <div className="flex items-center justify-between pl-6 pr-2">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">{project.title}</h2>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black text-gray-700 transition-colors duration-200"
                aria-label="GitHub Repository"
                onClick={e => e.stopPropagation()}
              >
                <GitHubIcon />
              </a>
            </div>

            {/* Bullets */}
            <ul className="list-disc pl-12 pr-4 text-base md:text-lg text-gray-800 font-medium space-y-4 leading-relaxed">
              {project.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProjectsPage;