import styles from './Register.module.css'

import { useState} from 'react'
import { useAuthentication } from '../../hooks/useAuthentication';

const Register = () => {

    const [displayName, setDisplayName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [error, setError] = useState("");

    const url = 'https://gregoriohd.cyclic.app/user';

    const {httpConfig} = useAuthentication(url);


    const handleSubmit = (e) => {
        e.preventDefault();
        
        setError("");

        const user = {
            name: displayName,
            email,
            pass: password
        }

        if(password !== confirmPassword){
            setError("senhas são diferentes");
            return;
        }
        httpConfig(user, "POST");

        setDisplayName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    }



  return(
    <div className={styles.register}>
        <h1>Cadastro</h1>
        <p>Cadastro para acompanhar informações tec</p>
        <form onSubmit={handleSubmit}>
            <label>
                <span>Nome:</span>
                <input type="text" name='displayName' required placeholder='Nome do usuário'
                    value={displayName} onChange={(e)=> setDisplayName(e.target.value)} />
            </label>
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
            <label>
                <span>Confirmar senha:</span>
                <input type="password" name='confirmPassword' required placeholder='Confirme sua senha' 
                         value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)}/>
            </label>
            <button className='btn'>Cadastrar</button>
            {error && <p className='error'>{error}</p>}
        </form>
    </div>
  )
}
export default Register