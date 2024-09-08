import React from 'react';
import { useNavigate } from 'react-router-dom';

export const ButtonsLogin = () => {
    const navigate = useNavigate();
    return (
        <div className="container-buttons">
            <h3><span>ALL</span>Sports</h3>
            <div className="buttons">
                <button className="btn-login" onClick={() => navigate("/authentication")}>Log in</button>
                <button className="btn-register" onClick={() => navigate("/register")}>Register</button>
            </div>
        </div>
    );
};
