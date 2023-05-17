import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/Nav";
import Intro from "./components/Intro";
import Card from "./components/Card";
import About from "./components/About";
import data from "./data";
import Featured from "./components/Featured";
import { ContactUs } from "./components/Contact";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaGithub, FaLinkedin, FaFileContract } from "react-icons/fa";


function App() {
  const cards = data.map((item) => {
    return <Card key={item.title} {...item} />;
  });
  const notify = () => toast("Message sent!");

  return (
    <>
      <Nav id="top-anchor" />
      <section className="page">
        <section className="section-1">
          <Intro />
          <section className="socials">
            <a
              href="https://github.com/pmcmahan1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={60} />
            </a>
            <a
              href="https://www.linkedin.com/in/patrick-mcmahan-736a42234/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={60} />
            </a>
            <a
              href="https://docs.google.com/document/d/e/2PACX-1vRwTa-AohlF4PPmG1jZHU9_Jwtf-IK6u3CoZe6Petj6LRXrUrm1lb6yzKMuB5cmIeHL2azvA9hsZnxM/pub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFileContract size={60} />
            </a>
          </section>
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Featured />
        </section>
        <section className="projects">
          <div className="projects-text">Recent Projects</div>
          <section className="cards-list">{cards}</section>
        </section>
        <div className="contact-head-text" id="contact">
          Contact
        </div>
        <section className="contact">
          <ContactUs notify={notify} />
          <div className="contact-text">
            <div className="contact-text-head">Message me</div>
            <div className="contact-text-body">
              If you have any questions or would like to reach out to me, please
              use the following form. I look forward to hearing from you!
            </div>
          </div>
        </section>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
          theme="light"
        />
      </section>{" "}
    </>
  );
}

export default App;
