import Top2Nav from '../Top2Nav/Top2Nav';
import TopNav from '../TopNav/TopNav';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <TopNav />
            <Top2Nav />
        </div>
    );
}
 
export default Navbar;