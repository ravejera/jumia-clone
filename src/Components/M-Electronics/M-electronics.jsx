import { useState , useEffect} from "react";
import Electronics from "../Electronics/Electronics";

const MainElectronics = () => {
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
        <div>
            <Electronics product={electronics}/>
        </div>
     );
}
 
export default MainElectronics;