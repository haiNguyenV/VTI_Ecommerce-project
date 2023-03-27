import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";

import CustomPrice from '../../../../common/components/CustomPrice/CustomPrice';
import EditProductForm from '../EditProductFrom/EditProductForm';


import './ProductItem.css'

const ProductItem = ({id, productName, price, image, brand, rated, delCallBack, editCallBack}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleEditProduct = (product) => {
        editCallBack(product);
    }

    const handleDelClick = () => {
        delCallBack(id)
    }

    return (
        <tr>
            <td>{productName}</td>
            <td>{CustomPrice({price})}.đ</td>
            <td>
                <img  src={image} alt='hình ảnh'/>
            </td>
            <td>{brand}</td>
            <td>{rated}</td>
            <td>
                <div  className='product__btn'>
                    <div>
                        <Button variant="primary"  className='edit-product__btn func-product__btn' onClick={handleShow}>Sửa</Button>
                        <EditProductForm 
                            editShow = {show}
                            handleEditClose = {handleClose}
                            id = {id}
                            editName = {productName}
                            editPrice = {price}
                            editImage = {image}
                            editBrand = {brand}
                            editRated = {rated}
                            editCallback = {handleEditProduct}
                        />
                    </div>
                    <Button onClick={handleDelClick} variant="danger">Xóa</Button>
                </div>
            </td>
        </tr>
    )
}

export default ProductItem;