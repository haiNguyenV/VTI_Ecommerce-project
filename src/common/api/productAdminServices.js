import axiosClient from "./axiosClient";

const API_PATH = '/api/admin/v1/products';

const getHeaderConfig = () => {
    return {
        headers : {
            token : localStorage.getItem('token')
        }
    }
}

//get
const getProducts = (page, size) => {
    return axiosClient.get(API_PATH + `?page=${page}&size=${size}`, getHeaderConfig())
}

//add
const addProduct = (product) => {
    return axiosClient.post(API_PATH , product, getHeaderConfig())
}

//edit
const editProduct = (productId, product) => {
    return axiosClient.put(API_PATH + `/${productId}`, product, getHeaderConfig())
}

//delete
const deleteProduct = (productId) => {
    return axiosClient.delete(API_PATH + `/${productId}`, getHeaderConfig())
}

const productAdminService = {
    getProducts,
    addProduct, 
    editProduct,
    deleteProduct
}

export default productAdminService;