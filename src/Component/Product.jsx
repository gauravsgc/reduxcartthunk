import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux'
import { add } from './Store/cartSlice'
//Import product slice to fetch the product:--
import { fetchProducts } from './Store/productSlice1';
//to get the data from redux store:-
import { useSelector } from 'react-redux'
//import status for showing loading:--
import { STATUSES } from './Store/productSlice1';
export default function Product() {
  const dispatch = useDispatch()

    // const [data,setData]=useState([]);
    const {data,status}=useSelector((state)=>state.product)
    useEffect(()=>{
      dispatch(fetchProducts());
// axios.get('https://fakestoreapi.com/products').then(res=>{
//      console.log(res.data);
// setData(res.data);
// }).catch(err=>{
//     console.log(err);
// })

    },[])


    const productAdd=(info)=>{
      // console.log(info);
      dispatch(add(info))
    }

    //
    if(status===STATUSES.LOADING)
    {
return <h2>loading....</h2>;
//u can show your custom component..
    }
    if(status===STATUSES.ERROR)
      {
  return <h2>something went wrong</h2>;
  //u can show your custom component..
      }
  return (
    <div  style={{display:'flex',flexWrap:'wrap'}}>
       
      {data.map(e=>
<div key={e.id}>
{/* {e.image} */}
<img src={e.image} alt="" height='200' width='200' />
<p>{e.category}</p>
<p>{e.price}</p>
<button  onClick={()=>productAdd(e)}>addtocart</button>

    </div>

      )}

    </div>
  )
}
