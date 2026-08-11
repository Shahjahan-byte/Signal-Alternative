import List from './components/list/list'
import Chat from './components/chat/chat'
import Detail from './components/details/detail'
import Login from './components/login/Login';


const App = () => {
 
  const user = false  

  return (
    <div className='container'>
      {user ? (
       <>
          <List/>
          <Chat/>
          <Detail/>
       </>   
      ) : (
        <Login />
      )}
      <Notification/>
    </div>
  );
};

export default App