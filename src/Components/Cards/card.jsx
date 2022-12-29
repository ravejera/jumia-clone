import { Link } from "react-router-dom";



const Card = ({ item }) => {
    return (
        <Link to={`/product/${item.id}`} >
            <img width={200} height={200} src={item.image} alt="" />
            <p>{item.title}</p>
            <h3>{item.price}</h3>
            <p>{item.initially}</p>
        </Link>
    );
}

export default Card;