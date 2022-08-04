import React from 'react';
import { Link } from 'react-router-dom';
import { VscArrowLeft } from "react-icons/vsc";
import Order from '../../components/Order';
import Pagination from '../../components/Pagination';

export default function PurchaseHistory() {
    return (
        <div>
            <div className='d-flex align-items-center d-lg-none mb-3 mb-sm-4'>
                <Link to="/personal-account" className="btn-4 fs-11 px-2 px-sm-3">
                    <VscArrowLeft className='fs-12'/>
                </Link>
                <h1 className='inner mb-0 ms-2 ms-sm-4'>История покупок</h1>
            </div>
            <div className='box-2 p-5'>
                <h4 className='fw-7 text-center mb-4'>Ваш список заказов пуст</h4>
                <p className='fs-13 text-center mb-4'>Найдите товары в нашем каталоге<br/> или воспользуйтесь поиском</p>
                <Link to="/catalog" className='btn-1 mx-auto'><span>Перейти в каталог</span></Link>
            </div>
            <Order id={'112030123012'} count={'4'} price={'10560'} date={'30.03.2022'} time={'20:32'} status={'1'}/>
            <Order id={'112030123012'} count={'4'} price={'10560'} date={'30.03.2022'} time={'20:32'} status={'0'}/>
            <Order id={'112030123012'} count={'4'} price={'10560'} date={'30.03.2022'} time={'20:32'} status={'1'}/>
            <Order id={'112030123012'} count={'4'} price={'10560'} date={'30.03.2022'} time={'20:32'} status={'0'}/>
            <Order id={'112030123012'} count={'4'} price={'10560'} date={'30.03.2022'} time={'20:32'} status={'1'}/>
            <Order id={'112030123012'} count={'4'} price={'10560'} date={'30.03.2022'} time={'20:32'} status={'0'}/>
            <Pagination />
        </div>
    )
}