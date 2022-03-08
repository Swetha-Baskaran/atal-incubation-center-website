import './App.css';

import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from './components/home';

function App() {

  let change = () => {
     document.querySelector(".nav").classList.toggle("change", window.scrollY > 0)
  }

  window.addEventListener("scroll", ()=>{change()})

  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
