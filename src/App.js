import './App.css';
import CarouselComp from './components/carousel';

import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from './components/home';

function App() {
  return (
    <div className="App">
      <Header />
      <CarouselComp />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
