import 'bootstrap/dist/css/bootstrap.min.css';
import Content from "./Contact/Content";
import Header from "./Home/Header";
import List from './Listing/List';
import Footer from './Home/Footer';
function Listing() {
    return (
        <div>
            <div><Header /></div>
            <div><Content /></div>
            <div><List /></div>
            <div><Footer /></div>
        </div>

    );
  }
  
  export default Listing;