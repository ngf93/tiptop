import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { VscArrowLeft } from "react-icons/vsc";
import ProductsSlider from '../components/ProductsSlider';
import Pagination from '../components/Pagination';

export default function ShoppingCart() {
    const [count, setCount] = useState(0);

    return (
        <main>
            <Container>
                <section  className='mb-6'>
                    <div className='d-flex align-items-center d-md-block mb-3 mb-sm-4 mb-md-0'>
                        <Link to="/" className="btn btn-4 fs-11 px-3 mb-md-5">
                            <VscArrowLeft className='fs-12'/>
                            <span className='ms-2 d-none d-md-inline'>Назад на главную</span>
                        </Link>
                        {
                            (count>0)
                            ? <h1 className='inner mb-0 mb-md-5 ms-2 ms-sm-4 ms-md-0'>В Корзине {count} товара</h1>
                            : <h1 className='inner mb-0 mb-md-5 ms-2 ms-sm-4 ms-md-0'>Корзина</h1>
                        }
                    </div>
                    {
                        (count>0)
                        ? <Row className='justify-content-between'>
                            <Col md={8}>
                                <div className='d-lg-flex align-items-center justify-content-between'>
                                    <div className='fs-11 fw-7'>Сортировка</div>
                                    <div className='mt-4 mt-lg-0 d-flex align-items-center justify-content-end'>
                                        <select className='fs-11 fw-7' defaultValue={'val-2'}>
                                            <option value={'val-1'}>Сначала дешёвые</option>
                                            <option value={'val-2'}>Сначала дорогие</option>
                                            <option value={'val-3'}>По дате добавления</option>
                                            <option value={'val-4'}>Сначала новинки</option>
                                            <option value={'val-5'}>По алфавиту</option>
                                            <option value={'val-6'}>По размеру скидки</option>
                                        </select>
                                        <select className='d-none d-sm-block ms-5 fs-11 fw-7' defaultValue={'val-2'}>
                                            <option value={'val-1'}>Показывать по 12</option>
                                            <option value={'val-2'}>Показывать по 24</option>
                                            <option value={'val-3'}>Показывать все</option>
                                        </select>
                                    </div>
                                </div>
                                <hr className='my-3 my-xl-4'/>
                                <div className='fs-11 fw-7'>Выбрано товаров: 4</div>

                                {/* <div className='cart-item'>
                                    <img src="imgs/img2.png" />

                                </div> */}

                                <Pagination/>
                            </Col>
                            <Col md={3}>
                                <div className='total'></div>
                            </Col>
                        </Row>
                        : <div className='d-flex flex-column align-items-center py-5'>
                            <h2 className='fs-20'>Ваша корзина ещё пуста</h2>
                            <p className='text-center fs-13 mb-4 mb-sm-5'>Воспользуйтесь поиском или перейдите в каталог, чтобы заполнить её товарами</p>
                            <Link to='/catalog' className='btn btn-1 fs-13'>Перейти в каталог</Link>
                        </div>
                    }
                </section>
                
                <ProductsSlider />
            </Container>
        </main>
    );
}