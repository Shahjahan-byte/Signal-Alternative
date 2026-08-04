import "./chatlist.css"

const Chatlist = () => {
  return (
    <div className='chatlist'>
      <div className="Search">
        <div className="Searchbar">
          <img src="./search.png" alt="" />
          <input type="text" placeholder="Search" />
        </div>
        <img src="./plus.png" alt="" />
      </div>
    </div>
  )
}

export default Chatlist