import 'bootstrap/dist/css/bootstrap.min.css';
import Content from "./Contact/Content";
import Header from "./Home/Header";
import Project from './project/Project';
import Footer from './Home/Footer';
function Projectdetail() {
    return (
        <div>
            <div><Header /></div>
            <div><Content /></div>
            <div><Project /></div>
            {/* <div><Footer /></div> */}
        </div>

    );
  }
  
  export default Projectdetail;