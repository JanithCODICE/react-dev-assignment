import React from 'react';
import { useAppSelector } from '../../store/hooks';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
    children: React.ReactNode;  
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const { loginSuccess } = useAppSelector((state) => state.user);
   
    if(!loginSuccess) {
        return <Navigate to={"/"} replace/>
    }

    return children
};

export default ProtectedRoute;