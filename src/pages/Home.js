import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { IoMenu, IoChevronForward } from "react-icons/io5";

import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import ArticlePreview from '../components/ArticlePreview';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


export default function Home() {
    return (
        <main>
            <Swiper
                className='main-slider mb-4 mb-sm-5'
                modules={[Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                <SwiperSlide>
                    <img src="imgs/main-slider/slide-1.jpg" alt="РАСПРОДАЖА ГЕРМЕТИКА СО СКИДКОЙ ДО 50 %"/>
                    <Container>
                        <Row>
                            <Col xs={10} sm={8} lg={6} xxl={5}>
                                <h1 className='white'>
                                    <div className='title-font fs-15 mb-1 md-sm-2 mb-md-3'>РАСПРОДАЖА</div>
                                    ГЕРМЕТИКА<br/> СО&nbsp;СКИДКОЙ ДО&nbsp;50&nbsp;%
                                </h1>
                                <ul className='list-marked white text-uppercase title-font fs-13 fw-7 row g-2 g-sm-3'>
                                    <li className='col-5'>УСТОЙЧИВОСТЬ</li>
                                    <li className='col-7'>ТЕРМО-ВОДОСТОЙКОСТЬ</li>
                                    <li className='col-5'>ВЫГОДНАЯ ЦЕНА</li>
                                    <li className='col-7'>ЭКОЛОГИЧНОСТЬ</li>
                                    <li className='col-5'>СТОЙКОСТЬ</li>
                                </ul>
                                <button type="button" className='btn btn-2 fs-13 mt-3 mt-sm-4'>подробнее</button>
                            </Col>
                        </Row>
                    </Container>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="imgs/main-slider/slide-1.jpg" alt="РАСПРОДАЖА ГЕРМЕТИКА СО СКИДКОЙ ДО 50 %"/>
                    <Container>
                        <Row>
                            <Col xs={10} sm={8} lg={6} xxl={5}>
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
                            <Col xs={10} sm={8} lg={6} xxl={5}>
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
                <div className='d-flex justify-content-between mb-4 mb-md-5'>
                    <h2 className='mb-0'><IoMenu/> Каталог</h2>
                    <a href='/' className='link'>
                        <span className='me-1'>Смотреть все</span>
                        <IoChevronForward/>
                    </a>
                </div>
                
                <Row xs={2} md={3} lg={4} className="g-2 g-sm-3 g-xl-4">
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
                    <a href='/' className='link'>
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
                    <a href='/' className='link'>
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
                    <a href='/' className='link'>
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
                    <a href='/' className='link'>
                        <span className='me-1'>Смотреть все</span>
                        <IoChevronForward/>
                    </a>
                </div>
                <div className='position-relative'>
                    <Swiper
                    className='position-unset'
                        modules={[Navigation]}
                        spaceBetween={20}
                        slidesPerView={3}
                        navigation
                    >
                        <SwiperSlide>
                            <ArticlePreview title={'Плитка на кухню. Основные правила при выборе.'} subTitle={'Какую плитку выбрать на кухню?'} imgURL={"imgs/img3.png"}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ArticlePreview title={'Плитка на кухню. Основные правила при выборе.'} subTitle={'Какую плитку выбрать на кухню?'} imgURL={"imgs/img3.png"}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ArticlePreview title={'Плитка на кухню. Основные правила при выборе.'} subTitle={'Какую плитку выбрать на кухню?'} imgURL={"imgs/img3.png"}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ArticlePreview title={'Плитка на кухню. Основные правила при выборе.'} subTitle={'Какую плитку выбрать на кухню?'} imgURL={"imgs/img3.png"}/>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </Container>
        </main>
    );
}