import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ProductCard from '../components/ProductCard';
import Pagination from '../components/Pagination';

import Range from 'rc-slider';

import Offcanvas from 'react-bootstrap/Offcanvas';
import { VscChromeClose, VscChevronRight } from "react-icons/vsc";

export default function Category(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [field, setField] = useState('0');

    const rangeMin = 0;
    const rangeMax = 10000;
    const [rangeVal, setRangeVal] = useState([1000, 2000]);
    const rangeHandler = (value) => {
        setRangeVal(value);
    }
    const rangeValueHandler = (value, i) => {
        let copy = Object.assign([], rangeVal);
        copy[i] = value;
        setRangeVal(copy);
    }

    return (
        <>
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
                                    <Row md={2} className="gx-2 gx-xl-3 mb-3">
                                        <Col>
                                            <input type='number' className='from fw-7 fs-11' placeholder='От' value={rangeVal[0]} onChange={(e) => rangeValueHandler(e.target.value, 0)}/>
                                        </Col>
                                        <Col>
                                            <input type='number' className='from fw-7 fs-11' placeholder='До' value={rangeVal[1]} onChange={(e) => rangeValueHandler(e.target.value, 1)}/>
                                        </Col>
                                    </Row>

                                    <Range range allowCross={false} value={rangeVal} onChange={rangeHandler} min={rangeMin} max={rangeMax}/>
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
                                <button type="reset" className='btn-3 w-100'>Сбросить фильтры</button>
                            </form>
                        </Col>
                        <Col lg={9}>
                            <div className='d-lg-flex align-items-center justify-content-between'>
                                <div className='d-flex align-items-center'>
                                    <button type='button' className='btn-1 px-2 px-sm-3 py-1 py-sm-2 fw-4'><span>Новинки</span></button>
                                    <button type='button' className='btn-1 px-2 px-sm-3 py-1 py-sm-2 color-2 fw-4 ms-3 ms-xl-4'><span>Хиты</span></button>
                                    <button type='button' className='btn-1 px-2 px-sm-3 py-1 py-sm-2 color-3 fw-4 ms-3 ms-xl-4'><span>Распродажа</span></button>
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
                                    <button type='button' onClick={handleShow} className='fs-11 fw-7 ms-auto d-lg-none'>Фильтры</button>
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

                            <Pagination />
                        </Col>
                    </Row>
                </Container>
            </main>
            <Offcanvas show={show} onHide={handleClose} className=''>
                <Offcanvas.Body>
                    <form className='filterMobile'>
                        <section className='main'>
                            {
                                (field === '0')&&
                                <fieldset>
                                    <div className='top'>
                                        <legend>Фильтры</legend>
                                        <button type='button' onClick={handleClose}><VscChromeClose className='fs-13'/></button>
                                    </div>
                                    <ul>
                                        <li>
                                            <button type='button' onClick={()=>setField('1')}>
                                                <span>Цена</span>
                                                <VscChevronRight/>
                                            </button>
                                        </li>
                                        <li>
                                            <button type='button' onClick={()=>setField('2')}>
                                                <span>Цвет</span>
                                                <VscChevronRight/>
                                            </button>
                                        </li>
                                        <li>
                                            <button type='button' onClick={()=>setField('3')}>
                                                <span>Страна производитель</span>
                                                <VscChevronRight/>
                                            </button>
                                        </li>
                                        <li>
                                            <button type='button' onClick={()=>setField('4')}>
                                                <span>Фильтр 4</span>
                                                <VscChevronRight/>
                                            </button>
                                        </li>
                                        <li>
                                            <button type='button' onClick={()=>setField('5')}>
                                                <span>Фильтр 5</span>
                                                <VscChevronRight/>
                                            </button>
                                        </li>
                                    </ul>
                                </fieldset>
                            }
                            {
                                (field === '1')&&
                                <fieldset>
                                    <div className='top'>
                                        <button type='button' className='gray' onClick={()=>setField('0')}>Назад</button>
                                        <legend>Цена</legend>
                                        <button type='button' className='gray'>Сбросить</button>
                                    </div>
                                    <ul>
                                        <li>
                                            <Row md={2} className="gx-2 gx-xl-3 mb-3">
                                                <Col>
                                                    <input type='number' className='from fw-7 fs-11' placeholder='От' value={rangeVal[0]} onChange={(e) => rangeValueHandler(e.target.value, 0)}/>
                                                </Col>
                                                <Col>
                                                    <input type='number' className='from fw-7 fs-11' placeholder='До' value={rangeVal[1]} onChange={(e) => rangeValueHandler(e.target.value, 1)}/>
                                                </Col>
                                            </Row>
                                            <Range className='mb-2' range allowCross={false} value={rangeVal} onChange={rangeHandler} min={0} max={10000}/>
                                        </li>
                                        <li>
                                            <label>
                                                <span>До 1000</span>
                                                <input type='radio' name='price-range' value={[rangeMin, 1000]} onChange={(e)=>setRangeVal([rangeMin, 1000])} />
                                            </label>
                                        </li>
                                        <li>
                                            <label>
                                                <span>От 1000 до 2000</span>
                                                <input type='radio' name='price-range' value={[1000, 2000]} defaultChecked={true} onChange={(e)=>setRangeVal([1000, 2000])}/>
                                            </label>
                                        </li>
                                        <li>
                                            <label>
                                                <span>От 2000 до 4000</span>
                                                <input type='radio' name='price-range' value={[2000, 4000]} onChange={(e)=>setRangeVal([2000, 4000])}/>
                                            </label>
                                        </li>
                                        <li>
                                            <label>
                                                <span>От 4000</span>
                                                <input type='radio' name='price-range' value={[4000, rangeMax]} onChange={(e)=>setRangeVal([4000, rangeMax])}/>
                                            </label>
                                        </li>
                                    </ul>
                                </fieldset>
                            }
                            {
                                (field === '2')&&
                                <fieldset>
                                    <div className='top'>
                                        <button type='button' className='gray' onClick={()=>setField('0')}>Назад</button>
                                        <legend>Цвет</legend>
                                        <button type='button' className='gray'>Сбросить</button>
                                    </div>
                                    <ul>
                                        <li>
                                            <label>
                                                <span>Цвет 1</span>
                                                <input type='radio' name='color'/>
                                            </label>
                                        </li>
                                        <li>
                                            <label>
                                                <span>Цвет 2</span>
                                                <input type='radio' name='color'/>
                                            </label>
                                        </li>
                                        <li>
                                            <label>
                                                <span>Цвет 3</span>
                                                <input type='radio' name='color'/>
                                            </label>
                                        </li>
                                        <li>
                                            <label>
                                                <span>Цвет 4</span>
                                                <input type='radio' name='color'/>
                                            </label>
                                        </li>
                                    </ul>
                                </fieldset>
                            }
                            {
                                (field === '3')&&
                                <fieldset>
                                    <div className='top'>
                                        <button type='button' className='gray' onClick={()=>setField('0')}>Назад</button>
                                        <legend>Страна производитель</legend>
                                        <button type='button' className='gray'>Сбросить</button>
                                    </div>
                                    <ul>
                                        <li>
                                            <label>
                                                <span>Страна производитель 1</span>
                                                <input type='radio' name='producing-country'/>
                                            </label>
                                        </li>
                                        <li>
                                            <label>
                                                <span>Страна производитель 2</span>
                                                <input type='radio' name='producing-country'/>
                                            </label>
                                        </li>
                                        <li>
                                            <label>
                                                <span>Страна производитель 3</span>
                                                <input type='radio' name='producing-country'/>
                                            </label>
                                        </li>
                                        <li>
                                            <label>
                                                <span>Страна производитель 4</span>
                                                <input type='radio' name='producing-country'/>
                                            </label>
                                        </li>
                                    </ul>
                                </fieldset>
                            }
                            {
                                (field === '4')&&
                                <fieldset>
                                    <div className='top'>
                                        <button type='button' className='gray' onClick={()=>setField('0')}>Назад</button>
                                        <legend>Фильтр 4</legend>
                                        <button type='button' className='gray'>Сбросить</button>
                                    </div>
                                    <ul>
                                        <li>
                                            <label>
                                                <span>Фильтр 4 1</span>
                                                <input type='radio' name='filter-4'/>
                                            </label>
                                        </li>
                                        <li>
                                            <label>
                                                <span>Фильтр 4 2</span>
                                                <input type='radio' name='filter-4'/>
                                            </label>
                                        </li>
                                        <li>
                                            <label>
                                                <span>Фильтр 4 3</span>
                                                <input type='radio' name='filter-4'/>
                                            </label>
                                        </li>
                                        <li>
                                            <label>
                                                <span>Фильтр 4 4</span>
                                                <input type='radio' name='filter-4'/>
                                            </label>
                                        </li>
                                    </ul>
                                </fieldset>
                            }
                            {
                                (field === '5')&&
                                <fieldset>
                                    <div className='top'>
                                        <button type='button' className='gray' onClick={()=>setField('0')}>Назад</button>
                                        <legend>Фильтр 5</legend>
                                        <button type='button' className='gray'>Сбросить</button>
                                    </div>
                                    <ul>
                                        <li>
                                            <label>
                                                <span>Фильтр 5 1</span>
                                                <input type='radio' name='filter-5'/>
                                            </label>
                                        </li>
                                        <li>
                                            <label>
                                                <span>Фильтр 5 2</span>
                                                <input type='radio' name='filter-5'/>
                                            </label>
                                        </li>
                                        <li>
                                            <label>
                                                <span>Фильтр 5 3</span>
                                                <input type='radio' name='filter-5'/>
                                            </label>
                                        </li>
                                        <li>
                                            <label>
                                                <span>Фильтр 5 4</span>
                                                <input type='radio' name='filter-5'/>
                                            </label>
                                        </li>
                                    </ul>
                                </fieldset>
                            }
                        </section>
                        <div className='bottom'>
                            <button type='submit' className='btn-1 fs-12 w-100'>
                                <span>Готово</span>
                            </button>
                        </div>
                    </form>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}