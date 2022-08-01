import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { VscArrowLeft, VscChevronDown, VscChevronUp } from "react-icons/vsc";

export default function Checkout(props) {
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
        <main>
            <Container>
                <nav className='breadcrumbs'>
                    <ul>
                        <li><a href="/">Корзина</a></li>
                        <li><a href="/">Оформление заказа</a></li>
                    </ul>
                </nav>
                <section id="checkout" className='mb-6'>
                    <div className='d-flex align-items-center d-md-block mb-2 mb-sm-4 mb-md-0'>
                        <Link to="/" className="btn btn-4 fs-11 px-3 mb-md-5">
                            <VscArrowLeft className='fs-12'/>
                            <span className='ms-2 d-none d-md-inline'>Назад на главную</span>
                        </Link>
                        <h1 className='inner mb-0 mb-md-5 ms-2 ms-sm-4 ms-md-0'>Оформление заказа</h1>
                    </div>
                    <p className='fs-13 mb-5'>Заполните данные для оформления заказа</p>
                    <form>
                        <Row className='justify-content-between'>
                            <Col lg={7} xxl={6}>
                                <label className='d-block fs-13 fw-5 mb-2'>Имя</label>
                                <input type='text' placeholder='Имя' className='fs-11 mb-4'/>

                                <label className='d-block fs-13 fw-5 mb-2'>Фамилия</label>
                                <input type='text' placeholder='Фамилия' className='fs-11 mb-4'/>

                                <label className='d-block fs-13 fw-5 mb-2'>Номер телефона</label>
                                <input type='text' placeholder='Номер телефона' className='fs-11 mb-4'/>

                                <label className='d-block fs-13 fw-5 mb-2'>Электронная почта</label>
                                <input type='text' placeholder='Адрес электронной почты' className='fs-11 mb-4'/>

                                <label className='d-block fs-13 fw-5 mb-2'>Город</label>
                                <input type='text' placeholder='Город' className='fs-11 mb-4'/>

                                <label className='d-block fs-13 fw-5 mb-2'>Улица</label>
                                <input type='text' placeholder='Улица' className='fs-11 mb-4'/>

                                <Row md={3}>
                                    <Col>
                                        <label className='d-block fs-13 fw-5 mb-2'>Дом</label>
                                        <input type='text' placeholder='Дом' className='fs-11 mb-4'/>
                                    </Col>
                                    <Col>
                                        <label className='d-block fs-13 fw-5 mb-2'>Подъезд</label>
                                        <input type='text' placeholder='Подъезд' className='fs-11 mb-4'/>
                                    </Col>
                                    <Col>
                                        <label className='d-block fs-13 fw-5 mb-2'>Квартира</label>
                                        <input type='text' placeholder='Квартира' className='fs-11 mb-4'/>
                                    </Col>
                                </Row>

                                <label className='d-block fs-13 fw-5 mb-2'>Комментарий</label>
                                <textarea placeholder='Ваш комментарий' className='fs-11 mb-4' rows={5}></textarea>
                            </Col>
                            <Col lg={5}>
                                <div className='d-block fs-13 fw-5 mb-2'>Способ доставки</div>
                                <div className='box-2 p-4 mb-4'>
                                    <label className='fs-13'>
                                        <input type='radio' name='delivery'/>
                                        <span className='ms-3'>Самовывоз</span>
                                    </label>
                                    <hr/>
                                    <label className='fs-13'>
                                        <input type='radio' name='delivery'/>
                                        <span className='ms-3'>Доставка</span>
                                    </label>
                                </div>

                                <div className='d-block fs-13 fw-5 mb-2'>Способ оплаты</div>
                                <div className='box-2 p-4 mb-4'>
                                    <label className='fs-13'>
                                        <input type='radio' name='payment'/>
                                        <span className='ms-3'>Оплата картой</span>
                                    </label>
                                    <div className='fs-09 gray ps-4'>(Действует только на самовывоз)</div>
                                    <hr/>
                                    <label className='fs-13'>
                                        <input type='radio' name='payment'/>
                                        <span className='ms-3'>Наличный расчёт</span>
                                    </label>
                                    <div className='fs-09 gray ps-4'>(Действует только на самовывоз)</div>
                                    <hr/>
                                    <label className='fs-13'>
                                        <input type='radio' name='payment'/>
                                        <span className='ms-3'>Оплата онлайн</span>
                                    </label>
                                </div>

                                <div className='d-block fs-13 fw-5 mb-2'>Оплата бонусами</div>
                                <div className='box-2 p-4 mb-4'>
                                    <p className='fs-13'>Доступно 4589 Бонусов</p>
                                </div>

                                <div className='total'>
                                    <h5 onClick={()=>setFull((full === true)?false:true)} className='order-1 d-flex align-items-center mb-2 mb-md-3 mb-lg-4'>
                                        <span className='me-4'>Заказ: 11203012012</span>
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
                                                    <td>Начисление бонусов</td>
                                                    <td>56 Б</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <hr className='order-2 order-lg-3'/>
                                        </>
                                    }
                                    
                                    <div onClick={()=>setFull((full === true)?false:true)} className='order-1 order-lg-4 fw-5 fs-13 d-flex align-items-center justify-content-between py-lg-2'>
                                        <div>Всего к оплате</div>
                                        <div>36 200 ₽</div>
                                    </div>
                                    <button type='button' className='order-4 btn btn-1 fs-11 w-100 px-4 mt-2'><span>Оформить заказ на 36 200 ₽</span></button>
                                </div>
                            </Col>
                        </Row>
                        <Link to='/cart' className='btn btn-3 fs-11 mt-4'>Назад в корзину</Link>
                    </form>
                </section>
            </Container>
        </main>
    );
}