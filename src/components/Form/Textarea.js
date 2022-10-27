import { useState } from 'react'

import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { addNote } from '../../redux/notes/notesSlice' 

const Textarea = () => {
  const [buttons, setButtons] = useState([
    { id: 1, color: "bg-pink", isActive: false},
    { id: 2, color: "bg-purple", isActive: false},
    { id: 3, color: "bg-yellow", isActive: false},
    { id: 4, color: "bg-blue", isActive: false},
    { id: 5, color: "bg-green", isActive: false},
  ])
  const [id, setId] = useState(0)
  const [note, setNote] = useState("")
  const [color, setColor] = useState("bg-yellow")

  const dispatch = useDispatch()
 
  const handleClick = (e) => {
    const id = e.target.id

    let newArr = [...buttons];
    newArr[id - 1].isActive = !newArr[id - 1].isActive;

    setButtons(newArr);
    setId(id)
    setColor(newArr[id - 1].color)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(addNote({ id: nanoid(), note, color, isCompleted: false}))
    setNote("")
    setColor("bg-yellow")
    buttons[id - 1].isActive = false
  }

  return (
    <div className='w-11/12'>
        <input className='textarea px-6 py-3 mb-7 rounded-lg w-full h-24 bg-primary hover:shadow-lg focus:outline-0 focus:shadow-xl focus:border-secondary text-white' value={note} onChange={(e) => setNote(e.target.value)}></input>
        <div className='flex flex-row justify-between items-center'>
          <div className="colorpicker grid grid-cols-5 gap-3">
            { buttons.map((button) => (
              <button key={button.id} id={button.id} className={`flex justify-center items-center ${button.color} w-11 h-11 rounded-full`} onClick={handleClick}>{ button.isActive ? <i class="fa-solid fa-check"></i> : ""}</button>
            ))}
          </div>
          <button type='submit' className='px-14 py-2 rounded-full bg-secondary hover:bg-[#cc9020] hover:translate-y-1 text-lg' onClick={handleSubmit}>Add</button>
        </div>
    </div>
  )
}

export default Textarea