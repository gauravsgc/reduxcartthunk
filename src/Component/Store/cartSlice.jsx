import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add(state,action){
      // state.push(action.payload);
       if(state.length>=1){
        
        const data=state.find((item)=>item.id===action.payload.id);
        //  state.push(Object.keys(data).length);
        // state.push(typeof(data));
      if(typeof(data)!='undefined')
        {
          
           if(Object.keys(data).length>=1){
              alert('only 1 item can be entered');
                  }
                
      }
      else{
        state.push(action.payload);
       }
             

        
    
      // state.push(action.payload);
      
    }
    else{
      state.push(action.payload);
    }
    },
    remove(state,action){
// console.log(action.payload);
return state.filter((item)=>item.id!=action.payload);

    }
  },
})

// Action creators are generated for each case reducer function
export const {add,remove} = cartSlice.actions

export default cartSlice.reducer