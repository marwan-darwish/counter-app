import { createSlice,createAsyncThunk} from "@reduxjs/toolkit";
// const baseURL="https://fakestoreapi.com/products?limit=6"
export const fetchProducts=createAsyncThunk("shop/products",
()=>{
  return  fetch('https://fakestoreapi.com/products?limit=6')
    .then(res=>res.json())
    .then(json=>json)
}
)
const initialState={
    products:[],
    loading:false,
    err:{}
}

 const productsSlice=createSlice({
    name:"products",
    initialState,
    reducers:{

    },
    extraReducers:{
[fetchProducts.pending]:(state,action)=>{
    state.loading=true
},
[fetchProducts.fulfilled]:(state,action)=>{
    state.loading=false
    state.products=action.payload
},
[fetchProducts.rejected]:(state,action)=>{
    state.err=action.payload
    state.loading=false
},

    }
})
export default productsSlice.reducer