import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/Nav";
import About from "./components/About";
import Card from "./components/Card";
import data from "./data";
import { ContactUs } from "./components/Contact";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const cards = data.map((item) => {
    return <Card key={item.title} {...item} />;
  });
  const notify = () => toast("Message sent!");

  return (
    <>
      <Nav />
      <About />
      <div>Recent Projects:</div>
      <section className="cards-list">{cards}</section>
      <ContactUs notify={notify} />
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
    </>
  );
}

export default App;
