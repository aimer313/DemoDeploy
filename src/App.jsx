import Header from "./my_comp/Header";
import Hero from "./my_comp/Hero";
import Company from "./my_comp/Company";
import "./App.css";
import Residencies from "./my_comp/Residencies";
import Value from "./my_comp/Value";
import Contact from "./my_comp/Contact";
import Getstarted from "./my_comp/Getstarted";
import Footer from "./my_comp/Footer";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>

      <Company />
      <Residencies />
      <Value />
      <Contact />
      <Getstarted />
      <Footer />
    </div>
  );
}

export default App;
