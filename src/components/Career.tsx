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
                <h4>Virtual Internship</h4>
                <h5>TATA</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
            Completed a virtual internship focused on Data Visualization,
            gaining experience in tools like Tableau and Power BI. Worked 
            on analyzing large datasets and creating insightful dashboards for real-time decision making.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Virtual Intern</h4>
                <h5>Deloit</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
            Completed a virtual internship with Deloitte focused on Technology Consulting, gaining exposure to business analysis and digital transformation projects. Assisted in problem-solving using data-driven insights and learned to apply consulting methodologies to real-world business challenges.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4></h4>
                <h5>Graduated</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
            Recently graduated with a Bachelor of Computer Applications (BCA) degree, building a strong foundation in programming, web development, and data analytics. Currently exploring opportunities to apply and expand my technical skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
