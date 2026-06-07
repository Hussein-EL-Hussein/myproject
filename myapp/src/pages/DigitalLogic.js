import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function DigitalLogic() {
  return (
    <>
      <Navbar />

      <div className="course-page">
        <h1>Digital Logic</h1>

        <p className="bio">
          Digital Logic is the foundation of computer systems and digital
          electronics. It focuses on binary numbers, logic gates, and the
          design of digital circuits used in modern computers.
        </p>

        <div className="section">
          <h2>Course Description</h2>
          <p>
            This course introduces the principles of digital systems,
            including binary arithmetic, logic gates, combinational circuits,
            and sequential circuits used in computer hardware design.
          </p>
        </div>

        <div className="section">
          <h2>Topics Covered</h2>
          <ul>
            <li>Binary Number Systems</li>
            <li>Boolean Algebra</li>
            <li>Logic Gates (AND, OR, NOT, XOR)</li>
            <li>Combinational Circuits</li>
            <li>Sequential Circuits</li>
            <li>Flip-Flops and Registers</li>
            <li>Multiplexers and Decoders</li>
            <li>Digital Circuit Design</li>
          </ul>
        </div>

        <div className="section">
          <h2>Example Project</h2>
          <p>
            Design and simulation of digital circuits using logic gates
            to perform arithmetic and decision-making operations.
          </p>
        </div>

        <div className="section">
          <h2>Skills Learned</h2>
          <ul>
            <li>Logic Gate Design</li>
            <li>Circuit Analysis</li>
            <li>Boolean Algebra Simplification</li>
            <li>Digital System Design</li>
            <li>Problem Solving</li>
            <li>Hardware Fundamentals</li>
          </ul>
        </div>

        <div className="section">
          <h2>Real-Life Applications</h2>
          <p>
            Digital Logic is used in computer processors, memory systems,
            embedded systems, smartphones, calculators, communication devices,
            and virtually all modern electronic equipment.
          </p>
        </div>

        <Link to="/" className="btn">
          ← Back to Home
        </Link>
      </div>
    </>
  );
}

export default DigitalLogic;