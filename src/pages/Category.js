import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FiChevronRight } from "react-icons/fi";

import ProductCard from '../components/ProductCard';

export default function Category(props) {
    return (
        <main>
            <Container className='mb-6'>
                <nav className='breadcrumbs'>
                    <ul>
                        <li><a href="/">Каталог</a></li>
                        <li><a href="/">Плитка</a></li>
                    </ul>
                </nav>

                <h1 className='inner'>Плитка</h1>

                <Row className='mt-4 mt-md-5'>
                    <Col lg={3} className="position-relative d-none d-lg-block">
                        <form className='filter'>
                            <div className='fs-11 fw-7 mb-4'>Фильтры</div>
                            <fieldset>
                                <legend>Цена ₽</legend>
                                <Row md={2} className="gx-2 gx-xl-3">
                                    <Col><input placeholder='От'/></Col>
                                    <Col><input placeholder='До'/></Col>
                                </Row>
                            </fieldset>

                            <fieldset>
                                <legend>Торговые марки</legend>
                                <label>
                                    <input type='checkbox'/>
                                    <span className='ms-2'>Все марки</span>
                                </label>
                                <label>
                                    <input type='checkbox' defaultChecked={true}/>
                                    <span className='ms-2'>Марка 1</span>
                                </label>
                                <label>
                                    <input type='checkbox'/>
                                    <span className='ms-2'>Марка 2</span>
                                </label>
                                <label>
                                    <input type='checkbox'/>
                                    <span className='ms-2'>Марка 3</span>
                                </label>
                                <button type="button" className='light-gray'>Показать ещё 12</button>
                            </fieldset>

                            <fieldset>
                                <legend>Страна производитель</legend>
                                <label>
                                    <input type='checkbox' defaultChecked={true}/>
                                    <span className='ms-2'>Россия</span>
                                </label>
                                <label>
                                    <input type='checkbox'/>
                                    <span className='ms-2'>Китай</span>
                                </label>
                                <label>
                                    <input type='checkbox'/>
                                    <span className='ms-2'>Узбекистан</span>
                                </label>
                                <label>
                                    <input type='checkbox'/>
                                    <span className='ms-2'>Япония</span>
                                </label>
                                <button type="button" className='light-gray'>Показать ещё 12</button>
                            </fieldset>

                            <fieldset>
                                <legend>Цвет</legend>
                                <label>
                                    <input type='checkbox' defaultChecked={true}/>
                                    <span className='ms-2'>Цвет 1</span>
                                </label>
                                <label>
                                    <input type='checkbox'/>
                                    <span className='ms-2'>Цвет 2</span>
                                </label>
                                <label>
                                    <input type='checkbox'/>
                                    <span className='ms-2'>Цвет 3</span>
                                </label>
                                <label>
                                    <input type='checkbox'/>
                                    <span className='ms-2'>Цвет 4</span>
                                </label>
                                <button type="button" className='light-gray'>Показать ещё 12</button>
                            </fieldset>
                            <button type="reset" className='btn btn-3 w-100'>Сбросить фильтры</button>
                        </form>
                    </Col>
                    <Col lg={9}>
                        <div className='d-lg-flex align-items-center justify-content-between'>
                            <div className='d-flex align-items-center'>
                                <button type='button' className='btn btn-1 px-2 px-sm-3 py-1 py-sm-2 fw-4'><span>Новинки</span></button>
                                <button type='button' className='btn btn-1 px-2 px-sm-3 py-1 py-sm-2 color-2 fw-4 ms-3 ms-xl-4'><span>Хиты</span></button>
                                <button type='button' className='btn btn-1 px-2 px-sm-3 py-1 py-sm-2 color-3 fw-4 ms-3 ms-xl-4'><span>Распродажа</span></button>
                            </div>
                            <div className='mt-4 mt-lg-0 d-flex align-items-center justify-content-end'>
                                <select className='fs-11 fw-7' defaultValue={'val-5'}>
                                    <option value={'val-1'}>Сначала дешёвые</option>
                                    <option value={'val-2'}>Сначала дорогие</option>
                                    <option value={'val-3'}>По дате добавления</option>
                                    <option value={'val-4'}>Сначала новинки</option>
                                    <option value={'val-5'}>По алфавиту</option>
                                    <option value={'val-6'}>По размеру скидки</option>
                                </select>
                                <select className='d-none d-sm-block ms-4 fs-11 fw-7' defaultValue={'val-2'}>
                                    <option value={'val-1'}>Показывать по 12</option>
                                    <option value={'val-2'}>Показывать по 24</option>
                                    <option value={'val-3'}>Показывать все</option>
                                </select>
                                <button type='button' className='fs-11 fw-7 ms-auto d-lg-none'>Фильтры</button>
                            </div>
                        </div>
                        <hr className='my-4 my-xl-5'/>
                        <Row xs={2} md={3} lg={3} className="gy-4 gx-3 g-sm-5 g-md-4 g-xl-5">
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

                        <nav className='pagination mt-5'>
                            <ul>
                                <li>
                                    <button type='button'>1</button>
                                </li>
                                <li>
                                    <button type='button' className='active'>2</button>
                                </li>
                                <li>
                                    <button type='button'>3</button>
                                </li>
                                <li>
                                    <button type='button'>...</button>
                                </li>
                                <li>
                                    <button type='button'>8</button>
                                </li>
                                <li>
                                    <button type='button'>Далее <FiChevronRight/></button>
                                </li>
                            </ul>
                        </nav>
                    </Col>
                </Row>
            </Container>
        </main>
    );
}