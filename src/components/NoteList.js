import { useSelector, useDispatch } from 'react-redux'

import Placeholder from './Placeholder';
import { deleteNote } from '../redux/notes/notesSlice' 

const NoteList = () => {
  const items = useSelector((state) => state.notes.items);
  const filter = useSelector((state) => state.notes.filter);

  const dispatch = useDispatch()

  const filtered = items.filter((item) => {
    return item.note.toString().toLowerCase().includes(filter.toLowerCase())
  })

  return (
    <div className='flex flex-row justify-between w-11/12 lg:w-10/12 items-center px-7 lg:px-16 pb-3 mt-32 text-white'>
      {
        items.length === 0 ? <Placeholder /> : (
          <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 w-full">
            { 
              filtered.map((item) => (
                <div key={item.id} className={`${items.isCompleted ? "completed" : `${item.color}`} rounded-lg shadow-xl px-6 py-5 text-black relative`}>
                  <div>
                    {item.note}
                  </div>                
                  <div className='absolute right-3 bottom-3'>
                    <a href='/#' className='p-0 m-0'><i class="fa-regular fa-trash-can fa-lg" onClick={() => dispatch(deleteNote(item.id))}></i></a>
                  </div>        
                </div>        
              ))
            }
          </div>
        )
      }
    </div>
  )
}

export default NoteList