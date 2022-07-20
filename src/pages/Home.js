import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { IoMenu, IoChevronForward } from "react-icons/io5";
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';


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
                                    <div className='title-font fs-15 mb-3'>РАСПРОДАЖА</div>
                                    ГЕРМЕТИКА<br/> СО&nbsp;СКИДКОЙ ДО&nbsp;50&nbsp;%
                                </h1>
                                <ul className='list-marked white text-uppercase title-font fs-13 fw-7 row g-3'>
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
                                    <div className='title-font fs-15 mb-3'>РАСПРОДАЖА</div>
                                    ГЕРМЕТИКА<br/> СО&nbsp;СКИДКОЙ ДО&nbsp;50&nbsp;%
                                </h1>
                                <ul className='list-marked white text-uppercase title-font fs-13 fw-7 row g-3'>
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
                                    <div className='title-font fs-15 mb-3'>РАСПРОДАЖА</div>
                                    ГЕРМЕТИКА<br/> СО&nbsp;СКИДКОЙ ДО&nbsp;50&nbsp;%
                                </h1>
                                <ul className='list-marked white text-uppercase title-font fs-13 fw-7 row g-3'>
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

            <Container className='mb-6'>
                <h2><IoMenu/> Каталог</h2>
                <Row xs={4} className="g-4">
                    <Col>
                        <CategoryCard />
                    </Col>
                    <Col>
                        <CategoryCard />
                    </Col>
                    <Col>
                        <CategoryCard />
                    </Col>
                    <Col>
                        <CategoryCard />
                    </Col>
                    <Col>
                        <CategoryCard />
                    </Col>
                    <Col>
                        <CategoryCard />
                    </Col>
                    <Col>
                        <CategoryCard />
                    </Col>
                    <Col>
                        <CategoryCard />
                    </Col>
                    <Col>
                        <CategoryCard />
                    </Col>
                    <Col>
                        <CategoryCard />
                    </Col>
                    <Col>
                        <CategoryCard />
                    </Col>
                    <Col>
                        <CategoryCard />
                    </Col>
                </Row>
            </Container>

            <Container className='mb-6'>
                <div className='offer offer-1'>
                    <div className='text'>
                        <h2 className='fs-35 mb-2'>СКИДКИ ДО 60%</h2>
                        <h2 className='mb-0'>на все товары для дачи и сада</h2>
                    </div>
                    <img src="imgs/img1.png" alt="СКИДКИ ДО 60% на все товары для дачи и сада"/>
                    <div className='expiration'>Предложение действительно до&nbsp;18.04.2022</div>
                </div>
            </Container>

            <Container className='mb-6'>
                <div className='d-flex justify-content-between mb-5'>
                    <h2 className='mb-0'>Топ продаж</h2>
                    <a href='/' className='fs-11 d-flex align-items-center'>
                        <span className='me-1'>Смотреть все</span>
                        <IoChevronForward/>
                    </a>
                </div>
                <Row xs={4} className="gx-5">
                    <Col>
                        <ProductCard code={'25678'} title={'Название товара'} price={'625,00'} fav={true} discount={'45'} bonus={'20'} />
                    </Col>
                    <Col>
                        <ProductCard code={'0001'} title={'Название товара'} price={'625,00'} fav={false} discount={'25'} bonus={'20'} />
                    </Col>
                    <Col>
                        <ProductCard code={''} title={'Название товара'} price={'625,00'} fav={false} discount={'5'} bonus={''}/>
                    </Col>
                    <Col>
                        <ProductCard code={'9494'} title={'Название товара'} price={'625,00'} fav={true} bonus={'10'}/>
                    </Col>
                </Row>
            </Container>

            <Container className='mb-6'>
                <div className='d-flex justify-content-between mb-5'>
                    <h2 className='mb-0'>Сезонные товары</h2>
                    <a href='/' className='fs-11 d-flex align-items-center'>
                        <span className='me-1'>Смотреть все</span>
                        <IoChevronForward/>
                    </a>
                </div>
                <Row xs={4} className="gx-5">
                    <Col>
                        <ProductCard code={'25678'} title={'Название товара'} price={'625,00'} fav={true} discount={'45'} bonus={'20'} />
                    </Col>
                    <Col>
                        <ProductCard code={'0001'} title={'Название товара'} price={'625,00'} fav={false} discount={'25'} bonus={'20'} />
                    </Col>
                    <Col>
                        <ProductCard code={''} title={'Название товара'} price={'625,00'} fav={false} discount={'5'} bonus={''}/>
                    </Col>
                    <Col>
                        <ProductCard code={'9494'} title={'Название товара'} price={'625,00'} fav={true} bonus={'10'}/>
                    </Col>
                </Row>
            </Container>

            <Container className='mb-6'>
                <div className='d-flex justify-content-between mb-5'>
                    <h2 className='mb-0'>Сезонные товары</h2>
                    <a href='/' className='fs-11 d-flex align-items-center'>
                        <span className='me-1'>Смотреть все</span>
                        <IoChevronForward/>
                    </a>
                </div>
                <Row xs={4} className="gx-5">
                    <Col>
                        <ProductCard code={'25678'} title={'Название товара'} price={'625,00'} fav={true} discount={'45'} bonus={'20'} />
                    </Col>
                    <Col>
                        <ProductCard code={'0001'} title={'Название товара'} price={'625,00'} fav={false} discount={'25'} bonus={'20'} />
                    </Col>
                    <Col>
                        <ProductCard code={''} title={'Название товара'} price={'625,00'} fav={false} discount={'5'} bonus={''}/>
                    </Col>
                    <Col>
                        <ProductCard code={'9494'} title={'Название товара'} price={'625,00'} fav={true} bonus={'10'}/>
                    </Col>
                </Row>
            </Container>

            <Container className='mb-6'>
                <div className='offer offer-2'>
                    <img src="imgs/logo-round.png" alt="тип-топ"/>
                    <div className='text'>
                        <h2 className='fs-35 mb-2'>ГЛОБАЛЬНАЯ РАСПРОДАЖА</h2>
                        <h2 className='mb-0'>скидки до 90 % по промокоду «VESNA»</h2>
                    </div>
                </div>
            </Container>

            <Container className='mb-6'>
                <div className='d-flex justify-content-between mb-5'>
                    <h2 className='mb-0'>Статьи и советы</h2>
                    <a href='/' className='fs-11 d-flex align-items-center'>
                        <span className='me-1'>Смотреть все</span>
                        <IoChevronForward/>
                    </a>
                </div>
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={20}
                    slidesPerView={3}
                    pagination={{ clickable: true }}
                >
                    <SwiperSlide>
                        <article className='preview'>
                            <figure>
                                <img src="imgs/img3.png"/>
                                <figcaption>
                                    <h3>Плитка на кухню. Основные правила при выборе.</h3>
                                </figcaption>
                            </figure>
                            <div className='mt-4 d-flex justify-content-between align-items-center'>
                                <h5>Какую плитку выбрать на кухню?</h5>
                                <a href="/">Читать</a>
                            </div>
                        </article>
                    </SwiperSlide>
                    <SwiperSlide>
                    </SwiperSlide>
                    <SwiperSlide>
                    </SwiperSlide>
                </Swiper>
            </Container>
        </main>
    );
}