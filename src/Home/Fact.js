import { Container,Row,Col } from 'react-bootstrap';
function Fact() {
    return(
       
        <div className='sec4'>
             <Container>
         <Row className='row-col-1 row-col-lg-2'>
            <Col className='content col-12 col-lg'>
               <h3>Some</h3>
               <h5>Intresting Facts</h5>
               <p>Morbi mattis ex non urna condimentum, eget eleif end diam molestie. Curabitur lorem enim, maximus non nulla sed, egestas venenatis felis.</p>
            </Col>
            <Col className='content1 d-block d-md-flex justify-content-between align-items-center col-12 col-lg pt-5'>
              <div>
              <h5>431</h5>
              <p>Happy Clients</p>
              </div>
              <div>
              <h5>431</h5>
              <p>Happy Clients</p>
              </div>
              <div>
              <h5>431</h5>
              <p>Happy Clients</p>
              </div>
            </Col>
        </Row>
        </Container>
    </div>
   
    )
}
export default Fact;