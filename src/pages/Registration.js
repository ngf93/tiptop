import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputPassword from '../components/utils/InputPassword';
import { Link } from 'react-router-dom';

export default function Registration() {
    const [succ, setSucc] = useState(false);

    return (
        <main>
            <Container>
                <section id="enter-page">
                    <h1 className='inner text-center'>Регистрация</h1>
                    {
                        (succ)
                        ? <div>
                            <p className='fs-13 text-center'>Ваш аккаунт был успешно создан!</p>
                            <Link to='/catalog' className='btn-1 fs-11 mx-auto mt-4 mt-sm-5'>
                                <span>Перейти в каталог</span>
                            </Link>
                        </div>
                        : <Row className='justify-content-center'>
                            <Col md={8} lg={6}>
                                <form>
                                    <label htmlFor='user-name' className='fs-13 fw-7 mb-2'>ФИО</label>
                                    <input type='text' id="user-name" placeholder='ФИО' className='fs-11 fw-5 mb-3 mb-sm-4'/>

                                    <label htmlFor='phone' className='fs-13 fw-7 mb-2'>Номер телефона</label>
                                    <input type='tel' id="phone" placeholder='Телефон' className='fs-11 fw-5 mb-3 mb-sm-4'/>

                                    <label htmlFor='email' className='fs-13 fw-7 mb-2'>Электронная почта</label>
                                    <input type='email' id="email" placeholder='Электронная почта' className='fs-11 fw-5 mb-3 mb-sm-4'/>

                                    <div className='fs-13 fw-7 mb-2'>Пароль</div>
                                    <InputPassword className="fs-11 fw-5 mb-3 mb-sm-4"/>

                                    <div className='d-flex align-items-center justify-content-between mb-2'>
                                        <div className='fs-13 fw-7'>Повторите пароль</ div>
                                        <div className='success-color fs-09'>Пароли совпадают</div>
                                    </div>
                                    <InputPassword className="fs-11 fw-5 mb-3 mb-sm-4"/>
                                    <label className='fs-11 justify-content-sm-center'>
                                        <input type='checkbox'/>
                                        <div className='ms-2'>Я согласен на обработку персональных данных</div>
                                    </label>

                                    <button type='button' onClick={()=>setSucc(true)} className='btn-1 mx-sm-auto fs-13 mt-3'><span>Зарегестрироваться</span></button>

                                    <div className='mt-3 text-sm-center gray fw-5 fs-11'>У вас уже есть аккаунт? <Link to='/login' className='d-inline link td-under'>Войти</Link></div>
                                </form>
                            </Col>
                        </Row>
                    }
                </section>
            </Container>
        </main>
    );
}