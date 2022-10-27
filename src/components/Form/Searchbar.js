import { useDispatch, useSelector } from 'react-redux'

import { setFilter } from '../../redux/notes/notesSlice' 

const Searchbar = () => {
  const filter = useSelector((state) => state.notes.filter);
  const dispatch = useDispatch()
  
  return (
    <div className='mb-10'>
      <input className='searchbar px-6 py-3 w-[500px] bg-primary text-secondary hover:shadow-xl focus:outline-0 focus:shadow-xl' placeholder='Search...' value={filter} onChange={(e) => dispatch(setFilter(e.target.value))}></input>
    </div>
  )
}

export default Searchbar