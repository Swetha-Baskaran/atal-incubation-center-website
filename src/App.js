import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Footer from "./components/Footer"
import Header from "./components/Header"

function App() {
  return (
    <div className="App">
      <Header />
        <Carousel autoPlay showArrows={false} showIndicators={false} showThumbs={false} showStatus={false} stopOnHover={false} label={false} infiniteLoop={true} renderIndicator={false}>
                <div>
                    <img className="img" src="https://www.aicpecf.org/uploads/9/8/0/9/9809129/whatsapp-image-2021-03-05-at-13-17-27_orig.jpeg" />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img className="img" src="https://www.aicpecf.org/uploads/9/8/0/9/9809129/img-20180118-wa0035_orig.jpg" />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img className="img" src="https://www.aicpecf.org/uploads/9/8/0/9/9809129/2p6a4286-1_orig.jpg" />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>
            <Footer />
    </div>
  );
}

export default App;
