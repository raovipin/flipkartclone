import React from 'react'
import Homenavigation from './Homenavigation'
import Carousel from './Carousels'
import { useEffect } from 'react'
import Slides from './homecontentslide'
import { getProducts } from '../../redux/action/productaction'
import { useDispatch,useSelector } from 'react-redux'
const Homepage = () => {

const {products} = useSelector(state =>state.getProducts);




 const dispatch =useDispatch();

  useEffect(()=>{
    dispatch(getProducts());
  },[dispatch])
  return (
    <div>
    <Homenavigation/>
    <div style={{padding:"10px",backgroundColor:"#F2F2F2"}}>

    <Carousel/>
    <Slides products={products} deal={"Best of Electronics"}/>
    <Slides products={products} deal={"Beauty, Food, Toys & more"}/>
    <Slides products={products} deal={"Vacay Travel Essentials"}/>
    <Slides products={products} deal={"Summer Wedding Edit"}/>
    <Slides products={products} deal={"Sports, Healthcare & more"}/>
    </div>
    </div>
  )
}

export default Homepage
