import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { IoMenu } from "react-icons/io5";


export default function Home() {
    return (
        <main>
            <Swiper
                className='main-slider mb-5'
                modules={[Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                <SwiperSlide>
                    <img src="imgs/main-slider/slide-1.jpg" alt="РАСПРОДАЖА ГЕРМЕТИКА СО СКИДКОЙ ДО 50 %"/>
                    <Container>
                        <Row>
                            <Col xs={5}>
                                <h1 className='white'>
                                    <div className='fs-15 mb-3'>РАСПРОДАЖА</div>
                                    ГЕРМЕТИКА<br/> СО&nbsp;СКИДКОЙ ДО&nbsp;50&nbsp;%
                                </h1>
                                <ul className='list-marked white text-uppercase fs-13 fw-7 row g-3'>
                                    <li className='col-5'>УСТОЙЧИВОСТЬ</li>
                                    <li className='col-7'>ТЕРМО-ВОДОСТОЙКОСТЬ</li>
                                    <li className='col-5'>ВЫГОДНАЯ ЦЕНА</li>
                                    <li className='col-7'>ЭКОЛОГИЧНОСТЬ</li>
                                    <li className='col-5'>СТОЙКОСТЬ</li>
                                </ul>
                                <button type="button" className='btn btn-2 fs-13 mt-4'>подробнее</button>
                            </Col>
                        </Row>
                    </Container>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="imgs/main-slider/slide-1.jpg" alt="РАСПРОДАЖА ГЕРМЕТИКА СО СКИДКОЙ ДО 50 %"/>
                    <Container>
                        <Row>
                            <Col xs={5}>
                                <h1 className='white'>
                                    <div className='fs-15 mb-3'>РАСПРОДАЖА</div>
                                    ГЕРМЕТИКА<br/> СО&nbsp;СКИДКОЙ ДО&nbsp;50&nbsp;%
                                </h1>
                                <ul className='list-marked white text-uppercase fs-13 fw-7 row g-3'>
                                    <li className='col-5'>УСТОЙЧИВОСТЬ</li>
                                    <li className='col-7'>ТЕРМО-ВОДОСТОЙКОСТЬ</li>
                                    <li className='col-5'>ВЫГОДНАЯ ЦЕНА</li>
                                    <li className='col-7'>ЭКОЛОГИЧНОСТЬ</li>
                                    <li className='col-5'>СТОЙКОСТЬ</li>
                                </ul>
                                <button type="button" className='btn btn-2 fs-13 mt-4'>подробнее</button>
                            </Col>
                        </Row>
                    </Container>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="imgs/main-slider/slide-1.jpg" alt="РАСПРОДАЖА ГЕРМЕТИКА СО СКИДКОЙ ДО 50 %"/>
                    <Container>
                        <Row>
                            <Col xs={5}>
                                <h1 className='white'>
                                    <div className='fs-15 mb-3'>РАСПРОДАЖА</div>
                                    ГЕРМЕТИКА<br/> СО&nbsp;СКИДКОЙ ДО&nbsp;50&nbsp;%
                                </h1>
                                <ul className='list-marked white text-uppercase fs-13 fw-7 row g-3'>
                                    <li className='col-5'>УСТОЙЧИВОСТЬ</li>
                                    <li className='col-7'>ТЕРМО-ВОДОСТОЙКОСТЬ</li>
                                    <li className='col-5'>ВЫГОДНАЯ ЦЕНА</li>
                                    <li className='col-7'>ЭКОЛОГИЧНОСТЬ</li>
                                    <li className='col-5'>СТОЙКОСТЬ</li>
                                </ul>
                                <button type="button" className='btn btn-2 fs-13 mt-4'>подробнее</button>
                            </Col>
                        </Row>
                    </Container>
                </SwiperSlide>
            </Swiper>

            <Container className='mb-5'>
                <h2><IoMenu/> Каталог</h2>
                <Row xs={4}>
                    <Col>
                        <h3>Стройматериалы</h3>
                    </Col>
                    <Col>
                        <h3>Стройматериалы</h3>
                    </Col>
                    <Col>
                        <h3>Стройматериалы</h3>
                    </Col>
                    <Col>
                        <h3>Стройматериалы</h3>
                    </Col>
                </Row>
            </Container>
        </main>
    );
}