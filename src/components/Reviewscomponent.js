import React, { Component } from 'react';
import { Container, Row, Col
  } from 'reactstrap';
  import { baseUrl } from '../shared/baseUrl';
import * as reviews from '../shared/reviews';



const Comments = (props) => {
return (
        <div>
        <text>{props.comments}</text>
        <p className='author'>{props.author}</p>
        </div>
    )       
};

class Reviews extends Component {
 render(){
     return(
         <React.Fragment>  
            <div className='p-3'></div>
             <Container className='review'>
                <Row className="row-content align-items-center p-2">             
                    <Col sm={{ size: 'auto', offset: 2 }}>
                    <img className="img-fluid"  src={baseUrl + "/image/EscapefromNY_POSTER_RESIZE.jpg"} alt="escape from new york poster" width="200px"/>
                    </Col>                                
                    <Col >
                    <Comments comments={reviews.reviewOne} author={reviews.authorOne}/>
                    <Comments comments={reviews.reviewTwo} author={reviews.authorTwo}/>
                    <Comments comments={reviews.reviewThree} author={reviews.authorThree}/>
                    <Comments comments={reviews.reviewFour} author={reviews.authorFour}/>
                    </Col>
                </Row>
            </Container>      
            <div className='p-3'></div>
            <div className='p-3'></div>
             <Container className='review'>
                <Row className="row-content align-items-center p-2">             
                    <Col sm={{ size: 'auto', offset: 2 }}>
                    <img className="img-fluid"  src={baseUrl + "/image/RiskyBusiness_POSTERESIZE.jpg"} alt="risky business poster" width="200px"/>
                    </Col>                                
                    <Col >
                    <Comments comments={reviews.reviewFive} author={reviews.authorFive}/>
                    <Comments comments={reviews.reviewSix} author={reviews.authorSix}/>
                    <Comments comments={reviews.reviewSeven} author={reviews.authorSeven}/>
                    <Comments comments={reviews.reviewEight} author={reviews.authorEight}/>
                    </Col>
                </Row>
            </Container>      
            <div className='p-3'></div>
            <div className='p-3'></div>
             <Container className='review'>
                <Row className="row-content align-items-center p-2">             
                    <Col sm={{ size: 'auto', offset: 2 }}>
                    <img className="img-fluid"  src={baseUrl + "/image/FirstBlood_POSTER_RESIZE.jpg"} alt="first blood poster" width="200px"/>
                    </Col>                                
                    <Col >
                    <Comments comments={reviews.reviewNine} author={reviews.authorNine}/>
                    <Comments comments={reviews.reviewTen} author={reviews.authorTen}/>
                    <Comments comments={reviews.reviewEleven} author={reviews.authorEleven}/>
                    <Comments comments={reviews.reviewTwelve} author={reviews.authorTwelve}/>
                    </Col>
                </Row>
            </Container>      
            <div className='p-3'></div>
          
         </React.Fragment>
     )
 }
};

export default Reviews;