import React from 'react';
import { Outlet } from 'react-router-dom'
import AccountMenu from './AccountMenu';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const PersonalAccountLayout = ({isMobile}) => {
    return <>
        {   
            isMobile
            ? <Outlet/>
            : <Row>
                <Col md={4}>
                    <AccountMenu/>
                </Col>
                <Col md={8}>
                    <Outlet/>
                </Col>
            </Row>
        }
    </>

};

export default PersonalAccountLayout;