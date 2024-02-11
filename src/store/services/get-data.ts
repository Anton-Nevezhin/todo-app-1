import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getData = createAsyncThunk('getData/posts', async() => {const {data} = await axios.get('https://jsonplaceholder.org/posts'); return data})

