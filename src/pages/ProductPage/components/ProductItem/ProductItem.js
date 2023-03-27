import Col from 'react-bootstrap/Col';
import './ProductItem.css';
import Rating from '../ProductRating/ProductRating'
import CustomPrice from '../../../../common/components/CustomPrice/CustomPrice';


const ProductItem = ({productName, price, image, brand, rated}) => {

    // const customPrice = (price) => {
    //     return new Intl.NumberFormat().format(price)
    // }

    return(
        <Col className="product__box" lg={3} xl={3} md={3} sm={4}>
            <div className="product">
                <div className='product__image'>
                    <img src={image}/>
                </div>
                <div className='product__details'>
                    <h4 className='product__name'>{productName}</h4>
                    <h4 className='product__price'><CustomPrice price={price} /><p>đ</p></h4>
                    <h4 className='product__brand'>Thương hiệu: {brand}</h4>
                    <h4 className='product__rating'><Rating rated={rated} /></h4>
                </div>
            </div>
        </Col>  
    )
}

export default ProductItem;