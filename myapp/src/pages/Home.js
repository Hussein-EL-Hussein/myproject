import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />

      <section className="hero">
        <div className="hero-content">
          <h1>Hussein EL-Hussein</h1>
          <p>
            Computer Science student passionate about programming,
            Artificial Intelligence, robotics, and modern web
            application development.
          </p>

          <a href="#courses" className="btn">
            Explore My Work
          </a>
        </div>
      </section>

      <main className="container" id="courses">
        <img
          src="/husseinpro.png"
          className="profile-img"
          alt="Hussein EL-Hussein"
        />

        <h1>About Me</h1>

        <p className="bio">
          I am a Computer Science student who enjoys building websites,
          learning new technologies, and creating useful digital
          solutions. My interests include Web Development,
          Artificial Intelligence, Machine Learning,
          Software Engineering, and Robotics.
        </p>

        <section className="section">
          <h2>Project Objective</h2>

          <p>
            This ReactJS portfolio presents my academic courses,
            technical skills, and contact information in a modern,
            responsive web application developed for the
            CSCI390 Web Programming course.
          </p>
        </section>

        <section className="section skills">
          <h2>My Courses & Skills</h2>

          <ul>
            <li><Link to="/robotics">Robotics Advanced</Link></li>
            <li><Link to="/ai">Artificial Intelligence</Link></li>
            <li><Link to="/web">Web Development</Link></li>
            <li><Link to="/cr">Computer Architecture</Link></li>
            <li><Link to="/oop">Object-Oriented Programming Java</Link></li>
            <li><Link to="/ml">Machine Learning</Link></li>
            <li><Link to="/soft">Software Engineering</Link></li>
            <li><Link to="/dl">Digital Logic</Link></li>
          </ul>
        </section>

        <section className="section">
          <h2>Technical Skills</h2>

          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>ReactJS</li>
            <li>Responsive Web Design</li>
            <li>Git & GitHub</li>
            <li>Machine Learning Fundamentals</li>
            <li>Arduino & Robotics</li>
          </ul>
        </section>

        <Link to="/contact" className="btn">
          Contact Me
        </Link>
      </main>
    </>
  );
}

export default Home;