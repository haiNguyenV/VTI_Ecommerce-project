import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

const AddProductForm = ({handleAddNewProduct}) => {

    //product attributes
    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState('');
    const [brand, setBrand] = useState('');
    const [rated, setRated] = useState(0);


    const newProduct = {
        productName,
        price,
        image,
        brand,
        rated
    }

    //pass callback 'add new product' function to parent component
    const addNewProduct = () => {
        handleAddNewProduct(newProduct);
    }

    return (
        <>
            <Modal.Header closeButton>
                <Modal.Title>Thêm sản phẩm</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Tên sản phẩm</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Tên sản phẩm..."
                            autoFocus
                            onChange={e => {setProductName(e.target.value)}}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Thương hiệu</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Thương hiệu..."
                            autoFocus
                            onChange={e => {setBrand(e.target.value)}}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Giá sản phẩm</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Giá sản phẩm..."
                            autoFocus
                            onChange={e => {setPrice(e.target.value)}}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Số vote</Form.Label>
                        <Form.Control
                            type="number"
                            min="0"
                            max="5"
                            autoFocus
                            onChange={e => {setRated(e.target.value)}}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Link hình ảnh</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Link hình ảnh..."
                            autoFocus
                            onChange={e => {setImage(e.target.value)}}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={addNewProduct}>
                    Xác nhận
                </Button>
            </Modal.Footer>
        </>
    )
}

export default AddProductForm;