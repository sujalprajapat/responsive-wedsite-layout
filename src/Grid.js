import 'bootstrap/dist/css/bootstrap.min.css';
import Content from "./Contact/Content";
import Header from "./Home/Header";
import Grids from "./Grid/Grids";
import Footer from "./Home/Footer";
function Grid(){
    return (
        <div>
            <div><Header /></div>
            <div><Content /></div>
            <div><Grids /></div>
            <div><Footer /></div>
        </div>
    );
  }
  
  export default Grid;