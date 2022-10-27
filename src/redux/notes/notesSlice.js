import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
    name: "notes",
    initialState: {
        items: [],
        filter: ""
    },
    reducers: {
        addNote: (state, action) => {
            state.items.push(action.payload)
        },
        deleteNote: (state, action) => {
            const id = action.payload
            const filteredState = state.items.filter(item => item.id !== id)
            state.items = filteredState
        },
        setFilter: (state, action) => {
            state.filter = action.payload
            console.log(state.filter)
        }
    },
})

export const { addNote, deleteNote, setFilter } = notesSlice.actions
export default notesSlice.reducer;