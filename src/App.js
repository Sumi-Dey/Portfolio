import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import MyWork from './Components/My Work/MyWork';
import Service from './Components/Services/Service';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Service />
      <MyWork />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
