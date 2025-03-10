import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout: React.FC = () => {
    return (
        <div>
            <h2>AUTH LAYOUT</h2>
            <Outlet />
        </div>
    );
};

export default AuthLayout;