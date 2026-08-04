import "./chatlist.css"

const Chatlist = () => {
  return (
    <div className='chatlist'>
      <div className="search">
        <div className="searchbar">
          <img src="./search.png" alt="" />
          <input type="text" placeholder="Search" />
        </div>
        <img src="./plus.png" alt="" />
      </div>
    </div>
  )
}

export default Chatlist