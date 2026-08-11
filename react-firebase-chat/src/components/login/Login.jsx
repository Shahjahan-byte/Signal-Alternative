import { useState } from "react";
import "./login.css";

const Login = () => {
    const [avatar,setAvatar] = useState({
        file:null,
        url:""
    })

    const handleAvatar = e =>{
        setAvatar({
            file:e.target.files[0],
            url:URL.certainObjextURL(e.target.files[0])

        })
    }

  return (
    <div className='login'>
        <div className="items">
            <h2>Welcome Back,</h2>
            <form>
                <input type="text" placeholder="Email" name="email" />
                <input type="password" placeholder="password" name="password" />
                <button>Sign In</button>
            </form>
        </div>
        <div className="separator"></div>
        <div className="items">
              <h2>Create an Account</h2>
            <form>
                <label htmlFor="file">
                    <img src= alt="" />
                    Upload an image</label>
                <input type="file" id="file" style={{display:"none"}} onChange={handleAvatar}/>
                <input type="text" placeholder="Username" name="username" />
                <input type="text" placeholder="Email" name="email" />
                <input type="password" placeholder="password" name="password" />
                <button>Sign In</button>
            </form>
        </div>
    </div>
  )
}

export default Login