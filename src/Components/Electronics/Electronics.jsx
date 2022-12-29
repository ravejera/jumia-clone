import './Electronics.css'
import { useState, useEffect } from 'react';
import Card from '../Cards/card';



const Electronics = () => {

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

    const electronics = product.filter(prod => prod.category === 'electronics')

    return (
        <div className="electronics">
             <div className="electronic-title">
                <h2>Electronic devices</h2>
            </div>
            <div className="main-products">
               {electronics && electronics.map((item)=>(
                   <Card key={item.id} item={item}/>
               ))}
            </div>
        </div>
    );
}
 
export default Electronics;