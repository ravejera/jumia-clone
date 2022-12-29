import './Top2Nav.css'
import { Link } from 'react-router-dom';

const Top2Nav = () => {
    return (
        <div className="main-nav">
            <h2>jumia <i className='fa fa-star'></i></h2>
            <div className="search-section">
                <i className="fa fa-search"></i>
                <input type="text" aria-label='search' placeholder=' search products,prands and categories' />
                <button>search</button>
            </div>
            <div className="menu-bar">
                <ul>
                    <li><Link to="/">home</Link></li>
                    <li><i className="fa fa-user-circle"></i><Link to="/d">account</Link>
                        <div className="sub-menu">
                            <button>sign in</button>
                            <Link to="/m">my account</Link>
                            <Link to="/o">orders</Link>
                            <Link to="/c">saved items</Link>
                        </div>
                    </li>
                    <li><i className="fa fa-question-circle"></i><Link to="/d">help</Link>
                        <div className="sub-menu">
                            <button>sign in</button>
                            <Link to="/m">help center</Link>
                            <Link to="/o">place orders</Link>
                            <Link to="/c">order cancellation</Link>
                            <Link to="/c">return and refund</Link>
                            <Link to="/c">payment jumia account</Link>
                            <Link to="/c">contact us</Link>
                        </div>
                    </li>
                    <div className="cart">
                        <li>
                            <i className="fa fa-shopping-cart"></i>
                            <Link to="/cart">cart <span>0</span></Link>
                        </li>
                    </div>
                </ul>
            </div>
        </div>
    );
}

export default Top2Nav;