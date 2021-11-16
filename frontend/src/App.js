import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import SearchImagesComponent from './components/SearchImagesComponent';
import ImagesResizedComponent from './components/ImagesResizedComponent';

const App = () => (
    <>
        <HeaderComponent/>
        <Container fluid="md" className="page-container">
            <Row>
                <Col>
                    <SearchImagesComponent/>
                </Col>
                <Col>
                    <ImagesResizedComponent/>
                </Col>
            </Row>
        </Container>
        <FooterComponent/>
    </>
);

export default App;
