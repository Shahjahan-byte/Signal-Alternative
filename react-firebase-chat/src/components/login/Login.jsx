import { useState } from "react";
import "./login.css";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";

// 👇 IMPORT YOUR FIREBASE AUTH INSTANCE HERE
import { auth } from "../../lib/firebase.js"; // adjust this path to your actual firebase config file

const Login = () => {
    const [avatar, setAvatar] = useState({
        file: null,
        url: ""
    });

    const handleAvatar = (e) => {
        if (e.target.files[0]) {
            setAvatar({
                file: e.target.files[0],
                url: URL.createObjectURL(e.target.files[0])
            });
        }
    };

    const handleLogin = (e) => {
        e.preventDefault();
        // Login logic will go here
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        
        // 👇 FIXED: Changed 'c.target' to 'e.target'
        const formData = new FormData(e.target);

        const { username, email, password } = Object.fromEntries(formData);

        try {
            // 👇 Requires 'auth' to be imported at the top of the file
            const res = await createUserWithEmailAndPassword(auth, email, password);
            toast.success("Account created successfully!");
            
        } catch (err) {
            console.log(err);
            toast.error(err.message);
        }
    };
    
  return (
    <div className='login'>
        <div className="item">
            <h2>Welcome Back,</h2>
            <form onSubmit={handleLogin}>
                <input type="text" placeholder="Email" name="email" />
                <input type="password" placeholder="Password" name="password" />
                <button>Sign In</button>
            </form>
        </div>
        <div className="separator"></div>
        <div className="item">
            <h2>Create an Account</h2>
            <form onSubmit={handleRegister}>
                <label htmlFor="file">
                    <img src={avatar.url || "./avatar.png"} alt="Avatar preview" />
                    Upload an image
                </label>
                <input type="file" id="file" style={{display:"none"}} onChange={handleAvatar}/>
                <input type="text" placeholder="Username" name="username" required />
                <input type="email" placeholder="Email" name="email" required />
                <input type="password" placeholder="Password" name="password" required />
                <button>Sign Up</button>
            </form>
        </div>
    </div>
  );
}

export default Login;