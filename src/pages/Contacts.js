import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { VscArrowLeft } from "react-icons/vsc";
import { FiPhone, FiMapPin, FiClock, FiMail, FiChevronDown } from "react-icons/fi";

export default function Contacts() {
    return (
        <main>
            <Container id="contacts-page" className='mb-6'>
                <div className='d-flex align-items-center d-md-block mb-2 mb-sm-4 mb-md-0'>
                    <Link to="/" className="btn btn-4 fs-11 px-3 mb-md-5">
                        <VscArrowLeft className='fs-12'/>
                        <span className='ms-2 d-none d-md-inline'>Назад на главную</span>
                    </Link>
                    <h1 className='inner mb-0 mb-md-5 ms-4 ms-md-0'>Контакты</h1>
                </div>
                <Row className='flex-lg-row-reverse'>
                    <Col xl={4}>
                        <Row xs={1} md={2} xl={1}>
                            <Col>
                                <div className='box'>
                                    <h5 className='fs-15'>Отзывы о магазине</h5>
                                    <p className='fs-13'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet libero facilisi dictum ac lectus aliquam, aliquet.</p>
                                    <p className='fs-13 mt-3'>Quam sit amet turpis volutpat elementum. Sed consectetur aliquet fermentum pretium.</p>
                                    <button type='button' className='btn btn-1 fs-11 mt-3 mt-sm-4'>Оставить отзыв</button>
                                </div>
                            </Col>
                            <Col>
                                <div className='box mt-xl-5'>
                                <h5 className='fs-15'>Реквизиты компании</h5>
                                <p className='fs-13 mt-2'><span className='fw-7'>Lorem:</span> ipsum dolor sit amet</p>
                                <p className='fs-13 mt-2'><span className='fw-7'>Lorem:</span> ipsum dolor sit amet</p>
                                <p className='fs-13 mt-2'><span className='fw-7'>Lorem:</span> ipsum dolor sit amet</p>
                                <p className='fs-13 mt-2'><span className='fw-7'>Lorem:</span> ipsum dolor sit amet</p>
                                <p className='fs-13 mt-2'><span className='fw-7'>Lorem:</span> ipsum dolor sit amet</p>
                                <p className='fs-13 mt-2'><span className='fw-7'>Lorem:</span> ipsum dolor sit amet</p>
                                <p className='fs-13 mt-2'><span className='fw-7'>Lorem:</span> ipsum dolor sit amet</p>
                                <p className='fs-13 mt-2'><span className='fw-7'>Lorem:</span> ipsum dolor sit amet</p>
                            </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col xl={8} className="mt-3 mt-sm-4 mt-lg-5 mt-xl-0">
                        <div className='box shop'>
                            <div className='shop-info'>
                                <h5 className='fs-15'>Название магазина</h5>
                                <div className='d-flex mb-3'>
                                    <FiPhone className='fs-15 gray'/>
                                    <div className='fs-13 ms-3'>
                                        <div className='gray mb-1'>Телефон</div>
                                        <div><a href="tel:89999999999">8 (999) 999-99-99</a></div>
                                    </div>
                                </div>
                                <div className='d-flex mb-3'>
                                    <FiMapPin className='fs-15 gray'/>
                                    <div className='fs-13 ms-3'>
                                        <div className='gray mb-1'>Адрес</div>
                                        <div>г. Город, Улица улица 16, стр. 5</div>
                                    </div>
                                </div>
                                <div className='d-flex mb-3'>
                                    <FiClock className='fs-15 gray'/>
                                    <div className='fs-13 ms-3'>
                                        <div className='gray mb-1'>График работы</div>
                                        <div>С понедельника по субботу с&nbsp;9:00&nbsp;до&nbsp;22:00</div>
                                    </div>
                                </div>
                                <div className='d-flex'>
                                    <FiMail className='fs-15 gray'/>
                                    <div className='fs-13 ms-3'>
                                        <a href='mailto:pochta@pochta.ru'>pochta@pochta.ru</a>
                                    </div>
                                </div>
                            </div>
                            <div className='map'>
                                <img src="imgs/map.png"/>
                            </div>
                        </div>
                        <div className='box shop mt-3 mt-sm-4 mt-lg-5'>
                            <div className='shop-info'>
                                <h5 className='fs-15'>Название магазина</h5>
                                <div className='d-flex mb-3'>
                                    <FiPhone className='fs-15 gray'/>
                                    <div className='fs-13 ms-3'>
                                        <div className='gray mb-1'>Телефон</div>
                                        <div><a href="tel:89999999999">8 (999) 999-99-99</a></div>
                                    </div>
                                </div>
                                <div className='d-flex mb-3'>
                                    <FiMapPin className='fs-15 gray'/>
                                    <div className='fs-13 ms-3'>
                                        <div className='gray mb-1'>Адрес</div>
                                        <div>г. Город, Улица улица 16, стр. 5</div>
                                    </div>
                                </div>
                                <div className='d-flex mb-3'>
                                    <FiClock className='fs-15 gray'/>
                                    <div className='fs-13 ms-3'>
                                        <div className='gray mb-1'>График работы</div>
                                        <div>С понедельника по субботу с&nbsp;9:00&nbsp;до&nbsp;22:00</div>
                                    </div>
                                </div>
                                <div className='d-flex'>
                                    <FiMail className='fs-15 gray'/>
                                    <div className='fs-13 ms-3'>
                                        <a href='mailto:pochta@pochta.ru'>pochta@pochta.ru</a>
                                    </div>
                                </div>
                            </div>
                            <div className='map'>
                                <img src="imgs/map.png"/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </main>
    );
}