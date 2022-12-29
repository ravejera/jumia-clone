// import { Link } from "react-router-dom";
import Card from "../Cards/card";
import './Furniture.css';
import { useState, useEffect } from "react";

const Furniture = () => {

    const [product, setProduct] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:8000/Products')
            .then(res => {
                return res.json();
            })
            .then(data => {
                
                setProduct(data);
                
            })
    }, [])

    const furniture = product.filter(prod => prod.category === 'furniture')
    return (
        <div className="furniture">
            <div className="furniture-title">
                <h2>Furnitures</h2>
            </div>
            <div className="main-products">
                {furniture && furniture.map((item) => (
                     <Card key={item.id} item={item}/>
                ))}
            </div>
        </div>

    );
}

export default Furniture;