import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CategoryCard from '../components/CategoryCard';

export default function Catalog() {
    return (
        <main>
            <Container className='mb-6'>
                <h2 className='mb-4 mb-md-5'>Каталог</h2>
                
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