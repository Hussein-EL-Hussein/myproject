import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Contact() {
  return (
    <>
      <Navbar />

      <div className="course-page">
        <h1>Contact Me</h1>

        <p className="bio">
          I am available for web development projects, programming assistance,
          technical consultations, and academic collaborations.
        </p>

        <div className="section">
          <h2>Get In Touch</h2>

          <div className="contact-links">

            <a
              href="https://wa.me/96181041083"
              target="_blank"
              rel="noreferrer"
              className="btn whatsapp"
            >
              📱 WhatsApp
              <br />
              81 041 083
            </a>

            <a
              href="mailto:elhusseinhussei2005@gmail.com"
              className="btn email"
            >
              📧 Email
              <br />
              elhusseinhussei2005@gmail.com
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              className="btn facebook"
            >
              📘 Facebook
            </a>

          </div>
        </div>

        <div className="section">
          <h2>Need a Meeting?</h2>

          <p>
            Click the button below to schedule a meeting and submit your
            project requirements.
          </p>

          <br />

          <Link to="/meeting" className="btn">
            Schedule a Meeting
          </Link>
        </div>

        <Link to="/" className="btn">
          ← Back to Home
        </Link>
      </div>
    </>
  );
}

export default Contact;