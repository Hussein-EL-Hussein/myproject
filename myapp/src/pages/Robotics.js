import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Robotics() {
  return (
    <>
      <Navbar />

      <div className="course-page">
        <h1>Robotics Advanced</h1>

        <p className="bio">
          Robotics combines programming, electronics, sensors, and automation
          to create intelligent systems capable of performing tasks
          automatically.
        </p>

        <div className="section">
          <h2>Course Description</h2>
          <p>
            This course focuses on advanced robotics concepts including
            microcontrollers, sensors, actuators, automation systems,
            and embedded programming.
          </p>
        </div>

        <div className="section">
          <h2>Topics Covered</h2>
          <ul>
            <li>Arduino Programming</li>
            <li>Sensor Integration</li>
            <li>Automation Systems</li>
            <li>Microcontrollers</li>
            <li>Electronic Circuits</li>
            <li>Robotic Control Systems</li>
          </ul>
        </div>

        <div className="section">
          <h2>Example Project</h2>
          <p>
            Smart security system using PIR sensors, keypad, LCD display,
            alarm system, and Arduino controller.
          </p>
        </div>

        <div className="section">
          <h2>Skills Learned</h2>
          <ul>
            <li>Arduino Development</li>
            <li>Circuit Design</li>
            <li>Sensor Programming</li>
            <li>Hardware Troubleshooting</li>
            <li>Embedded Systems</li>
          </ul>
        </div>

        <div className="section">
          <h2>Real-Life Applications</h2>
          <p>
            Robotics is used in manufacturing, smart homes, healthcare,
            autonomous vehicles, industrial automation, and security systems.
          </p>
        </div>

        <Link to="/" className="btn">
          ← Back to Home
        </Link>
      </div>
    </>
  );
}

export default Robotics;