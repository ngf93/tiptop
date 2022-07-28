import {useEffect, useRef, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink, Link } from 'react-router-dom';
import { FiNavigation, FiBookmark, FiChevronRight, FiMenu } from "react-icons/fi";

export default function Header() {
    const [catalogMenu, setCatalogMenu] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);

    const meHandler = () => {
        setCatalogMenu(true);
    }
    const mlHandler = () => {
        setCatalogMenu(false);
    }

    const ref = useRef(null);
    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setMobileMenu(false);
        }
    };
    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        }
    })

    return (
        <>
            <header>
                <div className='top'>
                    <Container className="h-100">
                        <div className='h-100 d-none d-sm-flex justify-content-between align-items-center'>
                            <div className='d-flex align-items-center'>
                                <button type="button" className='d-flex align-items-center'>
                                    <FiNavigation/>
                                    <span className='ms-2'>Город</span>
                                </button>
                                <button type="button" className='ms-4'>Пункт</button>
                                <button type="button" className='ms-4'>Пункт</button>
                                <button type="button" className='ms-4'>Пункт</button>
                                <Link to="/contacts" className='ms-4'>Контакты</Link>
                            </div>
                            <div>
                                <a href="tel:88000000000">8 800 000 00 00</a>
                            </div>
                        </div>
                    </Container>
                </div>
                <nav>
                    <Container>
                        <ul className='list-unstyled'>
                            <li><NavLink to="/catalog" onMouseEnter={()=>meHandler()} onMouseLeave={()=>mlHandler()}><span>Каталог</span></NavLink></li>
                            <li><NavLink to="/search"><span>Поиск</span></NavLink></li>
                            <li><a href=""><span>О нас</span></a></li>
                        </ul>
                        <Link to='/' className='logo'>
                            <img src="imgs/logo-top.svg" />
                        </Link>
                        <button type='button' className='menu' onClick={()=>setMobileMenu((mobileMenu===true) ? false : true)}><FiMenu/></button>
                        <ul className='list-unstyled'>
                            <li><NavLink to="/favorites"><span>Избранное</span></NavLink></li>
                            <li><a href=""><span>Войти</span></a></li>
                            <li><a href=""><span>Корзина</span></a></li>
                        </ul>
                    </Container>
                </nav>
            </header>
            {
                (mobileMenu) &&
                <div id='mobileMenu'>
                    <Container>
                        <section ref={ref} className='menu'>
                            <div className='p-3 p-sm-4 fs-13 d-flex align-items-center'>
                                <button type='button' className='btn btn-1 px-2 px-sm-3 py-1 py-sm-2 fw-4'><span>Новинки</span></button>
                                <button type='button' className='btn btn-1 px-2 px-sm-3 py-1 py-sm-2 color-2 fw-4 ms-3 ms-sm-4'><span>Хиты</span></button>
                                <button type='button' className='btn btn-1 px-2 px-sm-3 py-1 py-sm-2 color-3 fw-4 ms-3 ms-sm-4'><span>Распродажа</span></button>
                            </div>
                            <hr className='m-0'/>
                            <nav className='p-3 p-sm-4'>
                                <ul className='list-unstyled'>
                                    <li>
                                        <Link to="/catalog">
                                            <span>Каталог</span>
                                            <FiChevronRight className='chevron'/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/favorites">
                                            <span>Избранное</span>
                                            <FiChevronRight className='chevron'/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            <span>О нас</span>
                                            <FiChevronRight className='chevron'/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/articles">
                                            <span>Статьи</span>
                                            <FiChevronRight className='chevron'/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/delivery">
                                            <span>Доставка и оплата</span>
                                            <FiChevronRight className='chevron'/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/contacts">
                                            <span>Контакты</span>
                                            <FiChevronRight className='chevron'/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            <span>Пункт</span>
                                            <FiChevronRight className='chevron'/>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                            <hr className='m-0'/>
                            <div className='p-3 p-sm-4'>
                                <div className='fs-13 fw-5'>Помощь покупателям</div>
                                <a href="tel:88008888888" className='btn btn-1 fs-12 w-100 mt-3 mt-sm-4 mb-2'><span>8 800 888 88 88</span></a>
                                <div className='fw-5 fs-09 text-center'>Режим работы: с 8 до 22</div>
                            </div>
                        </section>
                    </Container>
                </div>
            }
            {
                (catalogMenu)&&
                <div id="catalogMenu" onMouseEnter={()=>meHandler()}>
                    <Container onMouseLeave={()=>mlHandler()}>
                        <div class="level-1">
                            <h5>Каталог</h5>
                            <ul>
                                <li>
                                    <a href='/'>
                                        <FiBookmark className='icon'/>
                                        <span>Стройматериалы</span>
                                        <FiChevronRight className='chevron'/>
                                    </a>
                                </li>
                                <li>
                                    <a href='/' className='active'>
                                        <FiBookmark className='icon'/>
                                        <span>Первый уровень 1</span>
                                        <FiChevronRight className='chevron'/>
                                    </a>
                                </li>
                                <li>
                                    <a href='/'>
                                        <FiBookmark className='icon'/>
                                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                                        <FiChevronRight className='chevron'/>
                                    </a>
                                </li>
                                <li>
                                    <a href='/'>
                                        <FiBookmark className='icon'/>
                                        <span>Первый уровень 1</span>
                                        <FiChevronRight className='chevron'/>
                                    </a>
                                </li>
                                <li>
                                    <a href='/'>
                                        <FiBookmark className='icon'/>
                                        <span>Первый уровень 1</span>
                                        <FiChevronRight className='chevron'/>
                                    </a>
                                </li>
                                <li>
                                    <a href='/'>
                                        <FiBookmark className='icon'/>
                                        <span>Первый уровень 1</span>
                                        <FiChevronRight className='chevron'/>
                                    </a>
                                </li>
                                <li>
                                    <a href='/'>
                                        <FiBookmark className='icon'/>
                                        <span>Первый уровень 1</span>
                                        <FiChevronRight className='chevron'/>
                                    </a>
                                </li>
                                <li>
                                    <a href='/'>
                                        <FiBookmark className='icon'/>
                                        <span>Первый уровень 1</span>
                                        <FiChevronRight className='chevron'/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="level-2">
                            <ul>
                                <li>
                                    <a href='/'>
                                        <span>Стройматериалы</span>
                                        <FiChevronRight className='chevron'/>
                                    </a>
                                </li>
                                <li>
                                    <a href='/' className='active'>
                                        <span>Первый уровень 1</span>
                                        <FiChevronRight className='chevron'/>
                                    </a>
                                </li>
                                <li>
                                    <a href='/'>
                                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                                        <FiChevronRight className='chevron'/>
                                    </a>
                                </li>
                                <li>
                                    <a href='/'>
                                        <span>Первый уровень 1</span>
                                        <FiChevronRight className='chevron'/>
                                    </a>
                                </li>
                                <li>
                                    <a href='/'>
                                        <span>Первый уровень 1</span>
                                        <FiChevronRight className='chevron'/>
                                    </a>
                                </li>
                                <li>
                                    <a href='/'>
                                        <span>Первый уровень 1</span>
                                        <FiChevronRight className='chevron'/>
                                    </a>
                                </li>
                                <li>
                                    <a href='/'>
                                        <span>Первый уровень 1</span>
                                        <FiChevronRight className='chevron'/>
                                    </a>
                                </li>
                                <li>
                                    <a href='/'>
                                        <span>Первый уровень 1</span>
                                        <FiChevronRight className='chevron'/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="level-3">
                            <ul>
                                <li>
                                    <a href='/'>
                                        <span>Стройматериалы</span>
                                        <FiChevronRight className='chevron'/>
                                    </a>
                                </li>
                                <li>
                                    <a href='/' className='active'>
                                        <span>Первый уровень 1</span>
                                        <FiChevronRight className='chevron'/>
                                    </a>
                                </li>
                                <li>
                                    <a href='/'>
                                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                                        <FiChevronRight className='chevron'/>
                                    </a>
                                </li>
                                <li>
                                    <a href='/'>
                                        <span>Первый уровень 1</span>
                                        <FiChevronRight className='chevron'/>
                                    </a>
                                </li>
                                <li>
                                    <a href='/'>
                                        <span>Первый уровень 1</span>
                                        <FiChevronRight className='chevron'/>
                                    </a>
                                </li>
                                <li>
                                    <a href='/'>
                                        <span>Первый уровень 1</span>
                                        <FiChevronRight className='chevron'/>
                                    </a>
                                </li>
                                <li>
                                    <a href='/'>
                                        <span>Первый уровень 1</span>
                                        <FiChevronRight className='chevron'/>
                                    </a>
                                </li>
                                <li>
                                    <a href='/'>
                                        <span>Первый уровень 1</span>
                                        <FiChevronRight className='chevron'/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="level-4">
                            <Row xs={2} className="g-3 g-xl-4">
                                <Col>
                                    <div className='brand'>
                                        <img src="imgs/img4.png" alt='Название бренда'/>
                                        <h6>Название бренда</h6>
                                    </div>
                                </Col>
                                <Col>
                                    <div className='brand'>
                                        <img src="imgs/img4.png" alt='Название бренда'/>
                                        <h6>Название бренда</h6>
                                    </div>
                                </Col>
                                <Col>
                                    <div className='brand'>
                                        <img src="imgs/img4.png" alt='Название бренда'/>
                                        <h6>Название бренда</h6>
                                    </div>
                                </Col>
                                <Col>
                                    <div className='brand'>
                                        <img src="imgs/img4.png" alt='Название бренда'/>
                                        <h6>Название бренда</h6>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
            }
        </>
    );
}