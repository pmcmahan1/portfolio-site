import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/Nav";
import Intro from "./components/Intro";
import Card from "./components/Card";
import About from "./components/About";
import data from "./data";
import { ContactUs } from "./components/Contact";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function App() {
  const cards = data.map((item) => {
    return <Card key={item.title} {...item} />;
  });
  const notify = () => toast("Message sent!");

  return (
    <>
      <Nav id="top-anchor"/>
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
      </section>
      </section>
      <section id="about">
        < About />
      </section>
      <section id="projects" className="cards-list">{cards}</section>
      <ContactUs notify={notify}/>
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

</section>    </>
  );
}

export default App;
