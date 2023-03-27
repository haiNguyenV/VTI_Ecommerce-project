import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import SideBar from './components/SideBar/SideBar';
import ProductList from './components/ProductList/ProductList';
import Header from './components/Header/Header';

import './AdminPage.css'

const AdminPage = () => {
    return(
        <Container fluid>
            <Row>
                <Col xl={2} lg={2} md={2} sm={12} xs={12} className='sideBar-box'>
                    <SideBar />
                </Col>
                <Col xl={10} lg={10} md={10} sm={12} xs={12} className='content'>
                    <Header />
                    <ProductList/>
                </Col>
            </Row>
        </Container>
    )
}

export default AdminPage;
