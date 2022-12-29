import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import './Product.css';



const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:8000/Products/${id}`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                // console.log(product);
                setProduct(data);
            })
    }, [id])
    
    const ShowProduct = () => {
        return (
            <div className="showproduct" >
                <img src={product.image} alt={product.title} />
                <div className="sho-p-title">
                    <span>{product.category}</span>
                    <span>{product.title}</span>
                    <span>{product.price}</span>
                    <button> <i className="fa fa-shopping-cart"> </i>Add to cart</button>
                </div>
            </div>
        )
    }
    return (
        <div className="top-selling">
            {<ShowProduct />}
        </div>
    );

}

export default Product;