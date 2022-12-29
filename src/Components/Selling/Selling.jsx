import './Selling.css'
import { Link } from 'react-router-dom';


const Selling = ({product}) => {

    return (
        <div className="top-selling">
            <div className="selling-title">
                <h2>top selling items</h2>
            </div>
            <div className="main-products">
                {product && product.map((item) => (
                    <Link to={`/product/${item.id}`} key={item.id}>
                        <img width={200} height={200} src={item.image} alt="" />
                        <p>{item.title}</p>
                        <h3>{item.price}</h3>
                        <p>{item.initially}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Selling;