import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
    name: "notes",
    initialState: {
        items: [
            {
                id: 1,
                note: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                color: "FFB6C1",
                isCompleted: true
            },
            {
                id: 2,
                note: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
                color: "CBC3E3",
                isCompleted: false
            },
            {
                id: 3,
                note: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                color: "FDFD96",
                isCompleted: false
            },
            {
                id: 4,
                note: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
                color: "ABD7EB",
                isCompleted: false
            },
            {
                id: 5,
                note: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
                color: "BFE3B4",
                isCompleted: false
            },
        ],
    },
    reducers: {
        addNote: (state, action) => {
            state.items.push({ id: 6, note: "Naber lan keko", color: "FFB6C1", isCompleted: false })
        }
    },
})

export const { addNote } = notesSlice.actions
export default notesSlice.reducer;