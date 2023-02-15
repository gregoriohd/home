import styles from './Login.module.css'

import { useState } from "react";

const Login = () => {

  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

const handleSubmit = (e) => {
        e.preventDefault();
        
        setError("");

        const user = {
            email,
            pass: password
        }

        
        setEmail("");
        setPassword("");
      
    }


  return (
    <div className={styles.login}>
        <h3>Login adm</h3>
        <p>somente adms podem publicar</p>
        <form onSubmit={handleSubmit}>
             <label>
                <span>Email:</span>
                <input type="text" name='email' required placeholder='Email do usuário' 
                         value={email} onChange={(e)=> setEmail(e.target.value)}/>
            </label>
            <label>
                <span>Senha:</span>
                <input type="password" name='password' required placeholder='Insira sua senha' 
                         value={password} onChange={(e)=> setPassword(e.target.value)}/>
            </label>
            <button className='btn'>confirmar</button>
            {error && <p className='error'>{error}</p>}
        </form>
    </div>
  )
}

export default Login