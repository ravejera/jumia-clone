// import { Link } from 'react-router-dom';  
import Card from '../Cards/card';
import './Clothes.css'
import { useEffect, useState } from 'react';

const Clothes = () => {
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

    
    const clothes = product.filter(prod => prod.category === 'clothing');

    return (
        <div className="top-selling">
             <div className="clothes-title">
                <h2>clothes</h2>
            </div>
            <div className="main-products">
               {clothes && clothes.map((item)=>(
                 <Card key={item.id} item={item}/>
               ))}
            </div>
        </div>
    );
}
 
export default Clothes;