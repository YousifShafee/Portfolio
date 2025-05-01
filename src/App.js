import './App.css';
import useCopyToClipboard from './hooks/useCopyToClipboard';
import useProgressBar from './hooks/useProgressBar';
import useStars from './hooks/useStars';

function App() {
  useStars();
  useProgressBar();
  useCopyToClipboard();

  return (
    <div>
      <div className="stars"></div>
      <div className="progress-container">
        <div className="progress-bar" id="progressBar"></div>
      </div>

      <nav>
        <div className="container nav-content">
          <a href="#home" className="logo">Y</a>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <main id="main">
        <section className="hero" id="home">
          <div className="container hero-content">
            <p className="hero-title">Hi, my name is</p>
            <h1 className="hero-name">Yousif Shafee</h1>
            <h2 className="hero-subtitle">Build Apps With Innovative Solutions</h2>
            <p className="hero-description">
              With over 4 years of experience as a <span className="highlight">Mid-Level Software Engineer</span>,
              I specialize in building exceptional back-end solutions and scalable web applications.
              Currently focused on creating accessible, high-performance products at Path2live.
            </p>
          </div>
        </section>

        <section id="about">
          <div className="container section-content">
            <h2 className="section-title">About Me</h2>
            <div className="about-text">
              <p>
                I specialize in <span className="highlight">back-end development using Python</span> with frameworks
                such as Django and FastAPI.
                My expertise includes implementing RESTful APIs, building robust database structures, optimizing
                code performance,
                and integrating third-party services like Stripe and Google Calendar.
              </p>
              <p>
                With a <span className="highlight">Bachelor's degree in Computer Science</span>, I possess a solid
                technical foundation
                and strong understanding of data structures and OOP principles. I'm
                experienced in
                deploying and dockerizing applications and managing AWS infrastructure.
              </p>
              <p>
                As a self-learner and team player, I thrive in fast-paced environments and continuously adapt to
                new technologies.
                My analytical problem-solving skills drive me to deliver solutions that align with both
                technical excellence
                and business objectives.
              </p>

              <div className="skill-list">
                <span className="skill-tag">Python</span>
                <span className="skill-tag">Django</span>
                <span className="skill-tag">FastAPI</span>
                <span className="skill-tag">PostgreSQL</span>
                <span className="skill-tag">RESTful APIs</span>
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">AWS</span>
              </div>
            </div>
          </div>
        </section>

        <section id="experience">
          <div className="container">
            <h2 className="section-title">Where I've Worked</h2>
            <div className="experience-grid">
              <div className="experience-card">
                <h3>Mid-Level Back End Developer</h3>
                <div className="company">Path2live</div>
                <p>Apr 2023 - Present</p>
                <ul>
                  <li>Built high-performance web applications using Django, Flask AppBuilder, and FastAPI</li>
                  <li>Implemented real-time calendar synchronization across platforms</li>
                  <li>Developed secure payment workflows using Stripe</li>
                </ul>
              </div>

              <div className="experience-card">
                <h3>Junior Full Stack Developer</h3>
                <div className="company">Balsamee LTD</div>
                <p>Jan 2022 - May 2023</p>
                <ul>
                  <li>Developed web applications using Java Spring framework and React</li>
                  <li>Revamped existing web project from Angular to React</li>
                </ul>
              </div>

              <div className="experience-card">
                <h3>Junior Full Stack Developer</h3>
                <div className="company">Track Int'l Trade</div>
                <p>Nov 2020 - Dec 2021</p>
                <ul>
                  <li>Implemented attendance module using Frappe/ERPNext</li>
                  <li>Designed intuitive user interfaces</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="skills">
          <div className="container">
            <h2 className="section-title">What I Know</h2>
            <div className="skills-grid">
              <div className="skill-category">
                <h3>Languages</h3>
                <div className="skill-list">
                  <span className="skill-tag"><img src="./logos/python.svg" alt="Python"
                    className="skill-icon" />Python</span>
                  <span className="skill-tag"><img src="./logos/java.svg" alt="Java"
                    className="skill-icon monochrome" />Java</span>
                  <span className="skill-tag"><img src="./logos/javascript.svg" alt="JavaScript"
                    className="skill-icon" />JavaScript</span>
                  <span className="skill-tag"><img src="./logos/typescript.svg" alt="TypeScript"
                    className="skill-icon" />TypeScript</span>
                </div>
              </div>

              <div className="skill-category">
                <h3>Frameworks</h3>
                <div className="skill-list">
                  <span className="skill-tag"><img src="./logos/django.svg" alt="Django"
                    className="skill-icon monochrome" />Django</span>
                  <span className="skill-tag"><img src="./logos/fastapi.svg" alt="FastAPI"
                    className="skill-icon monochrome" />FastAPI</span>
                  <span className="skill-tag"><img src="./logos/spring.svg" alt="Spring Boot"
                    className="skill-icon monochrome" />Spring Boot</span>
                  <span className="skill-tag"><img src="./logos/react.svg" alt="React"
                    className="skill-icon monochrome" />React</span>
                </div>
              </div>

              <div className="skill-category">
                <h3>DevOps</h3>
                <div className="skill-list">
                  <span className="skill-tag"><img src="./logos/docker.svg" alt="Docker"
                    className="skill-icon" />Docker</span>
                  <span className="skill-tag"><img src="./logos/aws.svg" alt="AWS"
                    className="skill-icon monochrome" />AWS</span>
                  <span className="skill-tag"><img src="./logos/nginx.svg" alt="Nginx"
                    className="skill-icon" />Nginx</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="container contact">
            <h2 className="section-title">Get In Touch</h2>
            <p>Feel free to reach out if you'd like to connect, collaborate, or just have a chat!</p>
            <div className="contact-info">
              <span><strong>Email:</strong> <span className="copyable">yousif.shafee@gmail.com</span></span>
              <span><strong>Phone:</strong> <span className="copyable">+201004836281</span></span>
            </div>
            <div className="social-links">
              <a href="mailto:yousif.shafee@gmail.com" title="Email"><i className="fas fa-envelope"></i></a>
              <a href="https://linkedin.com/in/yousif-shafee" target="_blank" title="LinkedIn"><i
                className="fab fa-linkedin"></i></a>
              <a href="https://github.com/yousifshafee" target="_blank" title="GitHub"><i
                className="fab fa-github"></i></a>
              <a href="https://leetcode.com/u/Yousif_Shafee/" target="_blank" title="LeetCode"><i
                className="fas fa-code"></i></a>
              <a href="tel:+201004836281" title="Phone"><i className="fas fa-phone"></i></a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
