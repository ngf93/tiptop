import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CategoryCard from '../components/CategoryCard';

export default function Catalog() {
    return (
        <main>
            <Container className='mb-6'>
                <h1 className='inner mb-4 mb-md-5'>Каталог</h1>
                
                <Row xs={2} md={3} lg={4} className="g-2 g-sm-3 g-xl-4">
                    <Col>
                        <CategoryCard link={'category'}/>
                    </Col>
                    <Col>
                        <CategoryCard link={'category'}/>
                    </Col>
                    <Col>
                        <CategoryCard link={'category'}/>
                    </Col>
                    <Col>
                        <CategoryCard link={'category'}/>
                    </Col>
                    <Col>
                        <CategoryCard link={'category'}/>
                    </Col>
                    <Col>
                        <CategoryCard link={'category'}/>
                    </Col>
                    <Col>
                        <CategoryCard link={'category'}/>
                    </Col>
                    <Col>
                        <CategoryCard link={'category'}/>
                    </Col>
                    <Col>
                        <CategoryCard link={'category'}/>
                    </Col>
                    <Col>
                        <CategoryCard link={'category'}/>
                    </Col>
                    <Col>
                        <CategoryCard link={'category'}/>
                    </Col>
                    <Col>
                        <CategoryCard link={'category'}/>
                    </Col>
                    <Col>
                        <CategoryCard link={'category'}/>
                    </Col>
                    <Col>
                        <CategoryCard link={'category'}/>
                    </Col>
                    <Col>
                        <CategoryCard link={'category'}/>
                    </Col>
                    <Col>
                        <CategoryCard link={'category'}/>
                    </Col>
                    <Col>
                        <CategoryCard link={'category'}/>
                    </Col>
                    <Col>
                        <CategoryCard link={'category'}/>
                    </Col>
                </Row>
            </Container>
        </main>
    );
}