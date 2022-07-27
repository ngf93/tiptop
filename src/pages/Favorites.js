import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ProductCard from '../components/ProductCard';
import Pagination from '../components/Pagination';

export default function Favorites() {
    return (
        <main>
            <Container className='mb-6'>
                <h1 className='inner'>Избранное</h1>

                <div className='d-md-flex align-items-center justify-content-between'>
                    <div className='d-none d-md-flex align-items-center'>
                        <button type='button' className='btn btn-1 px-2 px-sm-3 py-1 py-sm-2 fw-4'><span>Новинки</span></button>
                        <button type='button' className='btn btn-1 px-2 px-sm-3 py-1 py-sm-2 color-2 fw-4 ms-3 ms-xl-4'><span>Хиты</span></button>
                        <button type='button' className='btn btn-1 px-2 px-sm-3 py-1 py-sm-2 color-3 fw-4 ms-3 ms-xl-4'><span>Распродажа</span></button>
                    </div>
                    <div className='d-flex align-items-center justify-content-end'>
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
                    </div>
                </div>
                <hr className='my-4 my-xl-5'/>
                <Row xs={2} md={3} lg={4} className="gy-4 gx-3 g-sm-5 g-md-4 g-xl-5">
                    <Col>
                        <ProductCard code={'25678'} title={'Название товара'} price={'625,00'} fav={true} discount={'45'} bonus={'20'} />
                    </Col>
                    <Col>
                        <ProductCard code={'0001'} title={'Название товара'} price={'625,00'} fav={true} discount={'25'} bonus={'20'} />
                    </Col>
                    <Col>
                        <ProductCard code={''} title={'Название товара'} price={'625,00'} fav={true} discount={'5'} bonus={''}/>
                    </Col>
                    <Col>
                        <ProductCard code={'9494'} title={'Название товара'} price={'625,00'} fav={true} bonus={'10'}/>
                    </Col>
                    <Col>
                        <ProductCard code={'25678'} title={'Название товара'} price={'625,00'} fav={true} discount={'45'} bonus={'20'} />
                    </Col>
                    <Col>
                        <ProductCard code={'0001'} title={'Название товара'} price={'625,00'} fav={true} discount={'25'} bonus={'20'} />
                    </Col>
                    <Col>
                        <ProductCard code={''} title={'Название товара'} price={'625,00'} fav={true} discount={'5'} bonus={''}/>
                    </Col>
                    <Col>
                        <ProductCard code={'9494'} title={'Название товара'} price={'625,00'} fav={true} bonus={'10'}/>
                    </Col>
                    <Col>
                        <ProductCard code={'25678'} title={'Название товара'} price={'625,00'} fav={true} discount={'45'} bonus={'20'} />
                    </Col>
                    <Col>
                        <ProductCard code={'0001'} title={'Название товара'} price={'625,00'} fav={true} discount={'25'} bonus={'20'} />
                    </Col>
                    <Col>
                        <ProductCard code={''} title={'Название товара'} price={'625,00'} fav={true} discount={'5'} bonus={''}/>
                    </Col>
                    <Col>
                        <ProductCard code={'9494'} title={'Название товара'} price={'625,00'} fav={true} bonus={'10'}/>
                    </Col>
                </Row>

                <Pagination />
            </Container>
        </main>
    );
}