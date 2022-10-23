import Header from "./Header"
import Form from "./Form"
import NoteList from "./NoteList"

const Container = () => {
  return (
    <div className='flex flex-col justify-center items-center pt-10 lg:pt-20'>
      <Header/>
      <Form/>
      <NoteList/>
    </div>
  )
}

export default Container