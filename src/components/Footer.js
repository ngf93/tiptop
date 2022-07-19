import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Footer() {
    return (
        <footer>
            <Container>
                <Row xs={4}>
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
                <hr/>
            </Container>
        </footer>
    );
}