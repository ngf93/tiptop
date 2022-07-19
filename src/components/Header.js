import React from 'react';
import Container from 'react-bootstrap/Container';
import { BsCursor } from "react-icons/bs";

export default function Header() {
    return (
        <header>
            <div className='top'>
                <Container className="h-100">
                    <div className='h-100 d-flex justify-content-between align-items-center'>
                        <div className='d-flex align-items-center'>
                            <button type="button">
                                <BsCursor/>
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
                        <li><a href="">Каталог</a></li>
                        <li><a href="">Поиск</a></li>
                        <li><a href="">О нас</a></li>
                    </ul>
                    <a href='' className='logo'>
                        <img src="imgs/logo-top.svg" />
                    </a>
                    <ul className='list-unstyled'>
                        <li><a href="">Избранное</a></li>
                        <li><a href="">Войти</a></li>
                        <li><a href="">Корзина</a></li>
                    </ul>
                </Container>
            </nav>
        </header>
    );
}