import { useState } from 'react'

const Textarea = () => {
  const [buttons, setButtons] = useState([
    { id: 1, color: "FFB6C1", isActive: false},
    { id: 2, color: "CBC3E3", isActive: false},
    { id: 3, color: "FDFD96", isActive: false},
    { id: 4, color: "ABD7EB", isActive: false},
    { id: 5, color: "BFE3B4", isActive: false},
  ])
  const [input, setInput] = useState("")
  const [color, setColor] = useState("FFB6C1")
 
  const handleClick = (e) => {
    const id = e.target.id

    let newArr = [...buttons];
    newArr[id - 1].isActive = !newArr[id - 1].isActive;

    setButtons(newArr);
    setColor(newArr[id - 1].color)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(color)
  }

  return (
    <div className='w-11/12'>
      <form onSubmit={handleSubmit}>
        <input className='textarea px-6 py-3 mb-7 rounded-lg w-full h-24 bg-primary hover:shadow-lg focus:outline-0 focus:shadow-xl focus:border-secondary text-white' value={input} onChange={(e) => setInput(e.target.value)}></input>
        <div className='flex flex-row justify-between items-center'>
          <div className="colorpicker grid grid-cols-5 gap-3">
            { buttons.map((button) => (
              <button key={button.id} id={button.id} className={`flex justify-center items-center ${"bg-[#" + button.color + "]"} w-11 h-11 rounded-full`} onClick={handleClick}>{ button.isActive ? <i class="fa-solid fa-check"></i> : ""}</button>
            ))}
          </div>
          <button type='submit' className='px-14 py-2 rounded-full bg-secondary hover:bg-[#cc9020] hover:translate-y-1 text-lg'>Add</button>
        </div>
      </form>
    </div>
  )
}

export default Textarea