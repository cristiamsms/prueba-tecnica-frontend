import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogin } from '../../actions/auth';
import { useForm } from '../hooks/useForm';
import './login.css';


export const LoginScreen = () => {
    const dispatch = useDispatch();
    const [login, setlogin] = useState({
        lEmail:'',
        lPassword:''
    });

    
    const {lEmail,lPassword}=login;
    
    const handleLogin=(e:any)=>{
        e.preventDefault();
     
        dispatch(startLogin(lEmail,lPassword));



    }
    const onChange = (event:any) => {
        {
        
            setlogin({...login,
                [event.target.name]:event.target.value})
            
        }
      };



    return (
        <>
         <div className="navbar navbar-dark bg-dark mb-4">
      <span className="navbar-brand"></span>
        <Link className="btn btn-outline-primary " to="/">
                    Atras
                </Link> 
      
            </div>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <form onSubmit={handleLogin}  className="box" >
                         <h1>Login</h1>
                            <p className="text-muted"> Digita tu correo y contraseña</p> 
                            <input 
                                type="text" 
                                name="lEmail" 
                                placeholder="Correo"
                                value={lEmail}
                                onChange={(event) => onChange(event)}/> 
                             <input 
                                type="password" 
                                name="lPassword" 
                                placeholder="Contraseña"
                                value={lPassword}
                                onChange={(event) => onChange(event)}/> 
                            <input type="submit" value="Login" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

