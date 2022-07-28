import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink, Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer>
            <Container className='d-none d-lg-block'>
                <Row xs={4}>
                    <Col>
                        <h4>О нас:</h4>
                        <ul className='list-unstyled'>
                            <li><Link to='/'>О компании</Link></li>
                            <li><Link to='/delivery'>Доставка</Link></li>
                            <li><Link to='/articles'>Статьи и советы</Link></li>
                            <li><Link to='/contacts'>Контакты</Link></li>
                        </ul>
                    </Col>
                    <Col>
                        <h4>О нас:</h4>
                        <ul className='list-unstyled'>
                            <li><a href='/'>Контакты</a></li>
                            <li><a href='/'>Контакты</a></li>
                            <li><a href='/'>Контакты</a></li>
                            <li><a href='/'>Контакты</a></li>
                        </ul>
                    </Col>
                    <Col>
                        <h4>О нас:</h4>
                        <ul className='list-unstyled'>
                            <li><a href='/'>Контакты</a></li>
                            <li><a href='/'>Контакты</a></li>
                            <li><a href='/'>Контакты</a></li>
                            <li><a href='/'>Контакты</a></li>
                        </ul>
                    </Col>
                    <Col>
                        <h4>О нас:</h4>
                        <ul className='list-unstyled'>
                            <li><a href='/'>Контакты</a></li>
                            <li><a href='/'>Контакты</a></li>
                            <li><a href='/'>Контакты</a></li>
                            <li><a href='/'>Контакты</a></li>
                        </ul>
                    </Col>
                </Row>
                <hr className='my-5'/>
                <div className='social'>
                    <a href="/"><img src="imgs/icons/social-icon.png"/></a>
                    <a href="/"><img src="imgs/icons/social-icon.png"/></a>
                    <a href="/"><img src="imgs/icons/social-icon.png"/></a>
                    <a href="/"><img src="imgs/icons/social-icon.png"/></a>
                    <a href="/"><img src="imgs/icons/social-icon.png"/></a>
                    <a href="/"><img src="imgs/icons/social-icon.png"/></a>
                </div>
                <div className='fs-11 mt-3'>Текст</div>
            </Container>
            <Container className='mobile'>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/" className='active'>
                                <svg className='fill-active stroke' width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 20.5816V9.34066C1.00015 9.04589 1.07052 8.75548 1.20517 8.49397C1.33983 8.23246 1.5348 8.00754 1.77364 7.83819L10.4782 1.66668C10.6312 1.5582 10.8135 1.5 11.0005 1.5C11.1874 1.5 11.3697 1.5582 11.5227 1.66668L20.2264 7.83819C20.4652 8.00754 20.6602 8.23246 20.7948 8.49397C20.9295 8.75548 20.9999 9.04589 21 9.34066V20.5816C21 20.8252 20.9042 21.0588 20.7337 21.231C20.5632 21.4032 20.332 21.5 20.0909 21.5H15.2427C15.0016 21.5 14.7704 21.4032 14.5999 21.231C14.4294 21.0588 14.3336 20.8252 14.3336 20.5816V15.3707C14.3336 15.1272 14.2379 14.8936 14.0674 14.7213C13.8969 14.5491 13.6657 14.4524 13.4245 14.4524H8.57545C8.33435 14.4524 8.10312 14.5491 7.93263 14.7213C7.76214 14.8936 7.66636 15.1272 7.66636 15.3707V20.5816C7.66636 20.8252 7.57058 21.0588 7.4001 21.231C7.22961 21.4032 6.99838 21.5 6.75727 21.5H1.90909C1.66799 21.5 1.43675 21.4032 1.26627 21.231C1.09578 21.0588 1 20.8252 1 20.5816Z" strokeWidth="2"/>
                                </svg>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/search">
                                <svg className='fill' width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.04232 3.33333C7.04232 4.0467 6.46402 4.625 5.75065 4.625H1.87565C1.16228 4.625 0.583984 4.0467 0.583984 3.33333V3.33333C0.583984 2.61997 1.16228 2.04167 1.87565 2.04167H5.75065C6.46402 2.04167 7.04232 2.61997 7.04232 3.33333V3.33333ZM7.04232 9.79167C7.04232 9.0783 6.46402 8.5 5.75065 8.5H1.87565C1.16228 8.5 0.583984 9.0783 0.583984 9.79167V9.79167C0.583984 10.505 1.16228 11.0833 1.87565 11.0833H5.75065C6.46402 11.0833 7.04232 10.505 7.04232 9.79167V9.79167ZM25.5073 16.6304C25.004 17.1337 24.1881 17.1337 23.6849 16.6304L19.649 12.5946C18.6157 13.2663 17.4015 13.6667 16.084 13.6667C12.519 13.6667 9.62565 10.7733 9.62565 7.20833C9.62565 3.64333 12.519 0.75 16.084 0.75C19.649 0.75 22.5423 3.64333 22.5423 7.20833C22.5423 8.52583 22.1419 9.74 21.4702 10.7604L25.5085 14.8092C26.0106 15.3126 26.0101 16.1277 25.5073 16.6304V16.6304ZM19.959 7.20833C19.959 5.07708 18.2152 3.33333 16.084 3.33333C13.9527 3.33333 12.209 5.07708 12.209 7.20833C12.209 9.33958 13.9527 11.0833 16.084 11.0833C18.2152 11.0833 19.959 9.33958 19.959 7.20833ZM0.583984 16.25C0.583984 16.9634 1.16228 17.5417 1.87565 17.5417H12.209C12.9224 17.5417 13.5007 16.9634 13.5007 16.25V16.25C13.5007 15.5366 12.9224 14.9583 12.209 14.9583H1.87565C1.16229 14.9583 0.583984 15.5366 0.583984 16.25V16.25Z"/>
                                </svg>
                            </NavLink>
                        </li>
                        <li>
                            <a href="/">
                                <svg className='stroke fill' width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1.75C1 1.55109 1.08077 1.36032 1.22455 1.21967C1.36833 1.07902 1.56334 1 1.76667 1H4.06669C4.23771 1.00005 4.4038 1.05603 4.53855 1.15904C4.67331 1.26205 4.76898 1.40618 4.81037 1.5685L5.43137 4H23.2335C23.35 4.00003 23.4649 4.02602 23.5696 4.07598C23.6742 4.12594 23.7659 4.19857 23.8376 4.28836C23.9092 4.37814 23.9591 4.48272 23.9833 4.59416C24.0075 4.7056 24.0054 4.82096 23.9772 4.9315L21.6772 13.9315C21.6358 14.0938 21.5401 14.238 21.4054 14.341C21.2706 14.444 21.1045 14.5 20.9335 14.5H7.13339C6.96237 14.5 6.79628 14.444 6.66153 14.341C6.52678 14.238 6.4311 14.0938 6.38972 13.9315L3.46869 2.5H1.76667C1.56334 2.5 1.36833 2.42098 1.22455 2.28033C1.08077 2.13968 1 1.94891 1 1.75ZM5.81471 5.5L7.7314 13H20.3355L22.2522 5.5H5.81471ZM8.66674 17.5C8.26007 17.5 7.87006 17.658 7.5825 17.9393C7.29494 18.2206 7.13339 18.6022 7.13339 19C7.13339 19.3978 7.29494 19.7794 7.5825 20.0607C7.87006 20.342 8.26007 20.5 8.66674 20.5C9.07341 20.5 9.46342 20.342 9.75098 20.0607C10.0385 19.7794 10.2001 19.3978 10.2001 19C10.2001 18.6022 10.0385 18.2206 9.75098 17.9393C9.46342 17.658 9.07341 17.5 8.66674 17.5ZM5.60004 19C5.60004 18.2044 5.92314 17.4413 6.49826 16.8787C7.07337 16.3161 7.8534 16 8.66674 16C9.48008 16 10.2601 16.3161 10.8352 16.8787C11.4103 17.4413 11.7334 18.2044 11.7334 19C11.7334 19.7956 11.4103 20.5587 10.8352 21.1213C10.2601 21.6839 9.48008 22 8.66674 22C7.8534 22 7.07337 21.6839 6.49826 21.1213C5.92314 20.5587 5.60004 19.7956 5.60004 19ZM19.4002 17.5C18.9935 17.5 18.6035 17.658 18.3159 17.9393C18.0284 18.2206 17.8668 18.6022 17.8668 19C17.8668 19.3978 18.0284 19.7794 18.3159 20.0607C18.6035 20.342 18.9935 20.5 19.4002 20.5C19.8068 20.5 20.1969 20.342 20.4844 20.0607C20.772 19.7794 20.9335 19.3978 20.9335 19C20.9335 18.6022 20.772 18.2206 20.4844 17.9393C20.1969 17.658 19.8068 17.5 19.4002 17.5ZM16.3335 19C16.3335 18.2044 16.6566 17.4413 17.2317 16.8787C17.8068 16.3161 18.5868 16 19.4002 16C20.2135 16 20.9935 16.3161 21.5686 16.8787C22.1438 17.4413 22.4669 18.2044 22.4669 19C22.4669 19.7956 22.1438 20.5587 21.5686 21.1213C20.9935 21.6839 20.2135 22 19.4002 22C18.5868 22 17.8068 21.6839 17.2317 21.1213C16.6566 20.5587 16.3335 19.7956 16.3335 19Z" strokeWidth="0.5"/>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <svg className='stroke fill' width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.7979 16.8883C18.3189 15.7538 17.6239 14.7232 16.7514 13.8541C15.8816 12.9825 14.8513 12.2875 13.7173 11.8076C13.7071 11.8025 13.6969 11.8 13.6868 11.7949C15.2686 10.6523 16.2969 8.79121 16.2969 6.69141C16.2969 3.21289 13.4786 0.394531 10.0001 0.394531C6.52155 0.394531 3.70319 3.21289 3.70319 6.69141C3.70319 8.79121 4.73151 10.6523 6.31334 11.7975C6.30319 11.8025 6.29303 11.8051 6.28288 11.8102C5.14538 12.29 4.12467 12.9781 3.2487 13.8566C2.37706 14.7264 1.68211 15.7568 1.20221 16.8908C0.730764 18.001 0.476502 19.1913 0.453188 20.3973C0.452511 20.4244 0.457264 20.4513 0.467168 20.4766C0.477072 20.5018 0.491927 20.5248 0.510857 20.5442C0.529787 20.5636 0.552408 20.579 0.57739 20.5895C0.602371 20.6001 0.629206 20.6055 0.656313 20.6055C0.683421 20.6055 2.17975 20.6055 2.17975 20.6055C2.29147 20.6055 2.38034 20.5166 2.38288 20.4074C2.43366 18.4473 3.22077 16.6115 4.61217 15.2201C6.05182 13.7805 7.96374 12.9883 10.0001 12.9883C12.0364 12.9883 13.9483 13.7805 15.388 15.2201C16.7794 16.6115 17.5665 18.4473 17.6173 20.4074C17.6198 20.5191 17.7087 20.6055 17.8204 20.6055H19.3438C19.3709 20.6055 19.3978 20.6001 19.4227 20.5895C19.4477 20.579 19.4703 20.5636 19.4893 20.5442C19.5082 20.5248 19.5231 20.5018 19.533 20.4766C19.5429 20.4513 19.5476 20.4244 19.5469 20.3973C19.5215 19.1836 19.2702 18.0029 18.7979 16.8883ZM10.0001 11.0586C8.83463 11.0586 7.73776 10.6041 6.91256 9.77891C6.08737 8.95371 5.63288 7.85684 5.63288 6.69141C5.63288 5.52598 6.08737 4.4291 6.91256 3.60391C7.73776 2.77871 8.83463 2.32422 10.0001 2.32422C11.1655 2.32422 12.2624 2.77871 13.0876 3.60391C13.9128 4.4291 14.3673 5.52598 14.3673 6.69141C14.3673 7.85684 13.9128 8.95371 13.0876 9.77891C12.2624 10.6041 11.1655 11.0586 10.0001 11.0586Z" strokeWidth="0.5"/>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </nav>
            </Container>
        </footer>
    );
}