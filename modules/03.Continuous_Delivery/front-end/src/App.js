import React, { useEffect } from "react";
import { FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./App.css"; // Custom CSS file for styling

const App = () => {
  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/message")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="container">
      <header className="header">
        <h1>Welcome to Harsha Selvi's DevOps Channel!</h1>
        <p>
          Get the latest DevOps tutorials, tips, and best practices to automate
          your workflow and improve your software development lifecycle.
        </p>
      </header>

      <section className="social-links">
        <h2>Follow Me on:</h2>
        <div className="icons">
          <a
            href="https://www.youtube.com/@harshaselvi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="icon youtube" />
          </a>
          <a
            href="https://www.instagram.com/harsha_selvi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="icon instagram" />
          </a>
          <a
            href="https://www.linkedin.com/in/harsha-js/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="icon linkedin" />
          </a>
        </div>
      </section>

      <footer className="footer">
        <p>Thanks for visiting! Learn more about DevOps with me.</p>
      </footer>
    </div>
  );
};

export default App;
