import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function OOP() {
  return (
    <>
      <Navbar />

      <div className="course-page">
        <h1>Object-Oriented Programming (Java)</h1>

        <p className="bio">
          Object-Oriented Programming (OOP) is a programming paradigm that
          organizes software design around objects, making programs more
          modular, reusable, and easier to maintain.
        </p>

        <div className="section">
          <h2>Course Description</h2>
          <p>
            This course introduces Java programming and the core concepts of
            Object-Oriented Programming, enabling students to design and build
            structured software applications.
          </p>
        </div>

        <div className="section">
          <h2>Topics Covered</h2>
          <ul>
            <li>Classes and Objects</li>
            <li>Constructors</li>
            <li>Encapsulation</li>
            <li>Inheritance</li>
            <li>Polymorphism</li>
            <li>Abstraction</li>
            <li>Exception Handling</li>
            <li>Java Collections</li>
          </ul>
        </div>

        <div className="section">
          <h2>Example Project</h2>
          <p>
            Student Management System developed in Java using classes,
            objects, inheritance, and data management techniques.
          </p>
        </div>

        <div className="section">
          <h2>Skills Learned</h2>
          <ul>
            <li>Java Programming</li>
            <li>Classes & Objects</li>
            <li>Inheritance</li>
            <li>Polymorphism</li>
            <li>Problem Solving</li>
            <li>Software Design</li>
          </ul>
        </div>

        <div className="section">
          <h2>Real-Life Applications</h2>
          <p>
            OOP principles are used in enterprise software, mobile applications,
            banking systems, management systems, games, and large-scale software
            development projects.
          </p>
        </div>

        <Link to="/" className="btn">
          ← Back to Home
        </Link>
      </div>
    </>
  );
}

export default OOP;