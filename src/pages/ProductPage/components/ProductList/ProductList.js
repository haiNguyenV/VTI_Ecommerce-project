//chứa các state và truyền dữ liệu về productItem, paging, api để hiển thị ra danh sách sản phẩm
import React from 'react';
import ProductItem from '../ProductItem/ProductItem'
import productAdminService from '../../../../common/api/productAdminServices';
import productServices from '../../../../common/api/productService'
import Row from 'react-bootstrap/Row';
import Paging from '../../../../common/components/Pagination/Pagination'

class ProductList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            page: 0,
            totalPages: 0,
            productList: []
        }
    }

    fetchAPI() {
        productAdminService.getProducts(this.state.page, 10)
            .then(response => {
                const data = response.data;
                const ProductList = data.content;
                console.log(ProductList)
                this.setState({
                    ...this.state,
                    productList: [...ProductList],
                    totalPages: data.totalPages
                })
            })
            .catch(err => {
                alert(err);
            })
    }

    handlePageOnClicked(pageClicked) {
        this.setState({page: pageClicked - 1})
    }

    componentDidMount() {
        this.fetchAPI();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.state.page !== prevState.page) {
            this.fetchAPI();
        }
    }

    render() {
        let productList = [];
        if(this.state.productList !== undefined && this.state.productList !== null) {
            productList = this.state.productList.map((product) => {
                return <ProductItem 
                            key={product.id}
                            {...product}
                />
            })
        }
        return (
            <>
                <Row>
                    {
                        productList
                    }
                </Row>
                <Row className="pages">
                    <Paging onPageClick={this.handlePageOnClicked.bind(this)} page={this.state.page + 1} totalPage={this.state.totalPages} />
                </Row>
            </>
        )
    }
}

export default ProductList