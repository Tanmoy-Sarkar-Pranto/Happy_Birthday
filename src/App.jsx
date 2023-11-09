import { useState } from "react"
import peopledata from "./data"
import Person from "./Person"

const App = () => {
  const [data, setData] = useState(peopledata)

  const handleClick = () => {
    setData([])
  }
  return (
    <div className="container">
      <h1>{data.length} birthdays today</h1>
      {data.map((item) => {
        return <Person {...item} />
      })}
      <button className="btn btn-block" onClick={handleClick}>
        Clear all
      </button>
    </div>
  )
}
export default App
