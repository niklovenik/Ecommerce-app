import "./SingleProduct.scss";

import prod from '../../assets/products/earbuds-prod-2.webp'

import { FaCartPlus } from "react-icons/fa6";

const SingleProduct = () => {
    return <div className="single-product-main-content">
        <div className="layout">
            <div className="single-product-page">
                <div className="left"> 
                <img src={prod} alt=""/>
                </div>
                <div className="right"> 
                <span className="name">product name</span>
                <span className="price">price</span>
                <span className="desc">pro description</span>

                <div className="cart-buttons">
                    <div className="quantity-buttons">
                        <span>-</span>
                        <span>5</span>
                        <span>+</span>
                    </div>
                    <button className="add-to-cart-button">
                        <FaCartPlus size={20}/>

                        Add to Cart</button>
                </div>
                <span className="divider"/>
                <div className="info-item">
                    <span className="text-bold">Category:</span>
                    <span>Headphones</span>
                </div>
                </div>
            </div>
        </div>
    </div>
};

export default SingleProduct;
