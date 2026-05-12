import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Fullstack Developer</h4>
                <h5>ProficientNow Tech · Hyderabad</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Oct 2023 – Present. Developing and maintaining a custom Applicant
              Tracking System from the ground up using React.js and Next.js.
              Built responsive UI components with Tailwind CSS and GSAP,
              created internal component libraries to streamline development,
              and partnered with backend on Node.js, Express, and MongoDB
              services. Also shipped a React-based site for Proficient Books.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelancer</h4>
                <h5>Independent</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Delivered 10+ WordPress sites and 6+ Shopify stores. Built custom
              React.js websites and experimented with React Native, NativeWind,
              and GSAP-driven animation. Worked directly with clients to gather
              requirements and ship tailored web solutions end to end.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Associate Developer</h4>
                <h5>Amvotech Solution Inc</h5>
              </div>
              <h3 style={{ whiteSpace: "nowrap" }}>2023–24</h3>
            </div>
            <p>
              Jan 2023 – Oct 2023. Managed and optimized Shopify stores
              including product research and inventory management. Led
              Facebook Marketing and Google Ads campaigns and performed SEO to
              drive sales. Designed and maintained multiple WordPress sites
              with custom themes and improved UX/UI throughout.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
