import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function ML() {
  return (
    <>
      <Navbar />

      <div className="course-page">
        <h1>Machine Learning</h1>

        <p className="bio">
          Machine Learning is a branch of Artificial Intelligence that enables
          computers to learn from data, identify patterns, and make predictions
          without being explicitly programmed.
        </p>

        <div className="section">
          <h2>Course Description</h2>
          <p>
            This course introduces the fundamental concepts of Machine Learning,
            including data analysis, model training, prediction techniques,
            and performance evaluation.
          </p>
        </div>

        <div className="section">
          <h2>Topics Covered</h2>
          <ul>
            <li>Introduction to Machine Learning</li>
            <li>Data Collection and Preparation</li>
            <li>Supervised Learning</li>
            <li>Unsupervised Learning</li>
            <li>Model Training</li>
            <li>Prediction and Evaluation</li>
            <li>Data Analysis</li>
            <li>Python Basics for ML</li>
          </ul>
        </div>

        <div className="section">
          <h2>Example Project</h2>
          <p>
            Building a prediction model that estimates future values based on
            historical data and evaluates its accuracy using test datasets.
          </p>
        </div>

        <div className="section">
          <h2>Skills Learned</h2>
          <ul>
            <li>Data Analysis</li>
            <li>Data Preprocessing</li>
            <li>Model Training</li>
            <li>Prediction Systems</li>
            <li>Problem Solving</li>
            <li>Python Programming Basics</li>
          </ul>
        </div>

        <div className="section">
          <h2>Real-Life Applications</h2>
          <p>
            Machine Learning is used in recommendation systems, fraud detection,
            medical diagnosis, image recognition, self-driving cars, virtual
            assistants, and business forecasting.
          </p>
        </div>

        <Link to="/" className="btn">
          ← Back to Home
        </Link>
      </div>
    </>
  );
}

export default ML;