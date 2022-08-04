import { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { VscArrowLeft, VscChevronDown, VscChevronUp } from "react-icons/vsc";
import OrderItem from '../../components/OrderItem';
import { FiRefreshCcw } from "react-icons/fi";

export default function OrderPage() {
    const [mobile, setMobile] = useState(false);
    const [full, setFull] = useState(true);

    useEffect(() => {
        function updateView() {
            if (window.matchMedia("(max-width: 991px)").matches) {
                setMobile(true);
                setFull(false);
            } else {
                setMobile(false);
                setFull(true);
            }
        }

        window.addEventListener('resize', updateView);
        updateView();
        return () => window.removeEventListener('resize', updateView);
    }, []);

    return (
        <div className='order-page'>
            <div className='d-flex align-items-center d-md-block mb-2 mb-sm-4 mb-md-4'>
                <Link to="/personal-account/history" className="btn-4 fs-11 px-2 px-sm-3 mb-md-5">
                    <VscArrowLeft className='fs-12'/>
                    <span className='ms-2 d-none d-md-inline'>Назад в историю покупок</span>
                </Link>
                <h1 className='inner mb-0 ms-2 ms-sm-4 ms-md-0'>Заказ: 112030123012</h1>
            </div>
            <div className='fs-13 mb-3 mb-md-4'>Статус заказа: <span className='gray'>доставлено</span></div>
            <div className='fs-13 d-block d-md-none mb-3'>
                <div className='mb-1'>
                    <span>Доставка: </span>
                    <span className='gray'>Курьер</span>
                </div>
                <div className='mb-1'>
                    <span>Время доставки: </span>
                    <span className='gray'>5 часов, 46 минут</span>
                </div>
                <div>
                    <span>Способ оплаты: </span>
                    <span className='gray'>Онлайн-оплата</span>
                </div>
            </div>
            <Row className='justify-content-between'>
                <Col lg={8} xxl={9}>
                    <OrderItem/>
                    <OrderItem/>
                    <OrderItem/>
                    <OrderItem/>
                </Col>
                <Col lg={4} xxl={3}>
                    <div className='total'>
                        <h5 onClick={()=>setFull((full === true)?false:true)} className='order-1 d-flex align-items-center mb-2 mb-md-3 mb-lg-4'>
                            <span className='me-4'>Заказ: 112030123012</span>
                            {
                                (full === true)
                                ? <VscChevronUp className='d-lg-none fs-12'/>
                                : <VscChevronDown className='d-lg-none fs-12'/>
                            }
                        </h5>
                        {
                            (mobile === false || full === true) &&
                            <>
                            <table className='order-3 order-lg-2'>
                                <tbody>
                                    <tr>
                                        <td>Товары</td>
                                        <td>2 500 ₽</td>
                                    </tr>
                                    <tr>
                                        <td>Сбор</td>
                                        <td>2 500 ₽</td>
                                    </tr>
                                    <tr>
                                        <td>Скидка</td>
                                        <td>2 500 ₽</td>
                                    </tr>
                                    <tr>
                                        <td>Начисление баллов</td>
                                        <td>56 Б</td>
                                    </tr>
                                </tbody>
                            </table>
                            <hr className='order-2 order-lg-3'/>
                            </>
                        }
                        <div className='order-1 order-lg-4 fw-5 fs-13 d-flex align-items-center justify-content-between py-lg-2'>
                            <div>Итого</div>
                            <div>2 500 ₽</div>
                        </div>
                        <Link to="/checkout" className='order-4 btn-1 fs-11 w-100 px-4 mt-2'><FiRefreshCcw/><span className='ms-2'>Повторить заказ</span></Link>
                    </div>
                    <aside className='d-none d-lg-block mt-4'></aside>
                    <aside className='d-none d-lg-block mt-4'></aside>
                </Col>
            </Row>
        </div>
    )
}