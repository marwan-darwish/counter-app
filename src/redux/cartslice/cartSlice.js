import { createSlice } from '@reduxjs/toolkit'
const initialState={
    cartCount:0,
    cartContent:[]
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
    //   increment: (state) => {
    //     state.cartCount += 1
    //   },
      pushToCart:(state,action)=>{
        const alreadyThere = (element) => element.id === action.payload.id;
        if(!state.cartContent.some(alreadyThere)){
            state.cartContent.push({...action.payload,quantity:1})
            state.cartCount+=1
        } else{
            const index=state.cartContent.findIndex((obj=>obj.id===action.payload.id))
            console.log(index);
            state.cartContent[index].quantity+=1
            state.cartCount+=1
        }
      },
      removeFromCart:(state,action)=>{
        const index=state.cartContent.findIndex((obj=>obj.id==action.payload.id))
        state.cartCount-=action.payload.quantity
        state.cartContent.splice(index,1)
      }
    },
  })

  export const {pushToCart,removeFromCart} = cartSlice.actions

export default cartSlice.reducer