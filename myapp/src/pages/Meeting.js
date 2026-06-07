import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Meeting() {
    return (
        <>
            <Navbar />

            <div className="course-page">
                <h1>Schedule a Consultation</h1>

                <p className="bio">
                    Submit your details below to request a meeting and discuss your
                    project requirements professionally.
                </p>

                <div className="section">
                    <form className="meeting-form">
                        <h2>Personal Information</h2>

                        <label>Full Name</label>
                        <input type="text" placeholder="Enter your full name" required />

                        <label>Email Address</label>
                        <input type="email" placeholder="example@gmail.com" required />

                        <label>Phone Number</label>
                        <input type="tel" placeholder="+961 81 041 083" required />

                        <label>Age</label>
                        <input type="number" min="18" max="70" placeholder="Enter your age" required />

                        <h2>Project Information</h2>

                        <label>Service Required</label>
                        <select required>
                            <option value="">Select a service</option>
                            <option>Website Development</option>
                            <option>ReactJS Frontend Application</option>
                            <option>Artificial Intelligence Project</option>
                            <option>Machine Learning Project</option>
                            <option>Java / OOP Application</option>
                            <option>Robotics / Arduino Project</option>
                            <option>Software Engineering Consultation</option>
                        </select>



                        <label>Preferred Meeting Date</label>
                        <input type="date" required />

                        <label>Project Details</label>
                        <textarea
                            rows="6"
                            placeholder="Briefly describe your project or the support you need..."
                        ></textarea>

                        <button type="submit" className="btn submit-btn">
                            Submit Request
                        </button>
                    </form>
                </div>

                <Link to="/contact" className="btn">
                    ← Back to Contact
                </Link>
            </div>
        </>
    );
}

export default Meeting;