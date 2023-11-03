import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsBasket2, BsSearch } from "react-icons/bs";
import logo from '../../assets/images/logo.png'
import debounce from 'lodash/debounce'

export default function Header(props) {
  const debouncedSearchHandler = debounce(props.onChangeHandler, 500)
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand className='m-0 p-0' href="#"><img className='logo-header' src={logo} alt="Logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Form className="d-flex ms-4 search-form">
            <Form.Control
              type="What do you want to buy today?"
              placeholder="What do you want to buy today?"
              className="me-2"
              aria-label="What do you want to buy today?"
              onChange={debouncedSearchHandler}
            />
            <Button className='search-btn' ><BsSearch color={'#000'}/></Button>
          </Form>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='pe-4' href="#action1">Store</Nav.Link>
            <Nav.Link className='pe-4' href="#action2">Account</Nav.Link>
            <Nav.Link className='pe-4' href="#action2">Wishlist</Nav.Link>
            <Nav.Link className='active' href="#action2">Basket <BsBasket2 className='basket'/></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
