import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function EditProductForm({id, editName, editPrice, editImage, editBrand, editRated, editCallback, editShow, handleEditClose}) {

  const [productName, setProductName] = useState(editName);
  const [price, setPrice] = useState(editPrice);
  const [image, setImage] = useState(editImage);
  const [brand, setBrand] = useState(editBrand);
  const [rated, setRated] = useState(editRated);

  const editedProduct = {
    id,
    productName,
    price,
    image,
    brand,
    rated
  }

  const handleEditClick = () => {
    editCallback(editedProduct);
  }

  return (
    <>
      <Modal show={editShow} onHide={handleEditClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sửa thông tin sản phẩm</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Tên sản phẩm</Form.Label>
              <Form.Control
                type="text"
                placeholder="tên sản phẩm..."
                autoFocus
                value={productName}
                onChange={e => setProductName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Thương hiệu</Form.Label>
              <Form.Control
                type="text"
                placeholder="Thương hiệu..."
                value={brand}
                onChange={e => setBrand(e.target.value)}
              />
            </Form.Group>            
            <Form.Group className="mb-3">
              <Form.Label>Giá sản phẩm</Form.Label>
              <Form.Control
                type="text"
                placeholder="Giá sản phẩm"
                value={price}
                onChange={e => setPrice(e.target.value)}
              />
            </Form.Group>            
            <Form.Group className="mb-3">
              <Form.Label>Sao đánh giá</Form.Label>
              <Form.Control
                type="number"
                min='0'
                max='5'
                value={rated}
                onChange={e => setRated(e.target.value)}
              />
            </Form.Group>            
            <Form.Group className="mb-3">
              <Form.Label>Link hình ảnh</Form.Label>
              <Form.Control
                type="text"
                placeholder="Link hình ảnh..."
                value={image}
                onChange={e => setImage(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleEditClose}>
            Hủy
          </Button>
          <Button variant="primary" onClick={handleEditClick}>
            Lưu thay đổi
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditProductForm;
