import React, { useState } from 'react';
import '../styles/Authentication.css'; 
import logo from '../assets/donnut.png'; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export const Authentication = () => {
    const navigate = useNavigate();
    const [emailOrUsername, setEmailOrUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const loginService = async (e) => {
        e.preventDefault();
        if (!emailOrUsername || !password) {
            Swal.fire({
                icon: 'warning',
                title: 'Campos Vacíos',
                text: 'Por favor, completa todos los campos.',
            });
            return;
        }
        
        setIsLoading(true);
        const URL = import.meta.env.VITE_URL_BASE;
        console.log(`URL: ${URL}/usuarios/login`); 
        const data = {
            email: emailOrUsername,
            password
        };

        try {
            const response = await axios.post(`${URL}/usuarios/login`, data);
            if (response.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Login Successful',
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate("/productos");
            }
        } catch (error) {
            console.error("Error:", error);
            Swal.fire({
                icon: 'error',
                title: 'Error 😶',
                text: 'Clave y usuario/correo incorrectos. Inténtalo nuevamente.',
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="container_principal">
            <img className="dona" src={logo} alt="logo dona" />
            <div className="form-container">
                <h5 className="title">Login</h5>
                <form onSubmit={loginService} className="login_form">
                    <input 
                        type="text" 
                        placeholder="Email" 
                        className="input-field" 
                        value={emailOrUsername} 
                        onChange={(e) => setEmailOrUsername(e.target.value)} 
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        className="input-field" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                    <button 
                        type="submit" 
                        className="submit-btn"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Cargando...' : 'Login'}
                    </button>
                    <button 
                        type="button" 
                        className="back-btn" 
                        onClick={() => navigate("/")}
                    >
                        Volver
                    </button>
                </form>
            </div>
        </div>
    );
};
