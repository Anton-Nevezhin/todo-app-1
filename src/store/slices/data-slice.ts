import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TodosType } from "../../types/todos-type";
import { getData } from "../services/get-data";


const initialState: initialStateType = {
    data: []
}

type initialStateType = {
    data: TodosType []
}

const dataSlice = createSlice ({ //Это 'срез'
    name: 'data',
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(getData.fulfilled, (state, action: PayloadAction<TodosType[]>) => {
          state.data = action.payload;
        });
        
      },

})





export default dataSlice.reducer // reducer состоит из reducers