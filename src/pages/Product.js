import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ProductCard from '../components/ProductCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, FreeMode } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { FaRegHeart, FaHeart } from "react-icons/fa";
import { IoStarOutline, IoStar } from "react-icons/io5";

export default function Product() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <main>
            <Container>
                <nav className='breadcrumbs'>
                    <ul>
                        <li><a href="/">Каталог</a></li>
                        <li><a href="/">Плитка</a></li>
                        <li><a href="/">Товар</a></li>
                    </ul>
                </nav>

                <section className='product-full mb-6'>
                    <Row lg={2} className="mb-4 mb-sm-5">
                        <Col className='images'>
                            <Swiper
                                className='thumbslides'
                                direction="vertical"
                                spaceBetween={10}
                                slidesPerView={'auto'}
                                modules={[Thumbs, FreeMode]}
                                watchSlidesProgress
                                slideToClickedSlide
                                onSwiper={() => setThumbsSwiper()}
                            >
                                <SwiperSlide>
                                    <img src="imgs/product/1.png" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="imgs/product/2.png" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="imgs/product/3.png" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="imgs/product/4.png" />
                                </SwiperSlide>
                            </Swiper>
                            <Swiper
                                className='main'
                                spaceBetween={20}
                                slidesPerView={1}
                                modules={[Thumbs]} 
                                thumbs={{ swiper: thumbsSwiper }}
                            >
                                <SwiperSlide>
                                    <img src="imgs/product/1.png" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="imgs/product/2.png" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="imgs/product/3.png" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="imgs/product/4.png" />
                                </SwiperSlide>
                            </Swiper>
                        </Col>
                        <Col>
                            <div className='fw-6 mb-2 mb-sm-4'><span className='gray'>Код:</span> 25678</div>
                            <h1 className='inner'>Большое название товара в две строчки с подробным описанием</h1>
                            <div className='rating mb-4'>
                                <IoStar/>
                                <IoStar/>
                                <IoStar/>
                                <IoStar/>
                                <IoStarOutline/>
                                <span>132</span>
                            </div>
                            <div className='fs-11 mb-3'><span className='fw-7'>Доставка:</span> 14-16 апреля</div>
                            <div className='fs-11 mb-3'><span className='fw-7'>Самовывоз:</span> Адрес точки самовывоза</div>
                            <hr className='my-4'/>
                            <div className='fs-11 fw-7 mb-3'>Критерии:</div>
                            <div className='criteria'>
                                <span>Керамика</span>
                                <span>Гигиена</span>
                                <span>Теплопроводимость</span>
                            </div>
                            <div className='d-flex align-items-baseline mt-4'>
                                <span className='fs-15 fw-7 me-4'>Цена:</span>
                                <del className='gray fs-11 fw-6 me-2'>625,00</del>
                                <span className='fs-15 fw-6'>625,00 ₽</span>
                            </div>
                            <Row>
                                <Col xs={7}>
                                    <button type='button' className='btn btn-1 fs-11 mt-4 w-100'>В корзину</button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <h2 className='d-none d-sm-block'>О товаре</h2>
                    <div className='tabs'>
                        <button type="button" className='active'>Описание</button>
                        <button type="button">Харакетиристики</button>
                        <button type="button">Отзывы 15</button>
                    </div>
                    <Row>
                        <Col xl={9}>
                            <div className='text mt-3 mt-sm-4'>
                                <p>За 300р, конечно, не взяла бы такой. Пластик внешний не внушает доверия, но посмотрим, на сколько мужу хватит. Муж газелист, возит в машине. Внутри просто бумажная вкладка с надписью, да еще и не до конца стакана(( это расстроило больше всего. Можно раскрутить и любую картинку свою вложить и пожалуйста. Края топорно обработаны. 300мл наливается прямо до начала резбы - соответствует. Короче, не ведитесь на брендирование. Цена этому стакану рублей 100-150 максимум.</p>
                            </div>
                        </Col>
                    </Row>
                    <button type='button' className='btn-fav'><FaRegHeart/></button>
                </section>

                <section className='mb-6'>
                    <h4 className='fs-20 fw-7 mb-4 mb-md-5'>Вам может понравится</h4>
                    <div className='position-relative'>
                        <Swiper
                            className='position-unset'
                            modules={[Navigation]}
                            spaceBetween={8}
                            slidesPerView={2}
                            navigation
                            breakpoints={{
                                576: {
                                    slidesPerView: 2,
                                    spaceBetween: 16,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                                991: {
                                    slidesPerView: 4,
                                    spaceBetween: 24,
                                },
                            }}
                        >
                            <SwiperSlide>
                                <ProductCard code={'25678'} title={'Название товара'} price={'625,00'} fav={true} discount={'45'} bonus={'20'} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <ProductCard code={'25678'} title={'Название товара'} price={'625,00'} fav={true} discount={'45'} bonus={'20'} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <ProductCard code={'25678'} title={'Название товара'} price={'625,00'} fav={true} discount={'45'} bonus={'20'} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <ProductCard code={'25678'} title={'Название товара'} price={'625,00'} fav={true} discount={'45'} bonus={'20'} />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </section>
            </Container>    
        </main>
    );
}