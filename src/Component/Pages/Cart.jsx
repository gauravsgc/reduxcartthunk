import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { remove } from '../Store/cartSlice'
export default function Cart() {
  const count = useSelector((state) => state.cart);
  const dispatch = useDispatch()

   console.log(count);
   const handleRemove=(id)=>{
dispatch(remove(id));
   }
  return (
    <div>
     {count.map((e)=><div key={e.id}>
     <p>{e.category} {e.price}
     <img src={e.image} alt="" height='200' width='200' />
     <button onClick={()=>handleRemove(e.id)}>Remove from cart</button>
     {/* {()=>productAdd(e)} */}
     </p>
     </div>)}
    </div>
  )
}
