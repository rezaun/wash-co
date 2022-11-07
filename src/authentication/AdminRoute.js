import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';

const AdminRoute = ({children}) => {
    const location = useLocation();
    const [admin] = useAdmin();


    if(!admin){
        return <Navigate to="/" replace/>;
    }

    return children;
};

export default AdminRoute;