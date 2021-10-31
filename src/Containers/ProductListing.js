import React,{useEffect} from 'react'
import axios from 'axios'
import { useSelector,useDispatch } from 'react-redux'
import ProductComponent from './ProductComponent'
import {setProducts} from '../redux/Actions/ProductAction'
const ProductListing = () => {
    const products = useSelector(state => state)
    const dispatch = useDispatch()
    const fetchProducts =async()=>{
        const response =await axios.get('https://fakestoreapi.com/products')
        .catch((error)=>{
            console.log("err",error);
        })

       dispatch(setProducts(response.data))
    }
    useEffect(()=>{
        fetchProducts();
    },[])
    console.log("Products:",products)
    return (
        <div>
           <div className="ui grid container">
         <ProductComponent/>
           </div>
        </div>
    )
}

export default ProductListing
