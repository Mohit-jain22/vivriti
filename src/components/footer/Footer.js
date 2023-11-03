import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { BsTwitter, BsInstagram, BsMusicNote, BsAndroid2, BsApple } from "react-icons/bs";
import { BiLogoSnapchat, BiLogoFacebook } from "react-icons/bi";
import payment from '../../assets/images/payment.png'

export default function Footer() {
  return (
    <footer>
        <Container>
           <Row>
                <Col lg={6} className='links-hide'>
                    <Row>
                        <Col lg={4}>
                            <h6>Company Info</h6>
                            <ul>
                                <li>About</li>
                                <li>Social Responsibility</li>
                                <li>Affiliate</li>
                                <li>Fashion Blogger</li>
                            </ul>
                        </Col>
                        <Col lg={4}>
                            <h6>Help & Support</h6>
                            <ul>
                                <li>Shipping Info</li>
                                <li>Returns</li>
                                <li>How to Order</li>
                                <li>How to Track</li>
                                <li>Size Chart</li>
                            </ul>
                        </Col>
                        <Col lg={4}>
                            <h6>Customer Care</h6>
                            <ul>
                                <li>Contact Us</li>
                                <li>Payment</li>
                                <li>Bonus Point</li>
                                <li>Notices</li>
                            </ul>
                        </Col>
                    </Row>
                </Col>
                <Col lg={6}>
                    <Row>
                        <Col lg={8} sm={9}>
                            <h6>Socials</h6>
                            <ul className='social-icons'>
                                <li><BiLogoFacebook size={20} color={'#fff'}/></li>
                                <li><BsTwitter size={20} color={'#fff'}/></li>
                                <li><BsInstagram size={20} color={'#fff'}/></li>
                                <li><BsMusicNote size={20} color={'#fff'}/></li>
                                <li><BiLogoSnapchat size={20} color={'#fff'}/></li>
                            </ul>                  
                        </Col>
                        <Col lg={4} sm={3}>
                            <h6>Platforms</h6>
                            <ul className='platforms'>
                                <li><BsAndroid2 size={40} color={'#252b3a'}/></li>
                                <li><BsApple size={40} color={'252b3a'}/></li>
                            </ul>  
                        </Col>
                    </Row>
                    <Row className='mt-4'>
                        <Col>
                            <h6>Sign Up</h6>
                            <Form className="d-flex subscribe-form">
                                <Form.Control
                                type="email"
                                placeholder="Your email"
                                className="me-2"
                                aria-label="Your email"
                                />
                                <Button className='subscribe'>Subscribe</Button>
                            </Form>
                            <p className='subscribe-text'>By Clicking the SUBSCRIBE button, you are agreeing to our <a href='#'>Privacy & Cookie Policy</a></p>
                        </Col>
                    </Row>
                </Col>
           </Row>
           <Row>
                <Col lg={6}>
                    <Row className='mt-5 copyrights'>
                        <Col lg={8}>
                            <p>© 2010 - 2023 All Rights Reserved</p>
                            <ul className='copyrights-link'>
                                <li><a href="#<">Privacy Center</a></li>
                                <li><a href="#<">Privacy & Cookie Policy</a></li>
                                <li><a href="#<">Manage Cookies</a></li>
                                <li><a href="#<">Terms & Conditions</a></li>
                                <li><a href="#<">Copyrights Notice</a></li>
                                <li><a href="#<">Imprint</a></li>
                            </ul>
                        </Col>
                    </Row>
                </Col>
                <Col lg={6} className='links-hide'>
                    <Row className='mt-5'>
                        <Col lg={9}>
                            <h6>We Accept</h6>
                            <img className='payment-icon' src={payment} alt="Payment Method"/>
                        </Col>
                    </Row>
                </Col>
           </Row>
        </Container>
    </footer>
  )
}
