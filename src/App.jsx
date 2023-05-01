
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';
import About from './components/About';
import Card from './components/Card';
import data from './data';
import { ContactUs } from './components/Contact';


function App() {
  const cards = data.map(item => {
    return (
      <Card
      key={item.title}
      {...item}
      />
    )
  })

  return (
    <>
      <Nav />
      <About />
      <div>Recent Projects:</div>
      <section className="cards-list">
        {cards}
      </section>
      <ContactUs />
    </>
  )
}

export default App
