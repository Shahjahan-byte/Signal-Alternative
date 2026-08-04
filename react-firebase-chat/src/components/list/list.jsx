import "./list.css"
// 1. Add the import statements (adjust the paths if necessary based on your exact file names)
import UserInfo from "./userinfo/Userinfo" 
import ChatList from "./chatlist/chatlist"

const List = () => {
  return (
    <div className='list'>
      {/* 2. Capitalize the component names so React knows they are custom components */}
      <UserInfo />
      <ChatList />
    </div>
  )
}

export default List