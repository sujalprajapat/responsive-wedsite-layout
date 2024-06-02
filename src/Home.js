import Header from "./Home/Header";
import Slider from "./Home/Slider1";
import Welcome from "./Home/Welcome";
import Latest_pro from "./Home/Latest_pro";
import Latest_blog from "./Home/latest_blog";
import Fact from "./Home/Fact";
import Testimonial from "./Home/Testimonial";
import Footer from "./Home/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
function Home() {
    return (
        <div>
            <div><Header /> </div>
             <div><Slider /></div>
              <div><Welcome /></div>
              <div><Latest_pro /></div>
            <div><Latest_blog /></div>
            <div><Fact /></div>
            <Testimonial />
            <Footer /> 
        </div>

    );
  }
  
  export default Home;