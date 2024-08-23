import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

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
const productslice1=createSlice({
    name:'product',
    //initial state:-object api call status has to track like resolve error state :-
    initialState:{
        data:[],//list of products
        status:STATUSES.IDLE
        
        //like loading error fetched:'idle'//enum should use in js: we dont so we object 
    },
    reducers:{
        
    },
    extraReducers:(builder)=>{
builder.addCase(fetchProducts.pending,(state,action)=>{
state.status=STATUSES.LOADING;
})
.addCase(fetchProducts.fulfilled,(state,action)=>{
    state.data=action.payload;
    state.status=STATUSES.IDLE;
})
.addCase(fetchProducts.rejected,(state,action)=>{
    state.status=STATUSES.ERROR;
})
    }

})
export const {setProducts,setStatus}=productslice1.actions;
export default productslice1.reducer
//Thunks:-
/*
the word thunk is a programming term that means "a piece of code that does some delayed work"
Rather than execute some logic now, we can write a function body or code that can be
used to perform the work later.
*/
/*before reducer asynchronous call:--middleware thunk then reducer calls..
/*2nd syntax:for better error handling*/
export const fetchProducts=createAsyncThunk('products/fetch',async()=>{
    const res=await fetch(`https://fakestoreapi.com/products`);
    const data=await res.json();
    return data;
})

