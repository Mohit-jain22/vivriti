import React, {useEffect, useState} from 'react'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { categoryFilterUrl } from '../../constants';
import useData from '../../hooks/useData';

export default function ProductCategoryFilter(props) {
  const {data, loader, fetchData} = useData();
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  useEffect(() => {
    if(isInitialLoad){
      fetchData(categoryFilterUrl);
      setIsInitialLoad(false);
  }
    }, [isInitialLoad, fetchData]);
  return (
    <Container>
        <Form.Select className="product-category" aria-label="Default select example" onChange={props.onChangeHandler}>
          {loader ? <option>Loading</option>:<><option value="select_category">Select Category</option>
          {data.map((dataObj) => {
                return (
                  <option key={dataObj} value={dataObj}>{dataObj}</option>
                );
            })}   </>}
        </Form.Select>
      
    </Container>
  )
}
