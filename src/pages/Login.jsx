import React from 'react';
import '../styles/Login.css';
import logo from '../assets/donnut.png'; 
import { ButtonsLogin } from '../components/ButtonsLogin';

export const Login = () => {
    return (
        <div className='imagen'>
             <img className="logo" src={logo} alt="Logo Donuts" />
            <div className="container_principal">
            <ButtonsLogin />
        </div>
    
        </div>
     );   
};
