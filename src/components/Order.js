import { useState } from 'react';
import { FiRefreshCcw } from "react-icons/fi";

export default function Order(props) {
    return (
        <div className='order'>
            <div className='d-flex justify-content-between align-items-center'>
                <h5 className='mb-0'>Заказ: {props.id}</h5>
                <button type='button' className='btn btn-1 py-2 px-2 px-sm-3'>
                    <FiRefreshCcw/>
                    <span className='ms-1'>Повторить заказ</span>
                </button>
            </div>
            <hr/>
            <div className='info'>
                <div className='gray'>{props.count} товара • {props.price} ₽ • {props.date} в {props.time}</div>
                <div className='text-end mt-2 mt-md-0'>Статус заказа: <span className={(props.status === '0') ? 'danger-color' : 'gray'}>
                    {
                        (props.status === '0')
                        ? 'заказ отменён'
                        : 'доставлено'
                    }
                </span></div>
            </div>
        </div>
    );
}