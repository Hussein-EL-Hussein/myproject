import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Web() {
  return (
    <>
      <Navbar />

      <div className="course-page">
        <h1>Web Development</h1>

        <p className="bio">
          Web Development focuses on designing and building modern websites and
          web applications using frontend and backend technologies.
        </p>

        <div className="section">
          <h2>Course Description</h2>
          <p>
            This course introduces the fundamentals of web development,
            including HTML, CSS, JavaScript, responsive design, and modern
            frameworks used to build interactive websites.
          </p>
        </div>

        <div className="section">
          <h2>Topics Covered</h2>
          <ul>
            <li>HTML5 Structure</li>
            <li>CSS3 Styling</li>
            <li>JavaScript Fundamentals</li>
            <li>Responsive Web Design</li>
            <li>ReactJS Basics</li>
            <li>Web User Interfaces</li>
          </ul>
        </div>

        <div className="section">
          <h2>Example Project</h2>
          <p>
            Personal portfolio website developed using HTML, CSS, JavaScript,
            and ReactJS featuring multiple pages, navigation, and responsive
            design.
          </p>
        </div>

        <div className="section">
          <h2>Skills Learned</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>ReactJS</li>
            <li>Responsive Design</li>
            <li>User Interface Design</li>
          </ul>
        </div>

        <div className="section">
          <h2>Real-Life Applications</h2>
          <p>
            Web development is used to create business websites, e-commerce
            platforms, educational portals, social media applications, and
            online services.
          </p>
        </div>

        <Link to="/" className="btn">
          ← Back to Home
        </Link>
      </div>
    </>
  );
}

export default Web;