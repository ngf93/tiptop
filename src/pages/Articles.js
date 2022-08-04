import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { VscArrowLeft } from "react-icons/vsc";
import ArticlePreview from '../components/ArticlePreview';
import Pagination from '../components/Pagination';

export default function Articles(props) {
    return (
        <main>
            <Container className='mb-6'>
                <section>
                    <div className='d-flex align-items-center d-md-block mb-3 mb-sm-4 mb-md-0'>
                        <Link to="/" className="btn-4 fs-11 px-3 mb-md-5">
                            <VscArrowLeft className='fs-12'/>
                            <span className='ms-2 d-none d-md-inline'>Назад на главную</span>
                        </Link>
                        <h1 className='inner mb-0 mb-md-5 ms-2 ms-sm-4 ms-md-0'>Статьи и советы</h1>
                    </div>

                    <Row xs={1} sm={2} lg={3} className='g-4'>
                        <Col>
                            <ArticlePreview title={'Плитка на кухню. Основные правила при выборе.'} subTitle={'Какую плитку выбрать на кухню?'} imgURL={"imgs/img3.png"}/>
                        </Col>
                        <Col>
                            <ArticlePreview title={'Плитка на кухню. Основные правила при выборе.'} subTitle={'Какую плитку выбрать на кухню?'} imgURL={"imgs/img3.png"}/>
                        </Col>
                        <Col>
                            <ArticlePreview title={'Плитка на кухню. Основные правила при выборе.'} subTitle={'Какую плитку выбрать на кухню?'} imgURL={"imgs/img3.png"}/>
                        </Col>
                        <Col>
                            <ArticlePreview title={'Плитка на кухню. Основные правила при выборе.'} subTitle={'Какую плитку выбрать на кухню?'} imgURL={"imgs/img3.png"}/>
                        </Col>
                        <Col>
                            <ArticlePreview title={'Плитка на кухню. Основные правила при выборе.'} subTitle={'Какую плитку выбрать на кухню?'} imgURL={"imgs/img3.png"}/>
                        </Col>
                        <Col>
                            <ArticlePreview title={'Плитка на кухню. Основные правила при выборе.'} subTitle={'Какую плитку выбрать на кухню?'} imgURL={"imgs/img3.png"}/>
                        </Col>
                        <Col>
                            <ArticlePreview title={'Плитка на кухню. Основные правила при выборе.'} subTitle={'Какую плитку выбрать на кухню?'} imgURL={"imgs/img3.png"}/>
                        </Col>
                        <Col>
                            <ArticlePreview title={'Плитка на кухню. Основные правила при выборе.'} subTitle={'Какую плитку выбрать на кухню?'} imgURL={"imgs/img3.png"}/>
                        </Col>
                        <Col>
                            <ArticlePreview title={'Плитка на кухню. Основные правила при выборе.'} subTitle={'Какую плитку выбрать на кухню?'} imgURL={"imgs/img3.png"}/>
                        </Col>
                        <Col>
                            <ArticlePreview title={'Плитка на кухню. Основные правила при выборе.'} subTitle={'Какую плитку выбрать на кухню?'} imgURL={"imgs/img3.png"}/>
                        </Col>
                        <Col>
                            <ArticlePreview title={'Плитка на кухню. Основные правила при выборе.'} subTitle={'Какую плитку выбрать на кухню?'} imgURL={"imgs/img3.png"}/>
                        </Col>
                        <Col>
                            <ArticlePreview title={'Плитка на кухню. Основные правила при выборе.'} subTitle={'Какую плитку выбрать на кухню?'} imgURL={"imgs/img3.png"}/>
                        </Col>
                    </Row>

                    <Pagination />
                </section>
            </Container>
        </main>
    );
}