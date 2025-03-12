import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { clearUser } from '../../store/reducers/user.slice';
import { Navigate } from 'react-router-dom';

const Logout: React.FC = () => {

    const dispatch = useAppDispatch();
    const { loginSuccess } = useAppSelector(state => state.user);

    useEffect(() => {
        dispatch(clearUser());
    }, []);

    if (!loginSuccess) {
        return <Navigate to="/" />;
    }
};

export default Logout;