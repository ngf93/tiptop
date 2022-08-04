import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function BonusOperation(props) {
    return (
        <Row className='bonus-operation gx-0'>
            <Col xs={4}>
                <div className='d-sm-flex align-items-center'>
                    <div className='gray'>Заказ:</div>
                    <div className='fw-9 fs-11 ms-sm-2 mt-2 mt-sm-0'>{props.id}</div>
                </div>
                <div className='d-none d-sm-block fw-5 fs-11 mt-2'>{props.orderDate}</div>
            </Col>
            <Col xs={4} sm={3}>
                {
                    (props.delivery)
                    ? <>
                        <div className='gray'>Дата доставки</div>
                        <div className='fs-11 fw-5 mt-2'>{props.deliveryDate}</div>
                    </>
                    : <div className='fs-11 fw-5'>Самовывоз</div>
                }
            </Col>
            <Col xs={4} sm={5}>
                <div className='text-end d-sm-flex justify-content-between align-items-center h-100'>
                    {
                        (props.increase)
                        ? <div className='fs-11 fw-5 gray'>Начислено</div>
                        : <div className='fs-11 fw-5 gray'>Списано</div>
                    }
                    <div className='mt-1 mt-sm-0 fs-16 fw-7 d-flex align-items-center justify-content-end'>
                        <span className={(props.increase)?'success-color':'danger-color'}>{(props.increase)?'+':'-'} {props.bonus}</span>
                        <span className='main-color ms-2'>Б</span>
                    </div>
                </div>
            </Col>
        </Row>
    );
}