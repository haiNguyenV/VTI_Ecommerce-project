import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from "react";

import './ProductList.css';
import AddProductForm  from '../AddProductForm/AddProductForm'
import ProductItem from "../ProductItem/ProductItem";
import productAdminService from '../../../../common/api/productAdminServices'
import Paging from '../../../../common/components/Pagination/Pagination'


const ProductList = () => {
    
    //danh sách sản phẩm
    const [productList, setProductList] = useState([]);
    //total page
    const [totalPage, setTotalPage] = useState(0);
    //page
    const [page, setPage] = useState(0);
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    
    //call API
    useEffect(() => {
        fetchApi();
    }, [page]);


    //handle add new product
    const handleAddNewProduct = (newProduct) => {
        productAdminService.addProduct(newProduct)
        .then(response => {
            alert('thêm mới sản phẩm thành công!')
            handleClose();
            fetchApi();
        })
        .catch(err => {
            console.log('co loi khi them moi san pham')
        })
    }

    //handle when click on edit button
    const handleEditClick = (product) => {
        console.log(product)
        productAdminService.editProduct(product.id, product)
        .then(response => {
            alert('Sửa thông tin sản phẩm thành công!');
            fetchApi();
        })
        .catch(err => {
            console.log(err.message);
            fetchApi();
        })
    }

    const handeleDelClick = (id) => {
        let confDel = "Bạn chắc chắn muốn xóa sản phẩm này chứ?";
        if (window.confirm(confDel)) {
            productAdminService.deleteProduct(id)
            alert('Xóa sản phẩm thành công!');
            fetchApi();
        }
    }

    //call api
    function fetchApi() {
        productAdminService.getProducts(page, 10)
            .then((response) => {
                const products = response.data.content;
                const totalPages =  response.data.totalPages;
                setProductList(products);
                setTotalPage(totalPages);
            })
            .catch((error)=> {console.log(error)})
    }

    function handlePageClicked(page) {
        setPage(page - 1);
    }

    return (
        <>
            <div className="addNewProduct">
                <Button variant="primary" className='addNewProduct__btn' onClick={handleShow}>
                    Thêm mới sản phẩm
                </Button>
                <Modal show={show} onHide={handleClose}>
                    <AddProductForm  handleAddNewProduct={handleAddNewProduct}/>
                </Modal>
            </div>

            <div className="productList">
                <table>
                    <thead>
                        <tr>
                            <th>Tên sản phẩm</th>
                            <th>Giá</th>
                            <th>Hình ảnh</th>
                            <th>Thương hiệu</th>
                            <th>Đánh giá</th>
                            <th>Chức năng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productList.map((product) => {
                            return <ProductItem
                                        key = {product.id}
                                        id = {product.id}
                                        productName = {product.productName}
                                        price = {product.price}
                                        image = {product.image}
                                        brand = {product.brand}
                                        rated = {product.rated}
                                        delCallBack = {handeleDelClick}
                                        editCallBack = {handleEditClick}
                                    />
                            })
                        } 
                    </tbody>
                </table>
            </div>

            <Paging 
                page = {page + 1}
                totalPage = {totalPage}
                onPageClick = {handlePageClicked}
            />
        </>
    )
}

export default ProductList;