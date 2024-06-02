import 'bootstrap/dist/css/bootstrap.min.css';
import Content from "./Contact/Content";
import Header from "./Home/Header";
import Findus from './Contact/Findus';
import Footer from './Home/Footer';
function Contactus() {
    return (
        <div>
            <div><Header /></div>
            <div><Content /></div>
            <div><Findus /></div>
            <div><Footer /></div>
        </div>

    );
  }
  
  export default Contactus;