import './Contact.css';
// import '../App.css';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import map from "../img/contact2.jpg";
function Findus() {
    return (
        <div>
            <div className='space '>
                <Container>
                <h2 className='p-3'>WHERE TO FIND US</h2>
                <div className='find_us '>
                    <div className=''>
                        <div className='find_text '>
                            <input type='text' placeholder='NAME'></input>
                        </div>
                        <div className='find_text'>
                            <input type='email' placeholder='EMAIL'></input>
                        </div>
                        <div className='find_text'>
                            <textarea placeholder='MESSAGE' ></textarea>
                        </div>
                        <div className='find-text'>
                            <li className='pt-4'><a>SUBMIT</a></li>
                        </div>
                        <div className='contact_detail '>
                        <div>
                            <h5>PHONE NUMBER</h5>
                            <p>(456) 789 10 12</p>
                        </div>
                        <div>
                            <h5>EMAIL ADDRESS</h5>
                            <p>Moderninfo@gmail.com</p>
                        </div>
                        <div>
                            <h5>ADDRESS INFO</h5>
                            <p>55/11 Land Street, Modern New Yourk City, USA</p>
                        </div>
                    </div>
                    </div>
                </div>
                </Container>
            </div>
            <div className='contact_map'>
                            <img src={map}></img>
                        </div>
            </div>
        
        
    )
}
export default Findus;