import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,  Form, FormGroup, Label, Input, Row, Col
   } from 'reactstrap';


   

const Modalnew = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button onClick={toggle} class="nav-item" color='success'>{props.text}</Button>
      
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Select Tickets</ModalHeader>
        <ModalBody>
        <Form>
            <FormGroup>
              <Label for="exampleSelect">Select Movie</Label>
              <Input type="select" name="select" id="movieSelect">
                <option>The Goonies</option>
                <option>Teen Wolf</option>
                <option>After Hours</option>
                <option>Day of the Dead</option>               
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">Select Day</Label>
              <Input type="select" name="select" id="daySelect">
                <option>Wed</option>
                <option>Thur</option>
                <option>Fri</option>
                <option>Sat</option>               
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">Select Time</Label>
              <Input type="select" name="select" id="timeSelect">
                <option> 03.45 pm (The Goonies)</option>
                <option> 06.00 pm (The Goonies)</option>
                <option> 06.00 pm (Teen Wolf)</option>
                <option> 07.30 pm (The Goonies)</option>
                <option> 08.00 pm (Teen Wolf)</option>              
                <option> 08.00 pm (After Hours)</option>
                <option> 10.00 pm (After Hours)</option>
                <option> 12.00 am (Day of the Dead)</option>               
              </Input>
            </FormGroup>
            <Row className="row-content align-items-center">
            <FormGroup className="p-3">
              <Label for="exampleSelect">Adult</Label>
              <Input type="select" name="select" id="numseatSelect">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>             
              </Input>
            </FormGroup>
            <FormGroup className="p-3">
              <Label for="exampleSelect">Senior</Label>
              <Input type="select" name="select" id="numseatSelect">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>               
              </Input>
            </FormGroup>
            <FormGroup className="p-3">
              <Label for="exampleSelect">Child</Label>
              <Input type="select" name="select" id="numseatSelect">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>              
              </Input>
            </FormGroup>
            </Row>
            <FormGroup tag="fieldset">
              <legend>Snacks</legend>  
            
                <FormGroup check> 
                  <Row>
                    <Col>
                      <Label check >                                    
                        <Input type="radio" name="radio1" />{' '} 
                        Large Popcorn
                      </Label>        
                    </Col> 
                    <Col>
                      <Label check >                                   
                        <Input type="radio" name="radio2" />{' '} 
                        Small Popcorn
                      </Label>   
                    </Col>   
                  </Row> 
                  <Row>
                    <Col>
                      <Label check >                                    
                        <Input type="radio" name="radio1" />{' '} 
                        Large Soda
                      </Label>        
                    </Col> 
                    <Col>
                      <Label check >                                   
                        <Input type="radio" name="radio2" />{' '} 
                        Small Soda
                      </Label>   
                    </Col>   
                  </Row> 
                  <Row>
                    <Col>
                      <Label check >                                    
                        <Input type="radio" name="radio1" />{' '} 
                        Hot Dog
                      </Label>        
                    </Col>                      
                  </Row>                                
                </FormGroup>              
                               
            </FormGroup>          
    </Form>
                
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={toggle}>Buy Tickets</Button>{' '}
          <Button color="danger" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default Modalnew;