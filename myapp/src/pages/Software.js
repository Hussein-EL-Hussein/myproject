import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Software() {
    return (
        <>
            <Navbar />

            <div className="course-page">
                <h1>Software Engineering</h1>

                <p className="bio">
                    Software Engineering focuses on designing, developing, testing,
                    and maintaining software systems using structured methodologies
                    and industry best practices.
                </p>

                <div className="section">
                    <h2>Course Description</h2>
                    <p>
                        This course introduces the principles of software development,
                        including planning, requirements analysis, system design,
                        implementation, testing, deployment, and maintenance.
                    </p>
                </div>

                <div className="section">
                    <h2>Topics Covered</h2>
                    <ul>
                        <li>Software Development Life Cycle (SDLC)</li>
                        <li>Requirements Analysis</li>
                        <li>System Design</li>
                        <li>Software Testing</li>
                        <li>Debugging Techniques</li>
                        <li>Project Management</li>
                        <li>Documentation</li>
                        <li>Quality Assurance</li>
                    </ul>
                </div>

                <div className="section">
                    <h2>Example Project</h2>
                    <p>
                        Developing a complete web application from planning and analysis
                        through design, coding, testing, deployment, and documentation.
                    </p>
                </div>

                <div className="section">
                    <h2>Skills Learned</h2>
                    <ul>
                        <li>Project Planning</li>
                        <li>System Analysis</li>
                        <li>Software Design</li>
                        <li>Testing and Debugging</li>
                        <li>Team Collaboration</li>
                        <li>Technical Documentation</li>
                    </ul>
                </div>

                <div className="section">
                    <h2>Real-Life Applications</h2>
                    <p>
                        Software Engineering is used in developing websites, mobile
                        applications, banking systems, healthcare platforms,
                        enterprise software, and large-scale business solutions.
                    </p>
                </div>

                <Link to="/" className="btn">
                    ← Back to Home
                </Link>
            </div>
        </>
    );
}

export default Software;