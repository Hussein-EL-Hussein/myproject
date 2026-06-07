import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Architecture() {
  return (
    <>
      <Navbar />

      <div className="course-page">
        <h1>Computer Architecture</h1>

        <p className="bio">
          Computer Architecture explains how computers are designed internally,
          including processors, memory systems, and data flow.
        </p>

        <div className="section">
          <h2>Course Description</h2>
          <p>
            This course explains how computer hardware components work together
            to execute instructions and process information efficiently.
          </p>
        </div>

        <div className="section">
          <h2>Topics Covered</h2>
          <ul>
            <li>CPU Structure</li>
            <li>Memory Hierarchy</li>
            <li>Instruction Execution</li>
            <li>Input / Output Systems</li>
          </ul>
        </div>

        <div className="section">
          <h2>Skills Learned</h2>
          <ul>
            <li>Hardware Understanding</li>
            <li>Performance Analysis</li>
            <li>Binary Operations</li>
            <li>System Optimization</li>
          </ul>
        </div>

        <div className="section">
          <h2>Real-Life Applications</h2>
          <p>
            Used in designing computers, servers, smartphones, embedded
            systems, and improving software performance.
          </p>
        </div>

        <Link to="/" className="btn">
          ← Back to Home
        </Link>
      </div>
    </>
  );
}

export default Architecture;