// import logo from './logo.svg'; 
import './App.css';
// import '../Contact.css';
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Contactus from "./Contactus";
import Listing from './Listing';
import Grid from './Grid';
import Projectdetail from './Projectdetail';
import Aboutus from './Aboutus';
function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <Contactus /> */}
      {/* <Listing /> */}
      {/* <Grid /> */}
      {/* <Projectdetail /> */}
      <Routes>
        <Route path="/" element={ <Home/> } />  
        <Route path="/Home" element={ <Home/> } />  
        <Route path="/Contactus" element={ <Contactus/> } />
        <Route path="/Listing" element={ <Listing/> } />
        <Route path="/Grid" element={ <Grid/> } />
        <Route path="/Projectdetail" element={ <Projectdetail/> } />
        
      </Routes>
    </div>
  );
}

export default App;
