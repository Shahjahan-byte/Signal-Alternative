import "./login.css";

const Login = () => {
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
                <input type="text" placeholder="Email" name="email" />
                <input type="password" placeholder="password" name="password" />
                <button>Sign In</button>
            </form>
        </div>
    </div>
  )
}

export default Login