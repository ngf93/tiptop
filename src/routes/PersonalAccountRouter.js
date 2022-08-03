import React from 'react';
import {Route, Routes, Navigate} from 'react-router-dom';
import AccountMenu from '../pages/account/AccountMenu';
import UserProfile from '../pages/account/UserProfile';
import PersonalAccountLayout from '../pages/account/PersonalAccountLayout';
import PurchaseHistory from '../pages/account/PurchaseHistory';
import OrderPage from '../pages/account/OrderPage';
import Addresses from '../pages/account/Addresses';
import CreatAddress from '../pages/account/CreatAddress';
import EditAddress from '../pages/account/EditAddress';

const PersonalAccountRouter = ({isMobile}) => {
    return (
        <Routes>
            <Route path="/" element={<PersonalAccountLayout isMobile={isMobile}/>}>
                {isMobile
                    ? <Route index element={<AccountMenu />} />
                    : <Route index element={<Navigate to="profile" replace={true} />} />
                }
                <Route path="profile" element={<UserProfile/>}/>
                <Route path="history" element={<PurchaseHistory/>}/>
                <Route path="addresses" element={<Addresses/>}/>
                <Route path="addresses/add" element={<CreatAddress />}/>
                <Route path="addresses/edit" element={<EditAddress />}/>
                <Route path="bonus-card" element={<UserProfile/>}/>
            </Route>
            <Route path="history/order" element={<OrderPage/>}/>
        </Routes>
    );
};

export default PersonalAccountRouter;