import React from 'react';
import {Route, Routes, Navigate} from 'react-router-dom';
import AccountMenu from '../pages/account/AccountMenu';
import UserProfile from '../pages/account/UserProfile';
import PersonalAccountLayout from '../pages/account/PersonalAccountLayout';
import PurchaseHistory from '../pages/account/PurchaseHistory';

const PersonalAccountRouter = ({isMobile}) => {

    return (
        <Routes>
            <Route path="/" element={<PersonalAccountLayout isMobile={isMobile}/>}>
                {isMobile
                    ? <Route index element={<AccountMenu />} />
                    : <Route index element={<Navigate to="profile" replace={true} />} />
                }
                <Route path="profile" element={<UserProfile/>}/>
                <Route path="purchase-history" element={<PurchaseHistory/>}/>
                <Route path="delivery-addresses" element={<UserProfile/>}/>
                <Route path="bonus-card" element={<UserProfile/>}/>
            </Route>
        </Routes>
    );
};

export default PersonalAccountRouter;