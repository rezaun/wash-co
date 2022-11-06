import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DashboardSidebar from '../../components/DashboardSidebar';
import AddAdmin from './AddAdmin';
import AddService from './AddService';

const Dashboard = () => {
    return (
       <DashboardSidebar>
        <Routes>
            <Route path='/dashboard/add-admin' element={<AddAdmin/>}></Route>
            <Route path='/dashboard/add-service' element={<AddService/>}></Route>
        </Routes>
        </DashboardSidebar>
    );
};

export default Dashboard;