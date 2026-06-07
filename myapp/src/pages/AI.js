import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function AI() {
  return (
    <div className="course-page">
      <h1>Artificial Intelligence (AI)</h1>

      <p className="bio">
        Artificial Intelligence is a field of computer science that focuses on
        creating systems capable of learning, reasoning, and making decisions
        similar to humans.
      </p>

      <div className="section">
        <h2>Course Description</h2>
        <p>
          This course introduces the fundamentals of Artificial Intelligence,
          including intelligent agents, search techniques, problem solving,
          and decision-making algorithms.
        </p>
      </div>

      <div className="section">
        <h2>Topics Covered</h2>
        <ul>
          <li>Search Algorithms</li>
          <li>Decision Making</li>
          <li>Problem Solving</li>
          <li>Machine Learning Basics</li>
        </ul>
      </div>

      <div className="section">
        <h2>Skills Learned</h2>
        <ul>
          <li>Logical Thinking</li>
          <li>Algorithm Design</li>
          <li>Problem Solving</li>
          <li>Understanding Intelligent Systems</li>
        </ul>
      </div>

      <Link to="/" className="btn">
        ← Back to Home
      </Link>
    </div>
  );
}

export default AI;