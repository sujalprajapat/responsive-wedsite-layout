import 'bootstrap/dist/css/bootstrap.min.css';
import Content from "./Contact/Content";
import Header from "./Home/Header";
import About from './About/About';
import Footer from './Home/Footer';
function Aboutus() {
    return (
        <div>
            <div><Header /></div>
            <div><Content /></div>
            <div><About /></div>
            <div><Footer /></div>
        </div>

    );
  }
  
  export default Aboutus;