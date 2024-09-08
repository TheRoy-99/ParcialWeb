import React from 'react';
import '../styles/Login.css';
import logo from '../assets/logoSneaker.png'; 
import { ButtonsLogin } from '../components/ButtonsLogin';

export const Login = () => {
    return (
        <div className="login-container">
            <img className="logo" src={logo} alt="Logo Shoe" />
            <div className="container_principal">
                <ButtonsLogin />
            </div>
        </div>
    );   
};
