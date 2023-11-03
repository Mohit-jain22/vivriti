import React from 'react'
import Container from 'react-bootstrap/Container';

export default function SalesBanner () {
  return (
    <Container>
        <div className='sale-banner'>
            <h1>Title Text</h1>
            <p>Slash Sales begins in June. Get up to 80% Discount on all products <b>Read More</b></p>
        </div>
    </Container>
  )
}
