import './TopNav.css'

const TopNav = () => {
    return (
        <div className="top-nav">    
            <p>sell on jumia<i className="fa-solid fa-star"></i></p>
            <div className="products">
                <a href="/food"><i className="fa fa-ice-cream"></i>food</a>
                <a href="/prime"><i className='fa fa-crown'></i>prime</a>
                <a href="/pay"><i className="fa-solid fa-shield-halved"></i>pay</a>
                <a href="/pay"><i className="far fa-copyright"></i>logistics</a>
            </div>
        </div>
    );
}
 
export default TopNav;