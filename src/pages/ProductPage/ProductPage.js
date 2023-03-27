import React from 'react'

import Header from '../../common/components/Header/Header';
import Banner from '../../common/components/Banner/Banner';
import ProductList from './components/ProductList/ProductList';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class ProductPage extends React.Component {
    render() {

        return (
            <Container>
                <Row>
                    <Header />
                </Row>
                <Row>
                    <Banner />  
                </Row>
                <ProductList />
            </Container>
        )
    }
}

export default ProductPage;