// HomePage
import { FaLinkedin, FaGithub } from "react-icons/fa";
import About from "./About";
import Flashcard from "./Flashcard";

const Home = () => {
  return (
    <>
      <div
        id="home"
        className="hero d-flex align-items-center justify-content-center py-5"
      >
        <div className="hero-content d-flex align-items-center">
          <img
            src="temp-profile-pic.jpg" // Replace with your profile picture URL
            alt="Owen Reedy"
            className="profile-img me-4"
          />
        </div>
        <div>
          <h1>Welcome to My Portfolio</h1>
          <p className="lead">Showcasing my skills and personal projects</p>
          <div className="social-links mt-3">
            <a
              href="https://www.linkedin.com/in/owen-reedy-8331081ab/"
              target="_blank"
              rel="noopener noreferrer"
              className="me-3"
            >
              <FaLinkedin size={32} />
            </a>
            <a
              href="https://github.com/owenreedy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={32} />
            </a>
          </div>
        </div>
      </div>
      <div className="center-container">
        <Flashcard front="About Me" back={<About />} />
      </div>
    </>
  );
};

export default Home;
