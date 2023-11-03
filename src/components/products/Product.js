import React from 'react'
import Col from 'react-bootstrap/Col';
import { Rating } from 'react-simple-star-rating'
import { AiOutlineHeart } from "react-icons/ai";

export default function Product(props) {
  return (
    <Col lg={3} sm={6}>
        <div className='product'>
          <div className='wislist'><AiOutlineHeart className='wishlist-icon'/></div>
          <img className='product-image' src = {props.thumbnail} alt={props.title}/>
          <div className='product-details'>
              <h4>{props.title}</h4>
              <p>Product Description: {props?.description?.substring(0, 40)}...</p>
              <h5>${props.price}</h5>
              <Rating initialValue ={props.rating} readonly={true} size={20}/>
          </div>
        </div>
    </Col>
  )
}
