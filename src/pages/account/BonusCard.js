import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { VscArrowLeft } from "react-icons/vsc";
import Pagination from '../../components/Pagination';
import BonusOperation from '../../components/BonusOperation';

export default function BonusCard(props) {
    return (
        <div className='bonus-page'>
            <div className='d-flex align-items-center d-lg-none mb-3 mb-sm-4'>
                <Link to="/personal-account" className="btn-4 fs-11 px-2 px-sm-3">
                    <VscArrowLeft className='fs-12'/>
                </Link>
                <h1 className='inner mb-0 ms-2 ms-sm-4'>Бонусная карта</h1>
            </div>
            <Row xs={1} sm={2} className="gx-3 gx-md-4 mb-3 mb-md-4">
                <Col>
                    <div className='bonus-card mb-3'>
                        <div className='fw-9 fs-17 mb-3'>0 Б</div>
                        <p className='fs-12'>На вашем счету пока нет бонусных рублей</p>
                        <img src="imgs/logo-top.svg" className='logo'/>
                    </div>
                </Col>
                <Col>
                    <div className='box-3 d-flex justify-content-between align-items-center mb-3 mb-md-4'>
                        <div>
                            <div className='gray fs-11 mb-3'>Последняя операция</div>
                            <div className='fs-13 fw-7'>Нет операций</div>
                        </div>
                        <div className='fs-25 fw-7'><span>-500</span>&nbsp;<span className='main-color'>Б</span></div>
                    </div>
                    <div className='box-3'>
                        <p className='fs-13'>Вы получаете бонусные рубли за покупки и можете их использовать при оплате </p>
                        <Link to="/" className='btn-1 fw-4 fs-11 py-2 px-3 mt-2 '><span>Подробнее</span></Link>
                    </div>
                </Col>
            </Row>
            <div className='bonus-tabs box-3 mb-3 mb-md-4'>
                <button type='button' className='active'>Все <span className='d-none d-sm-inline'>события</span></button>
                <button type='button'>Начисления</button>
                <button type='button'>Списания</button>
            </div>
            <div className='box-3 py-5'>
                <h5 className='fs-20 text-center mb-4'>Нет операций</h5>
                <p className='fs-13 text-center mb-4'>Вы получаете бонусные рубли <br/>за покупки и можете их <br/>использовать при оплате</p>
                <Link to='/catalog' className='btn-1 mx-auto fs-13'><span>Перейти в каталог</span></Link>
            </div>
            <div className='box-3 pb-sm-5'>
                <BonusOperation id={'112030123012'} orderDate={'20.05.2022'} delivery={true} deliveryDate={'25.05.2022'} increase={true} bonus={'1259'}/>
                <BonusOperation id={'112030123012'} orderDate={'20.05.2022'} delivery={true} deliveryDate={'25.05.2022'} increase={false} bonus={'1259'}/>
                <BonusOperation id={'112030123012'} orderDate={'20.05.2022'} delivery={false} deliveryDate={'25.05.2022'} increase={true} bonus={'1259'}/>
                <BonusOperation id={'112030123012'} orderDate={'20.05.2022'} delivery={true} deliveryDate={'25.05.2022'} increase={false} bonus={'1259'}/>
                <Pagination />
            </div>
        </div>
    );
}