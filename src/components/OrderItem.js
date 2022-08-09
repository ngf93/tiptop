import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function OrderItem(props) {
    return (
        <div className='order-item'>
           <Link to="/product"><img src="imgs/img5.png" alt='Назавние товара'/></Link>
           <div className='info'>
            <div className='fs-09 fw-6 mb-2 mb-xl-3'><span className='gray'>Код:</span> 25678</div>
            <Row className="gx-3 gx-xxl-4">
                <Col md={4}>
                    <h5 className='mb-2 mb-xl-3 mb-xxl-4'><Link to="/product">Назавние товара</Link></h5>
                    <div className='gray mb-2 mb-xl-3 mb-xxl-4'>Производитель</div>
                    <div className='mb-2 mb-xl-3 mb-xxl-4'>Вес 500 г</div>
                    <div className='d-flex align-items-baseline'>
                        <span className="fs-14 fw-6">625</span>
                        <span className='fs-11 ms-1'>₽,</span>
                        <span className='ms-3'>4 шт.</span>
                    </div>
                </Col>
                <Col md={4} className='d-none d-md-block'>
                    <h5 className='mb-2 mb-xl-3 mb-xxl-4'>Доставка</h5>
                    <div className='gray mb-2 mb-xl-3 mb-xxl-4'>Курьер</div>
                    <div className='gray mb-2 mb-xl-3 mb-xxl-4'>Время доставки:</div>
                    <div className='fw-5'>5 часов, 46 минут</div>
                </Col>
                <Col md={4} className='d-none d-md-block'>
                    <h5 className='mb-2 mb-xl-3 mb-xxl-4'>Оплата</h5>
                    <div className='gray mb-2 mb-xl-3 mb-xxl-4'>Способ оплаты:</div>
                    <div className='fw-5'>Онлайн-оплата</div>
                </Col>
            </Row>
           </div>
        </div>
    );
}