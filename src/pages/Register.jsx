import React, { useState } from 'react';
import '../styles/Register.css'; 
import logo from '../assets/logoSneaker.png'; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'; 

export const Register = () => {
    const navigate = useNavigate();
    const [names, setNames] = useState("");
    const [lastnames, setLastNames] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const URL = import.meta.env.VITE_URL_BASE; 

    const registerService = async (e) => {
        e.preventDefault();

        const data = {
            name: names, 
            lastname: lastnames,
            email,
            password
        };

        try {
            const response = await axios.post(`${URL}/usuarios/registrar`, data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            console.log('Response:', response); 

            if (response.status === 201) {
                Swal.fire({
                    title: '¡Éxito!',
                    text: 'Usuario registrado correctamente',
                    icon: 'success',
                    confirmButtonText: 'OK'
                }).then(() => {
                    navigate("/");
                });
            }
        } catch (error) {
            console.error('Error:', error); 
            Swal.fire({
                title: 'Error',
                text: 'Error al registrar usuario: ',
                icon: 'error',
                confirmButtonText: 'Intentar de nuevo'
            });
        }
    };

    return (
        <div className="container_principal">
                        <img className="shoe" src={logo} alt="Logo shoe" />
            <div className="form-container">

                <h5 className="title">Register</h5>
                <form onSubmit={registerService}>
                    <input 
                        type="text" 
                        name="names" 
                        placeholder="First Name" 
                        className="input-field" 
                        value={names}
                        onChange={(e) => setNames(e.target.value)} 
                    />
                    <input 
                        type="text" 
                        name="lastnames" 
                        placeholder="Last Name" 
                        className="input-field" 
                        value={lastnames}
                        onChange={(e) => setLastNames(e.target.value)} 
                    />
                    <input 
                        type="text" 
                        name="username" 
                        placeholder="Username" 
                        className="input-field" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} 
                    />
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        className="input-field" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        className="input-field" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                    <button type="submit" className="submit-btn">Register</button>
                    <button type="button" className="back-btn" onClick={() => navigate("/")}>Volver</button>
                </form>
            </div>
        </div>
    );
};
