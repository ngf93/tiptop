import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {NavLink, Link} from 'react-router-dom';
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
                                <button type="button" className='ms-4'>Пункт</button>
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
                            <li><NavLink to="catalog" onMouseEnter={()=>meHandler()} onMouseLeave={()=>mlHandler()}><span>Каталог</span></NavLink></li>
                            <li><NavLink to="search"><span>Поиск</span></NavLink></li>
                            <li><a href=""><span>О нас</span></a></li>
                        </ul>
                        <a href='' className='logo'>
                            <img src="imgs/logo-top.svg" />
                        </a>
                        <button type='button' className='menu'><FiMenu/></button>
                        <ul className='list-unstyled'>
                            <li><a href=""><span>Избранное</span></a></li>
                            <li><a href=""><span>Войти</span></a></li>
                            <li><a href=""><span>Корзина</span></a></li>
                        </ul>
                    </Container>
                </nav>
            </header>
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