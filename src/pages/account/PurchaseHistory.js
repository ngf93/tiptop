import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { VscArrowLeft } from "react-icons/vsc";
import Order from '../../components/Order';
import Pagination from '../../components/Pagination';

export default function PurchaseHistory() {
    return (
        <Row>
            <Col xs={12} xxl={10}>
                <div className='d-flex align-items-center d-lg-none mb-3 mb-sm-4'>
                    <Link to="/personal-account" className="btn btn-4 fs-11 px-2 px-sm-3">
                        <VscArrowLeft className='fs-12'/>
                    </Link>
                    <h2 className='mb-0 ms-2 ms-sm-4'>История покупок</h2>
                </div>
                <Order id={'112030123012'} count={'4'} price={'10560'} date={'30.03.2022'} time={'20:32'} status={'1'}/>
                <Order id={'112030123012'} count={'4'} price={'10560'} date={'30.03.2022'} time={'20:32'} status={'0'}/>
                <Order id={'112030123012'} count={'4'} price={'10560'} date={'30.03.2022'} time={'20:32'} status={'1'}/>
                <Order id={'112030123012'} count={'4'} price={'10560'} date={'30.03.2022'} time={'20:32'} status={'0'}/>
                <Order id={'112030123012'} count={'4'} price={'10560'} date={'30.03.2022'} time={'20:32'} status={'1'}/>
                <Order id={'112030123012'} count={'4'} price={'10560'} date={'30.03.2022'} time={'20:32'} status={'0'}/>
                <Pagination />
            </Col>
        </Row>
    )
}