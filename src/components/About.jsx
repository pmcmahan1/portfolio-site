import Carousel from "react-bootstrap/Carousel";

export default function About() {
  return (
    <div className="about">
      <div>Hello!</div>
      <div>
        My name is Patrick McMahan. I'm an inspiring web developer based in
        Cincinnati, Ohio. Currently, I'm focused on expanding my skillset
        primarily using React. If you would like to see my recent work, please
        view my projects below!
      </div>
      <div>Socials:</div>
      <div className="social-links">
        <a href="https://github.com/pmcmahan1" target="_blank" rel="noopener noreferrer">
            <img src="src\assets\github.svg"></img>     
        </a>
        <a href="https://www.linkedin.com/in/patrick-mcmahan-736a42234/" target="_blank" rel="noopener noreferrer">
            <img src="src\assets\linkedin.svg"></img>     
        </a>
      </div>
    </div>
  );
}
