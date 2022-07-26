import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { VscArrowLeft } from "react-icons/vsc";

export default function UserProfile() {
    return (
        <Row>
            <Col xl={7}>
                <div className='box-2 p-lg-4'>
                    <div className='d-flex align-items-center d-lg-none mb-3 mb-sm-4'>
                        <Link to="/personal-account" className="btn-4 fs-11 px-2 px-sm-3">
                            <VscArrowLeft className='fs-12'/>
                        </Link>
                        <h1 className='inner mb-0 ms-2 ms-sm-4'>Личные данные</h1>
                    </div>
                    
                    <form>
                        <div className='mb-3 mb-sm-4'>
                            <label htmlFor='user-name' className='fs-13 fw-7 mb-2'>ФИО</label>
                            <input type='text' id="user-name" placeholder='ФИО' className='fs-11 fw-5'/>
                        </div>
                        <div className='mb-3 mb-sm-4'>
                            <label htmlFor='phone' className='fs-13 fw-7 mb-2'>Номер телефона</label>
                            <input type='tel' id="phone" placeholder='Телефон' className='fs-11 fw-5'/>
                            <div className='fs-09 fw-5 mt-2'>Код подтверждения будет выслан Вам на новый номер телефона</div>
                            <button type='button' className='btn-1 fs-09 mt-2'><span>Получить код</span></button>
                        </div>
                        <div className='mb-3 mb-sm-4'>
                            <label htmlFor='email' className='fs-13 fw-7 mb-2'>Электронная почта</label>
                            <input type='email' id="email" placeholder='Электронная почта' className='fs-11 fw-5'/>
                        </div>
                        <div className='mb-3 mb-sm-4'>
                            <label htmlFor='birthday' className='fs-13 fw-7 mb-2'>Дата рождения</label>
                            <input type='date' id="birthday" className='fs-11 fw-5'/>
                        </div>
                        <div className='mb-3 mb-sm-4'>
                            <div className='fs-13 fw-7 mb-2'>Пол</div>
                            <div className='d-flex fs-13'>
                                <label>
                                    <input type='radio' name='gender'/>
                                    <span className='ms-2'>Мужской</span>
                                </label>
                                <label className='ms-5'>
                                    <input type='radio' name='gender'/>
                                    <span className='ms-2'>Женский</span>
                                </label>
                            </div>
                        </div>
                        <button type='button' className='btn btn-1 fs-11'>
                            <span>Сохранить</span>
                        </button>
                    </form>
                </div>
            </Col>
            <Col className='d-none d-xl-block' xl={5}>
                <aside className='mb-4'></aside>
                <aside className='mb-4'></aside>
            </Col>
        </Row>
    )
}