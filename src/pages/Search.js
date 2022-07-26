import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CategoryCard from '../components/CategoryCard';
import { FiSearch } from "react-icons/fi";

export default function Search() {
    return (
        <main>
            <Container className='mb-6'>
                <h1 className='inner mb-4 mb-md-5'>Поиск</h1>

                <Row className='mb-4 mb-md-5'>
                    <Col md={8} lg={6}>
                        <form className='form-search'>
                            <input type='search' placeholder='Поиск' />
                            <button type='submit'><FiSearch/></button>
                        </form>
                    </Col>
                </Row>
                
                <Row xs={2} md={3} lg={4} className="g-2 g-sm-3 g-xl-4">
                    <Col>
                        <CategoryCard />
                    </Col>
                    <Col>
                        <CategoryCard />
                    </Col>
                    <Col>
                        <CategoryCard />
                    </Col>
                    <Col>
                        <CategoryCard />
                    </Col>
                    <Col>
                        <CategoryCard />
                    </Col>
                    <Col>
                        <CategoryCard />
                    </Col>
                    <Col>
                        <CategoryCard />
                    </Col>
                    <Col>
                        <CategoryCard />
                    </Col>
                    <Col>
                        <CategoryCard />
                    </Col>
                    <Col>
                        <CategoryCard />
                    </Col>
                    <Col>
                        <CategoryCard />
                    </Col>
                    <Col>
                        <CategoryCard />
                    </Col>
                    <Col>
                        <CategoryCard />
                    </Col>
                    <Col>
                        <CategoryCard />
                    </Col>
                    <Col>
                        <CategoryCard />
                    </Col>
                    <Col>
                        <CategoryCard />
                    </Col>
                    <Col>
                        <CategoryCard />
                    </Col>
                    <Col>
                        <CategoryCard />
                    </Col>
                </Row>
            </Container>
        </main>
    );
}