import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { VscArrowLeft } from "react-icons/vsc";
import { GrDeliver } from "react-icons/gr";

export default function Delivery(props) {
    const [mobile, setMobile] = useState(false);
    const [map, setMap] = useState(false);

    useEffect(() => {
        function updateView() {
            if (window.matchMedia("(max-width: 991px)").matches) {
                setMobile(true);
            } else {
                setMobile(false);
            }
        }

        window.addEventListener('resize', updateView);
        updateView();
        return () => window.removeEventListener('resize', updateView);
    }, []);

    return (
        <main>
            <Container className='mb-4 mb-sm-5'>
                <div className='d-flex align-items-center d-md-block mb-3 mb-sm-4 mb-md-0'>
                    <Link to="/" className="btn btn-4 fs-11 px-3 mb-md-5">
                        <VscArrowLeft className='fs-12'/>
                        <span className='ms-2 d-none d-md-inline'>Назад на главную</span>
                    </Link>
                    <h1 className='inner mb-0 mb-md-5 ms-2 ms-sm-4 ms-md-0'>Доставка</h1>
                </div>

                <Row>
                    <Col xl={9}>
                        <p className='fs-15'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, orci sed proin vel id dui. Morbi nunc, egestas egestas aliquam suspendisse pellentesque ac, interdum urna. Vulputate sapien ac sed purus urna tellus faucibus aliquam.</p>
                    </Col>
                </Row>
            </Container>
            
            <section id="delivery-map" className='mb-4 mb-sm-5'>
                <Container className='btns'>
                    <button type='button' class={(map === false) && 'active'} onClick={()=>setMap(false)}>Параметры доставки</button>
                    <button type='button' class={(map === true) && 'active'} onClick={()=>setMap(true)}>Зоны доставки</button>
                </Container>
                {
                    (mobile === false || map === true) &&
                    <img src="imgs/map.png"/>
                }
                {
                    (mobile === false || map === false) &&
                    <Container className='params'>
                        <Row>
                            <Col xs={12} lg={7}>
                                <form>
                                    <h5 className='fs-15 mb-2 mb-lg-3'>Куда нужна доставка?</h5>
                                    <input className='fs-11 mb-4' placeholder='Адрес доставки' />
                                    <h5 className='fs-15 mb-2 mb-lg-3'>Когда нужно доставить?</h5>
                                    <select defaultValue={0} className="input fs-11 mb-4">
                                        <option value={0} disabled>Время доставки</option>
                                        <option value={1}>Сегодня</option>
                                        <option value={1}>Завтра</option>
                                        <option value={1}>Послезавтра</option>
                                    </select>
                                    <h5 className='fs-15 mb-2 mb-lg-3'>Сколько нужно доставить?</h5>
                                    <Row xs={2} sm={3} className="g-2 g-sm-4">
                                        <Col>
                                            <label>
                                                <input type="checkbox" hidden/>
                                                <div className='box'>
                                                    <GrDeliver className='fs-40'/>
                                                    <span className='fs-11 fw-7 mt-2'>До 5 кг</span>
                                                    <div className='btn btn-1 fw-4 px-2 py-1 mt-2'>от 800 ₽</div>
                                                </div>
                                            </label>
                                        </Col>
                                        <Col>
                                            <label>
                                                <input type="checkbox" hidden/>
                                                <div className='box'>
                                                    <GrDeliver className='fs-40'/>
                                                    <span className='fs-11 fw-7 mt-2'>До 500 кг</span>
                                                    <div className='btn btn-1 fw-4 px-2 py-1 mt-2'>от 1300 ₽</div>
                                                </div>
                                            </label>
                                        </Col>
                                        <Col>
                                            <label>
                                                <input type="checkbox" hidden/>
                                                <div className='box'>
                                                    <GrDeliver className='fs-40'/>
                                                    <span className='fs-11 fw-7 mt-2'>До 1000 кг</span>
                                                    <div className='btn btn-1 fw-4 px-2 py-1 mt-2'>от 1800 ₽</div>
                                                </div>
                                            </label>
                                        </Col>
                                        <Col>
                                            <label>
                                                <input type="checkbox" hidden/>
                                                <div className='box'>
                                                    <GrDeliver className='fs-40'/>
                                                    <span className='fs-11 fw-7 mt-2'>До 5 кг</span>
                                                    <div className='btn btn-1 fw-4 px-2 py-1 mt-2'>от 800 ₽</div>
                                                </div>
                                            </label>
                                        </Col>
                                        <Col>
                                            <label>
                                                <input type="checkbox" hidden/>
                                                <div className='box'>
                                                    <GrDeliver className='fs-40'/>
                                                    <span className='fs-11 fw-7 mt-2'>До 500 кг</span>
                                                    <div className='btn btn-1 fw-4 px-2 py-1 mt-2'>от 1300 ₽</div>
                                                </div>
                                            </label>
                                        </Col>
                                        <Col>
                                            <label>
                                                <input type="checkbox" hidden/>
                                                <div className='box'>
                                                    <GrDeliver className='fs-40'/>
                                                    <span className='fs-11 fw-7 mt-2'>До 1000 кг</span>
                                                    <div className='btn btn-1 fw-4 px-2 py-1 mt-2'>от 1800 ₽</div>
                                                </div>
                                            </label>
                                        </Col>
                                        <Col>
                                            <label>
                                                <input type="checkbox" hidden/>
                                                <div className='box'>
                                                    <GrDeliver className='fs-40'/>
                                                    <span className='fs-11 fw-7 mt-2'>До 5 кг</span>
                                                    <div className='btn btn-1 fw-4 px-2 py-1 mt-2'>от 800 ₽</div>
                                                </div>
                                            </label>
                                        </Col>
                                        <Col>
                                            <label>
                                                <input type="checkbox" hidden/>
                                                <div className='box'>
                                                    <GrDeliver className='fs-40'/>
                                                    <span className='fs-11 fw-7 mt-2'>До 500 кг</span>
                                                    <div className='btn btn-1 fw-4 px-2 py-1 mt-2'>от 1300 ₽</div>
                                                </div>
                                            </label>
                                        </Col>
                                        <Col>
                                            <label>
                                                <input type="checkbox" hidden/>
                                                <div className='box'>
                                                    <GrDeliver className='fs-40'/>
                                                    <span className='fs-11 fw-7 mt-2'>До 1000 кг</span>
                                                    <div className='btn btn-1 fw-4 px-2 py-1 mt-2'>от 1800 ₽</div>
                                                </div>
                                            </label>
                                        </Col>
                                    </Row>
                                </form>
                            </Col>
                        </Row>
                    </Container>
                }
            </section>

            <Container className='mb-4 mb-sm-5'>
                <Row>
                    <Col xl={9}>
                        <ul className='dash-list fs-15'>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, orci sed proin vel id dui. Morbi nunc, egestas egestas aliquam suspendisse pellentesque ac, interdum urna. Vulputate sapien ac sed purus urna tellus faucibus aliquam.</li>
                            <li>Bibendum libero non consectetur egestas ultricies diam ut. Et sed curabitur sed luctus eget vel ut. Risus, nulla at ornare urna. Interdum ornare tellus imperdiet aliquet vulputate orci sagittis nibh. Nibh fames velit velit est etiam orci, dolor.</li>
                            <li>Curabitur facilisis et interdum pretium vestibulum id cras elementum sollicitudin. Eget fringilla quam quisque ut sit. Semper eget bibendum sed sit vel porttitor nunc auctor consectetur. Est feugiat phasellus diam amet, enim aliquet. A elit viverra urna aliquam, ipsum id ac pretium. Turpis placerat elementum auctor mauris urna pulvinar turpis.</li>
                            <li>Consectetur ullamcorper amet malesuada sem sagittis, sapien. Aliquam, eleifend eget semper cursus. Vitae dignissim egestas leo dui viverra. Nunc, velit semper eget libero adipiscing arcu. Dis purus netus rhoncus, nunc at eget mollis. Nisl, nibh commodo consequat amet, vitae.</li>
                            <li>Tellus congue vitae justo luctus donec mattis laoreet morbi. Massa pellentesque mattis amet, nec</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </main>
    );
}