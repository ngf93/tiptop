import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputPassword from '../components/utils/InputPassword';

export default function ResetPassword(props) {
    const [step, setStep] = useState('1');

    return (
        <main>
            <Container>
                <section id="enter-page">
                    <h1 className='inner text-center'>Восстановление пароля</h1>
                    
                    <Row className='justify-content-center'>
                        <Col  md={9} lg={7} xl={6}>
                            {
                                (step === '1') &&
                                <form>
                                    <h5 className='fw-5 text-center mb-4 mb-sm-5'>Код подтверждения будет отправлен Вам на указанный номер телефона</h5>
                                    <label htmlFor='phone' className='fs-13 fw-7 mb-2'>Номер телефона</label>
                                    <input type='tel' id="phone" placeholder='Телефон' className='fs-11 fw-5 mb-3 mb-sm-4'/>
                                    <Row className='justify-content-center'>
                                        <Col md={6}>
                                            <button type='button' onClick={()=>setStep('2')} className='btn-1 fs-13 w-100'><span>Получить код</span></button>
                                        </Col>
                                    </Row>
                                </form>
                            }
                            {
                                (step === '2') &&
                                <form>
                                    <h5 className='fw-5 text-center mb-4 mb-sm-5'>Код подтверждения был отправлен Вам на указанный номер телефона</h5>
                                    <label htmlFor='code' className='fs-13 fw-7 mb-2'>Код подтверждения</label>
                                    <input type='number' id="code" placeholder='Код подтверждения' className='fs-11 fw-5 mb-3 mb-sm-4'/>
                                    <Row className='gx-3 gx-lg-4'>
                                        <Col md={5}>
                                            <button type='button' onClick={()=>setStep('3')} className='btn-1 fs-13 w-100'><span>Отправить</span></button>
                                        </Col>
                                        <Col md={7}>
                                            <button type='button' className='btn-3 fs-13 w-100 mt-2 mt-sm-3 mt-md-0'>Получить код ещё раз</button>
                                        </Col>
                                    </Row>
                                </form>
                            }
                            {
                                (step === '3') &&
                                <form>
                                    <h5 className='fw-5 text-center mb-5'>Придумайте новый пароль</h5>
                                    <div className='fs-13 fw-7 mb-2'>Пароль</div>
                                    <InputPassword className="fs-11 fw-5 mb-3 mb-sm-4"/>

                                    <div className='d-flex align-items-center justify-content-between mb-2'>
                                        <div className='fs-13 fw-7'>Повторите пароль</ div>
                                        <div className='danger-color fs-09'>Пароли не совпадают</div>
                                    </div>
                                    <InputPassword className="fs-11 fw-5 mb-3 mb-sm-4"/>
                                    <Row className='justify-content-center'>
                                        <Col md={6}>
                                            <button type='button' onClick={()=>setStep('3')} className='btn-1 fs-13 w-100'><span>Сохранить</span></button>
                                        </Col>
                                    </Row>
                                </form>
                            }
                        </Col>
                    </Row>
                </section>
            </Container>
        </main>
    );
}