import { createSlice } from "@reduxjs/toolkit";

const INITAL_SATATE={
    user:JSON.parse(localStorage.getItem('user'))|| {}
}
const userSlice=createSlice({
    name:'user',
    initialState:INITAL_SATATE,
    reducers:{
        setuserData:(state,action)=>{
            state.user=action.payload
        }
    }
})
export const{userdata}=userSlice.actions
export default userSlice.reducer