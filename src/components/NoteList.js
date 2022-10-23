import { useSelector } from 'react-redux'

const NoteList = () => {
  const items = useSelector((state) => state.notes.items);

  return (
    <div className='flex flex-row justify-between w-11/12 lg:w-10/12 items-center px-7 lg:px-16 pb-3 mt-32 text-white'>
      <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 w-full">
        {
          items.map((item) => (
            <div key={item.id} className={`${items.isCompleted ? "completed" : `bg-[#${item.color}]`} rounded-lg shadow-xl p-5 text-black`}>
              {item.note}
            </div>        
          ))
        }
      </div>
    </div>
  )
}

export default NoteList