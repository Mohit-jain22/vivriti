import React, {useCallback, useEffect, useState} from 'react'
import ProductCategoryFilter from './ProductCategoryFilter';
import Header from '../headers/Header';
import SalesBanner from '../headers/SalesBanner';
import ProductList from './ProductList';
import { categoryUrl, productUrl, searchUrl } from '../../constants';
import useData from '../../hooks/useData';

export default function Products() {
    const {data, loader, fetchData} = useData();
    const [isInitialLoad, setIsInitialLoad] = useState(true);
    const onChangeCategoryHandler = useCallback((e) =>{
        if(e.target.value === "select_category"){
            fetchData(productUrl);
            return;
        }
        fetchData(`${categoryUrl}/${e.target.value}`);
    },[fetchData]) 
    const onChangeSearchHandler = useCallback((e) =>{
        fetchData(`${searchUrl}?q=${e.target.value}`);
    },[fetchData])
    useEffect(() => {
        if(isInitialLoad){
            fetchData(productUrl);
            setIsInitialLoad(false);
        }
        }, [fetchData, isInitialLoad]);
  return (
    <>
        <Header onChangeHandler={onChangeSearchHandler}/>
        <SalesBanner />
        <ProductCategoryFilter onChangeHandler={onChangeCategoryHandler}/>
        <ProductList loader={loader} data={data} />
    </>
  )
}
