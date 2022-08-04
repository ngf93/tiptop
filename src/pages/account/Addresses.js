import React from 'react';
import { Link } from 'react-router-dom';
import { VscArrowLeft } from "react-icons/vsc";
import Address from '../../components/Address';

export default function Addresses() {
    return (
        <div>
            <div className='d-flex align-items-center d-lg-none mb-3 mb-sm-4'>
                <Link to="/personal-account" className="btn-4 fs-11 px-2 px-sm-3">
                    <VscArrowLeft className='fs-12'/>
                </Link>
                <h1 className='inner mb-0 ms-2 ms-sm-4'>Адреса доставок</h1>
            </div>
            <Link to='add' className='btn-1 fs-14 w-100 mb-3'>
                <span>Добавить адрес</span>
            </Link>
            <Address/>
            <Address/>
            <Address/>
            <Address/>
        </div>
    )
}