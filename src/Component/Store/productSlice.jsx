import { createSlice } from '@reduxjs/toolkit'

// const STATUSES={
//     IDLE:'idle',
//     ERROR:'error',
//     LOADING:'loading'
// };
//if we dont want to change the status so we can freeze this:
//export bz this we can use for showing loading...
export const STATUSES=Object.freeze({
    IDLE:'idle',
    ERROR:'error',
    LOADING:'loading'
});
const productslice=createSlice({
    name:'product',
    //initial state:-object api call status has to track like resolve error state :-
    initialState:{
        data:[],//list of products
        status:STATUSES.IDLE
        
        //like loading error fetched:'idle'//enum should use in js: we dont so we object 
    },
    reducers:{
        setProducts(state,action){
            //don not call the api from here:--we cant call bz it calls synchronous//pure function
          
            
            state.data=action.payload;//data we will set here
        },
        setStatus(state,action){
            state.status=action.payload;
        }
    }

})
export const {setProducts,setStatus}=productslice.actions;
export default productslice.reducer
//Thunks:-
/*
the word thunk is a programming term that means "a piece of code that does some delayed work"
Rather than execute some logic now, we can write a function body or code that can be
used to perform the work later.
*/
/*before reducer asynchronous call:--middleware thunk then reducer calls..
/*1st syntax:*/

export function fetchProducts(){
    
    return async function fetchProductThunk(dispatch,getState){
        dispatch(setStatus(STATUSES.LOADING))
       
        
        //getState to get the status :like multiple request if we want to do
        try{
           
            
const res=await fetch(`https://fakestoreapi.com/products`);
const data=await res.json();
console.log(data);

dispatch(setProducts(data));
dispatch(setStatus(STATUSES.IDLE));
        }
        catch(err){
            console.log(err);
            
dispatch(setStatus(STATUSES.ERROR))
        }

    }
}