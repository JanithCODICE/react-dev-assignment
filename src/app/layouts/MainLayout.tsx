import React from 'react';
import { useAppSelector } from '../store/hooks';
import CustomToast from '../shared-components/atoms/Toast/CustomToast';
import { Outlet } from 'react-router-dom';

const MainLayout: React.FC = () => {
    const { visibility } = useAppSelector((state) => state.notification);
    return (
        <>
            {visibility && <CustomToast />}
            <Outlet/>
        </>
    );
};

export default MainLayout;