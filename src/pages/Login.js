import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputPassword from '../components/utils/InputPassword';
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <main>
            <Container>
                <section id="enter-page">
                    <h1 className='inner text-center'>Вход в личный кабинет</h1>
                    <Row className='justify-content-center'>
                        <Col md={8} lg={6}>
                            <form>
                                <label htmlFor='email' className='fs-13 fw-7 mb-2'>Электронная почта</label>
                                <input type='email' id="email" placeholder='Электронная почта' className='fs-11 fw-5 mb-3 mb-sm-4'/>

                                <div className='fs-13 fw-7 mb-2'>Пароль</ div>
                                <InputPassword className="fs-11 fw-5 mb-1"/>
                                <div className='danger-color fs-09 fw-7 mb-3 mb-sm-4'>Неправильный e-mail или пароль</div>

                                <label className='fs-11 justify-content-sm-center'>
                                    <input type='checkbox'/>
                                    <div className='ms-2'>Я согласен на обработку персональных данных</div>
                                </label>

                                <div className='d-flex justify-content-sm-center align-items-center mt-3'>
                                    <Link to='/personal-account' className='btn-1 fs-13'><span>Войти</span></Link>
                                    <Link to='/reset-password' className='blue ms-4 fw-5 fs-11'>Забыли пароль?</Link>
                                </div>

                                <div className='mt-3 text-sm-center gray fw-5 fs-11'>У вас ещё нет аккаунта? <Link to='/registration' className='d-inline link td-under'>Зарегистрироваться</Link></div>
                            </form>
                        </Col>
                    </Row>
                </section>
            </Container>
        </main>
    );
}