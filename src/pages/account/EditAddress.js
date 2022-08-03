import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { VscArrowLeft } from "react-icons/vsc";

export default function EditAddress(props) {
    return (
        <>
            <div className='d-flex align-items-center mb-3 mb-sm-4'>
                <Link to="/personal-account/addresses" className="btn btn-4 fs-11 px-2 px-sm-3">
                    <VscArrowLeft className='fs-12'/>
                </Link>
                <h1 className='inner mb-0 ms-2 ms-sm-4'>Редактирование адреса</h1>
            </div>
            <form>
                <div className='mb-3 mb-sm-4'>
                    <label htmlFor='region' className='fs-13 fw-7 mb-2'>Область</label>
                    <input type='text' id="region" placeholder='Область' defaultValue={'Республика Татарстан'} className='fs-11 fw-5'/>
                </div>
                <div className='mb-3 mb-sm-4'>
                    <label htmlFor='town' className='fs-13 fw-7 mb-2'>Город</label>
                    <input type='text' id="town" placeholder='Город' defaultValue={'Казань'} className='fs-11 fw-5'/>
                </div>
                <div className='mb-3 mb-sm-4'>
                    <label htmlFor='street' className='fs-13 fw-7 mb-2'>Улица</label>
                    <input type='text' id="street" placeholder='Улица' defaultValue={'Фучика'} className='fs-11 fw-5'/>
                </div>
                <Row md={3} className="gx-2 gx-sm-3 gx-md-4">
                    <Col>
                        <div className='mb-3 mb-sm-4'>
                            <label htmlFor='house' className='fs-13 fw-7 mb-2'>Дом</label>
                            <input type='number' id="house" placeholder='Дом' defaultValue={'78'} className='fs-11 fw-5'/>
                        </div>
                    </Col>
                    <Col>
                        <div className='mb-3 mb-sm-4'>
                            <label htmlFor='porch' className='fs-13 fw-7 mb-2'>Подъезд</label>
                            <input type='number' id="porch" placeholder='Подъезд' defaultValue={'0'} className='fs-11 fw-5'/>
                        </div>
                    </Col>
                    <Col>
                        <div className='mb-3 mb-sm-4'>
                            <label htmlFor='apartment' className='fs-13 fw-7 mb-2'>Квартира</label>
                            <input type='number' id="apartment" placeholder='Квартира' defaultValue={'1'} className='fs-11 fw-5'/>
                        </div>
                    </Col>
                </Row>
                <div className='mb-3 mb-sm-4'>
                    <div className='fs-13 fw-7 mb-2'>Комментарий</div>
                    <textarea rows={5} placeholder='Комментарий' defaultValue={'Офис'} className='fs-11 fw-5'></textarea>
                </div>
                <div className='d-flex'>
                    <button type='button' className='btn btn-1 fs-11'>
                        <span>Сохранить</span>
                    </button>
                    <button type='button' className='btn btn-3 fs-11 ms-4'>
                        <span>Удалить адрес</span>
                    </button>
                </div>
            </form>
        </>
    );
}