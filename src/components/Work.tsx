import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "ProficientNow Healthcare",
    category: "Healthcare Marketing Site",
    tools: "Next.js 16, TypeScript, Tailwind CSS, shadcn/ui, Airtable",
    image: "/images/pnow-healthcare.webp",
    link: "https://pnow-healthcare.vercel.app",
  },
  {
    title: "ATS Frontend",
    category: "Recruiter Dashboard & Applicant Tracking System",
    tools: "React, Next.js, TypeScript, Tailwind CSS, GSAP",
    image: "/images/ats-frontend.webp",
    link: "https://ats-frontend-seven.vercel.app",
  },
  {
    title: "ProficientNow Website",
    category: "Corporate Recruiting Site",
    tools: "Next.js, TypeScript, Tailwind CSS",
    image: "/images/pnow-website.webp",
    link: "https://pnow-website-v1.vercel.app",
  },
  {
    title: "Personal Finance Dashboard",
    category: "AI-Powered Personal Finance App",
    tools: "Next.js, AI Integration, Modern Web Stack",
    image: "/images/personal-finance.webp",
    link: "https://github.com/akhan-pn/personal-finance-dashboard",
  },
  {
    title: "Samurai System",
    category: "Modern Web Application",
    tools: "Next.js, React, TypeScript",
    image: "/images/samurai-system.webp",
    link: "https://samurai-system.vercel.app",
  },
  {
    title: "Restaurant Management",
    category: "Restaurant Operations Platform",
    tools: "Next.js, React, Tailwind CSS",
    image: "/images/restaurant-management.webp",
    link: "https://resturant-management-v1.vercel.app",
  },
  {
    title: "Lead Collector Extension",
    category: "Chrome Extension for Lead Capture",
    tools: "Chrome Extension API, JavaScript, DOM Scraping",
    image: "/images/lead-collector.webp",
    link: "https://leads-upload-main-we58.vercel.app",
  },
  {
    title: "Netflix Clone",
    category: "Streaming UI Clone",
    tools: "React, Tailwind CSS, Vite",
    image: "/images/netflix.webp",
    link: "https://net-flix-clone-fawn.vercel.app",
  },
  {
    title: "Vaulk Clone",
    category: "Static Site Clone with Local Dev Server",
    tools: "Node.js, Vanilla HTML/CSS, Vercel",
    image: "/images/vaulk-clone.webp",
    link: "https://vaulk-clone.vercel.app/en-GB",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                        link={project.link}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
