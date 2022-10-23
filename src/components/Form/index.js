import Searchbar from "./Searchbar"
import Textarea from "./Textarea"

const index = () => {
  return (
    <div className="flex flex-col justify-center items-center w-11/12 lg:w-7/12">
      <Searchbar/>
      <Textarea/>
    </div>
  )
}

export default index