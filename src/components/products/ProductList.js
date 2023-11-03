import React, {useCallback, useMemo, useState} from 'react'
import Product from './Product'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
import ReactPaginate from 'react-paginate';
import { GrPrevious, GrNext } from "react-icons/gr";
import EmptyState from './EmptyState';

export default function ProductList(props) {
    const {loader, data} = props
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = useMemo(()=>{return itemOffset + 12},[itemOffset])
    const currentItems = useMemo(()=>{
        return data?.products?.slice(itemOffset, endOffset);
    },[data, itemOffset, endOffset])
    const pageCount = useMemo(()=>{
        return Math.ceil(data?.products?.length / 12);
    },[data])
  
    const handlePageClick = useCallback((event) => {
        const newOffset = (event.selected * 12) % data?.products?.length;
        setItemOffset(newOffset);
      },[data])
  return (
    <Container>
        {loader ? <div className='loading'>Loading</div>:
        <div className='products'>
            <Row>     
            {currentItems.length>0 ? currentItems.map((dataObj) => {
                return (
                    <Product key ={dataObj.id} title={dataObj.title} description={dataObj.description} price={dataObj.price} rating={dataObj.rating} thumbnail={dataObj.thumbnail} />
                );
            }): <EmptyState />}         
            </Row>
            <ReactPaginate
                breakLabel="..."
                nextLabel={<GrNext />}
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel={<GrPrevious />}
                renderOnZeroPageCount={null}
                className="product-pagination clearfix" 
            />
        </div>
        
    }
    </Container>
  )
}
