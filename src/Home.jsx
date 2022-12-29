import { useState, useEffect } from 'react';
import Clothes from './Components/Clothes/Clothes';
import Electronics from './Components/Electronics/Electronics';
import Furniture from './Components/Furnitures/Furniture';
import Selling from './Components/Selling/Selling';

const Home = () => {
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

    const selling = product.filter(prod => prod.deal === 'new deal')
    const electronics = product.filter(prod => prod.category === 'electronics')
    // const electronics = product.filter(prod => prod.category === 'electronics')
    const clothes = product.filter(prod => prod.category === 'clothing')
    const furniture = product.filter(prod => prod.category === 'furniture')
            
    return (
        <div className="home">
            {product && <Selling product={selling}/>}
            {product && <Electronics product={electronics}/>}
            {product && <Clothes product={clothes}/>}
            {product && <Furniture product={furniture}/>}
        </div> 
    );
}

export default Home;