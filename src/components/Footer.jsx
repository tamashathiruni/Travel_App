import "./footer.css"
import {Container,Row,Col,ListGroup,ListGroupItem} from 'reactstrap';
import {Link, link} from 'react-router-dom';
import { faLocationDot, faAt, faPhone} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const quick__links=[
    {
      path:'/home',
      display:'Home',
    },
    {
      path:'/about',
      display:'About',
    },
    {
      path:'/tours',
      display:'Tours',
    },
  ];
  const quick__links2=[
    {
      path:'/gallery',
      display:'Gallery',
    },
    {
      path:'/login',
      display:'Login',
    },
    {
      path:'/register',
      display:'Register',
    },
  ];
  
  
  const Footer = () => {
  
    return (
      <footer className='footercontainer'>
        <Container>
          <Row>
            <Col lg='3'>
              <div className="logo">
                <img className="logoimage" src="hotel_images/Logo.jpg" alt="logoImg" />
                <p className="footerpara">HolidayCentral is a personalized travel agency that provides stress-free and memorable travel experiences.</p>
                <div className="social__links d-flex align-items-center gap-4">
                  <span>
                    <Link to='#'><i class="ri-youtube-line">
                    </i>
                    </Link>
                  </span>
                  <span>
                    <Link to='#'><i class="ri-github-fill">
                    </i>
                    </Link>
                  </span>
                  <span>
                    <Link to='#'><i class="ri-facebook-circle-line">
                    </i>
                    </Link>
                  </span>
                  <span>
                    <Link to='#'><i class="ri-instagram-line">
                    </i>
                    </Link>
                  </span>
  
                </div> 
              </div>
            </Col>
            <Col lg='3'>
            <br></br>
              <h5 className='footerlinktitle'>Discover</h5>
              <ListGroup className='footer__quick-links'>
                {
                  quick__links.map((item,index)=>(
                    <ListGroupItem key={index}className='ps-0 border-0'>
                      <Link to={item.path}>{item.display}</Link>
                    </ListGroupItem>
                   ))
                }
              </ListGroup>
            </Col>
            <Col lg='3'>
            <br></br>
              <h5 className='footer__link-title'>Discover</h5>
              <ListGroup className='footer__quick-links'>
                {
                  quick__links2.map((item,index)=>(
                    <ListGroupItem key={index}className='ps-0 border-0'>
                      <Link to={item.path}>{item.display}</Link>
                    </ListGroupItem>
                   ))
                }
              </ListGroup>
            </Col> 
            
            <Col lg='3'>
            <br></br>
            <h5 className='footer__link-title'>Contact</h5>
              <ListGroup className='footer__quick-links'>
                    <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                      <h6 className='mb-0 d-flex align-items-center gap-2'>
                        <span><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon></span>
                        Address:
                      </h6>
                      <p className='mb-0'>HolidayCentral,Colombo</p>
                    </ListGroupItem>
                    <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                      <h6 className='mb-0 d-flex align-items-center gap-2'>
                        <span><FontAwesomeIcon icon={faAt}></FontAwesomeIcon></span>
                        Email:
                      </h6>
                      <p className='mb-0'>holidaycentral@gmail.com</p>
                    </ListGroupItem>
                    <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                      <h6 className='mb-0 d-flex align-items-center gap-2'>
                        <span><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon></span>
                        Phone:
                      </h6>
                      <p className='mb-0'>+94 11 224 4665</p>
                    </ListGroupItem>
              </ListGroup>
            </Col>
          </Row>
        </Container>
  
      </footer>
  
    )
  };
  
  export default  Footer;


