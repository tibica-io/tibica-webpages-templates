import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { ITopic } from "../../types/topicTypes"
import { topicsAPI } from "./topicsAPI"

interface ITopicsState {
    entities:ITopic[],
    status: "idle" | "pending" | "succeeded" | "failed"
}

const initialState:ITopicsState = {
    entities: [],
    status: "idle"
}

export const fetchAllTopics = createAsyncThunk(
    "topics/fetchAllTopics",
    async function():Promise<ITopic[]>{
        return await topicsAPI.fetchAllTopics() 
    }
)

const topicsSlice = createSlice({
    name:"topics",
    initialState:initialState,
    reducers:{
        
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchAllTopics.pending, (state)=>{
            state.status = "pending"
        }),
        builder.addCase(fetchAllTopics.fulfilled, (state, action:PayloadAction<ITopic[]>)=>{
            state.entities = action.payload
            state.status = "succeeded"
        })
    }
})

const topicsReducer = topicsSlice.reducer
export default topicsReducer