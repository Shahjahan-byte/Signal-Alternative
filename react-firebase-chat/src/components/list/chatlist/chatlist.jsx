import  { useState } from "react"
import "./chatlist.css"

const Chatlist = () => {
  const [addMode, setAddMode]= useState(false)
  return (
    <div className='chatlist'>
      <div className="Search">
        <div className="Searchbar">
          <img src="./search.png" alt="" />
          <input type="text" placeholder="Search" />
        </div>
        <img src={addMode ? "./minus.png" :  "./plus.png"} alt="" className="add"
         onClick={()=>setAddMode((prev) => !prev)}
        />
      </div>
    </div>
  )
}

export default Chatlist