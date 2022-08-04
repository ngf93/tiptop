import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs, FreeMode } from 'swiper';
import 'swiper/css';

import { IoStarOutline, IoStar, IoStarHalf } from "react-icons/io5";
import BtnFav from '../components/utils/BtnFav';
import AddToCart from '../components/utils/AddToCart';
import Review from '../components/Review';
import Pagination from '../components/Pagination';
import ProductsSlider from '../components/ProductsSlider';
import Breadcrumbs from '../components/utils/Breadcrumbs';

export default function Product() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [tab, setTab] = useState('1');

    return (
        <main>
            <Container>
                <Breadcrumbs/>

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
                                <IoStarHalf/>
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
                            <Row className='mt-md-4'>
                                <Col md={7}>
                                    <AddToCart cart={0} />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <h2 className='d-none d-sm-block'>О товаре</h2>
                    
                    <div className='tabs'>
                        <button type="button" id="tab-btn-1"  className={(tab==='1') && 'active'} onClick={()=>setTab('1')}>Описание</button>
                        {
                            (tab === '1') &&
                            <div className='content'>
                                <Row>
                                    <Col xl={9}>
                                        <div className='text'>
                                            <p>За 300р, конечно, не взяла бы такой. Пластик внешний не внушает доверия, но посмотрим, на сколько мужу хватит. Муж газелист, возит в машине. Внутри просто бумажная вкладка с надписью, да еще и не до конца стакана(( это расстроило больше всего. Можно раскрутить и любую картинку свою вложить и пожалуйста. Края топорно обработаны. 300мл наливается прямо до начала резбы - соответствует. Короче, не ведитесь на брендирование. Цена этому стакану рублей 100-150 максимум.</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        }
                        <button type="button" id="tab-btn-2" className={(tab==='2') && 'active'} onClick={()=>setTab('2')}>Харакетиристики</button>
                        {
                            (tab === '2') &&
                            <div className='content'>
                                <div className='characteristics'>
                                    <h4 className='d-none d-md-block fs-20 fw-7 mb-4 mb-md-5'>Характеристики</h4>
                                    <h5>Хар1</h5>
                                    <ul className="specification list-unstyled">
                                        <li class="line">
                                            <div class="gray">Пояс1</div>
                                            <div>Отв1</div>
                                        </li>
                                        <li class="line">
                                            <div class="gray">Пояс1</div>
                                            <div>Отв1</div>
                                        </li>
                                        <li class="line">
                                            <div class="gray">Пояс1</div>
                                            <div>Отв1</div>
                                        </li>
                                        <li class="line">
                                            <div class="gray">Пояс1</div>
                                            <div>Отв1</div>
                                        </li>
                                    </ul>
                                    <h5>Хар1</h5>
                                    <ul className="specification list-unstyled">
                                        <li class="line">
                                            <div class="gray">Пояс1</div>
                                            <div>Отв1</div>
                                        </li>
                                        <li class="line">
                                            <div class="gray">Пояс1</div>
                                            <div>Отв1</div>
                                        </li>
                                        <li class="line">
                                            <div class="gray">Пояс1</div>
                                            <div>Отв1</div>
                                        </li>
                                        <li class="line">
                                            <div class="gray">Пояс1</div>
                                            <div>Отв1</div>
                                        </li>
                                    </ul>
                                    <h5>Хар1</h5>
                                    <ul className="specification list-unstyled">
                                        <li class="line">
                                            <div class="gray">Пояс1</div>
                                            <div>Отв1</div>
                                        </li>
                                        <li class="line">
                                            <div class="gray">Пояс1</div>
                                            <div>Отв1</div>
                                        </li>
                                        <li class="line">
                                            <div class="gray">Пояс1</div>
                                            <div>Отв1</div>
                                        </li>
                                        <li class="line">
                                            <div class="gray">Пояс1</div>
                                            <div>Отв1</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        }
                        <button type="button" id="tab-btn-3" className={(tab==='3') && 'active'} onClick={()=>setTab('3')}>Отзывы 15</button>
                        {
                            (tab === '3') &&
                            <div className='content'>
                                <Row className="flex-lg-row-reverse justify-content-between">
                                    <Col lg={3} className="mb-4 mb-sm-5 mb-lg-0">
                                        <button type='button' className='btn-1 w-100 fs-11 mb-4 mb-sm-5'><span>Оставить отзыв</span></button>

                                        <div className='d-flex justify-content-between align-items-center mb-4'>
                                            <div className='rating'>
                                                <IoStar/>
                                                <IoStar/>
                                                <IoStar/>
                                                <IoStarHalf/>
                                                <IoStarOutline/>
                                            </div>
                                            <h2 className='mb-0'>3,5</h2>
                                        </div>
                                        <div className='rating-info mb-2'>
                                            <div className='val'>5</div>
                                            <ProgressBar now={100} />
                                            <div className='percent'>100%</div>
                                        </div>
                                        <div className='rating-info mb-2'>
                                            <div className='val'>4</div>
                                            <ProgressBar now={0} />
                                            <div className='percent'>0%</div>
                                        </div>
                                        <div className='rating-info mb-2'>
                                            <div className='val'>3</div>
                                            <ProgressBar now={60} />
                                            <div className='percent'>60%</div>
                                        </div>
                                        <div className='rating-info mb-2'>
                                            <div className='val'>2</div>
                                            <ProgressBar now={20} />
                                            <div className='percent'>20%</div>
                                        </div>
                                        <div className='rating-info'>
                                            <div className='val'>1</div>
                                            <ProgressBar now={5} />
                                            <div className='percent'>5%</div>
                                        </div>
                                    </Col>
                                    <Col lg={9} xxl={8}>
                                        <p className='fs-15 fw-7 mb-4 mb-sm-5'>Отзывов о товаре ещё нет – ваш может стать первым</p>

                                        <Review rating={'5'} text={'За 300р, конечно, не взяла бы такой. Пластик внешний не внушает доверия, но посмотрим, на сколько мужу хватит. Муж газелист, возит в машине. Внутри просто бумажная вкладка с надписью, да еще и не до конца стакана(( это расстроило больше всего. Можно раскрутить и любую картинку свою вложить и пожалуйста. Края топорно обработаны. 300мл наливается прямо до начала резбы - соответствует. Короче, не ведитесь на брендирование. Цена этому стакану рублей 100-150 максимум.'} author={'pochtausera@pochta.pochta'} date={'10 апреля 2022'} />
                                        <Review rating={'4'} text={'За 300р, конечно, не взяла бы такой. Пластик внешний не внушает доверия, но посмотрим, на сколько мужу хватит. Муж газелист, возит в машине. Внутри просто бумажная вкладка с надписью, да еще и не до конца стакана(( это расстроило больше всего. Можно раскрутить и любую картинку свою вложить и пожалуйста. Края топорно обработаны. 300мл наливается прямо до начала резбы - соответствует. Короче, не ведитесь на брендирование. Цена этому стакану рублей 100-150 максимум.'} author={'pochtausera@pochta.pochta'} date={'10 апреля 2022'} />
                                        <Review rating={'4'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} author={'pochtausera@pochta.pochta'} date={'10 апреля 2022'} />
                                        <Review rating={'4'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '} author={'pochtausera@pochta.pochta'} date={'10 апреля 2022'} />
                                        
                                        <Pagination/>
                                    </Col>
                                </Row>
                            </div>
                        }
                    </div>
                    <BtnFav fav={false} />
                </section>

                <ProductsSlider />
            </Container>    
        </main>
    );
}