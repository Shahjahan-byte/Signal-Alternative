import  { useState } from "react"
import "./chatlist.css"
import AddUser from "./addUser";

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
      <div className="item">
       <img src="./avatar.png" alt="" />
       <div className="text">
        <span>Shahjahan</span>
        <p>Salam</p>
       </div>
      </div>
      <div className="item">
       <img src="./avatar.png" alt="" />
       <div className="text">
        <span>Shahjahan</span>
        <p>Salam</p>
       </div>
      </div>
      <div className="item">
       <img src="./avatar.png" alt="" />
       <div className="text">
        <span>Shahjahan</span>
        <p>Salam</p>
       </div>
      </div>
      <div className="item">
       <img src="./avatar.png" alt="" />
       <div className="text">
        <span>Shahjahan</span>
        <p>Salam</p>
       </div>
      </div>
      <AddUser/>
    </div>
  );
};

export default Chatlist