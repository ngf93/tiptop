import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { VscArrowLeft, VscChevronDown, VscChevronUp } from "react-icons/vsc";
import ProductsSlider from '../components/ProductsSlider';
import Pagination from '../components/Pagination';
import CartItem from '../components/CartItem';

export default function ShoppingCart() {
    const [count, setCount] = useState(2);
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
        <main className='total-padding'>
            <Container>
                <section className='mb-6'>
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
                            <Col lg={8}>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <div className='fs-11 fw-7'>Сортировка:</div>
                                    <div className='d-flex align-items-center justify-content-end'>
                                        <select className='fs-11 fw-7' defaultValue={'val-2'}>
                                            <option value={'val-1'}>Сначала дешёвые</option>
                                            <option value={'val-2'}>Сначала дорогие</option>
                                            <option value={'val-3'}>По дате добавления</option>
                                            <option value={'val-4'}>Сначала новинки</option>
                                            <option value={'val-5'}>По алфавиту</option>
                                            <option value={'val-6'}>По размеру скидки</option>
                                        </select>
                                        <select className='d-none d-sm-block ms-5 fs-11 fw-7' defaultValue={'val-2'}>
                                            <option value={'val-1'}>Показывать по 5</option>
                                            <option value={'val-2'}>Показывать по 10</option>
                                            <option value={'val-3'}>Показывать все</option>
                                        </select>
                                    </div>
                                </div>
                                <hr className='my-3 my-xl-4'/>
                                <div className='fs-11 fw-7 mb-4'>Выбрано товаров: 4</div>

                                <CartItem />
                                <CartItem />
                                <CartItem />
                                <CartItem />

                                <Pagination/>
                            </Col>
                            <Col lg={4} xxl={3}>
                                <div className='total'>
                                    <h5 onClick={()=>setFull((full === true)?false:true)} className='order-1 d-flex align-items-center mb-2 mb-md-3 mb-lg-4'>
                                        <span className='me-4'>Корзина</span>
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
                                                    <td>Начисление баллов</td>
                                                    <td>56 Б</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <hr className='order-2 order-lg-3'/>
                                        </>
                                    }
                                    <div className='order-1 order-lg-4 fw-5 fs-13 d-flex align-items-center justify-content-between py-lg-2'>
                                        <div>Итого</div>
                                        <div>2 500 ₽</div>
                                    </div>
                                    <Link to="/checkout" className='order-4 btn btn-1 fs-11 w-100 px-4 mt-2'><span>Перейти к оформлению</span></Link>
                                </div>
                                <aside className='d-none d-lg-block mt-4'></aside>
                                <aside className='d-none d-lg-block mt-4'></aside>
                            </Col>
                        </Row>
                        : <div className='d-flex flex-column align-items-center py-5'>
                            <h2 className='fs-20'>Ваша корзина ещё пуста</h2>
                            <p className='text-center fs-13 mb-4 mb-sm-5'>Воспользуйтесь поиском или перейдите в каталог, чтобы заполнить её товарами</p>
                            <Link to='/catalog' className='btn btn-1 fs-13'>Перейти в каталог</Link>
                        </div>
                    }
                </section>
                
                <ProductsSlider className='d-none d-lg-block' />
            </Container>
        </main>
    );
}