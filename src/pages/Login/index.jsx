import { useEffect, useState } from "react"
import {redirect} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Log from "../../modules/Login";

const Login= ()=>{
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [status,setStatus]=useState('');
  
 
  return(
    <div className="Login">
    <div className="Login_logar">
      <label>
        <p>Email</p>
        <input type="email" name="Email" onChange={(event)=>{setEmail(event.target.value)}}/>
      </label>
      <label>
        <p>Senha</p>
        <input type="password" name="password" onChange={(event)=>{setPassword(event.target.value)}}/>
      </label>
      <button onClick={()=>{Log(email,password)}}>Logar</button>

    </div>
    </div>
  )
}
export default Login