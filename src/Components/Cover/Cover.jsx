import './Cover.css'
import Image1 from "../../img/10362000_4385971.jpeg"
import Image2 from "../../img/11008273_4633064.jpeg"
import Image3 from "../../img/11461405_4739023.jpeg"
import Image4 from "../../img/12071122_22Z_2012.w003.n001.68C.p6.68.jpg"
import Image5 from "../../img/13859540_5356099.jpeg"
import Image6 from "../../img/15169224_5565175.jpeg"
import Image7 from "../../img/29788890_7551508.jpeg"
import { Link  } from 'react-router-dom'



const Cover = () => {
    return (
        
        <div className="cover">
            
            <div className="products-category">
                <ul>
                    <li><Link to="a"><i className='fa fa-apple'></i> supermarket</Link></li>
                    <li><Link to="a"><i className='fa fa-medkit'></i> health & beauty</Link></li>
                    <li><Link to="/furniture"><i className='fa fa-chair'></i> home & office</Link></li>
                    <li><Link to="a"><i className='fa fa-mobile-phone'></i> phones & tablets</Link></li>
                    <li><Link to="a"><i className='fa fa-desktop'></i>computing</Link></li>
                    <li><Link to="electronics"><i className='fa fa-radio'></i> electronics</Link></li>
                    <li><Link to="/clothes"><i className='fa fa-tshirt'></i> fashion</Link></li>
                    <li><Link to="a"><i className='fa fa-gamepad'></i> gaming</Link></li>
                    <li><Link to="a"><i className='fa fa-baby'></i> baby products</Link></li>
                    <li><Link to="a"><i className='fa fa-dumbbell'></i> sporting goods</Link></li>
                    <li><Link to="a"><i className='fa fa-broom'></i> garden & outdoors</Link></li>
                    <li><Link to="a"><i className='fa fa-comment-dots'></i> other categories</Link></li>
                </ul>
            </div>
            <div className="cover-images">
                <img src={Image1} className="image" alt="" />
                <img src={Image2} className="image" alt="" />
                <img src={Image3} className="image" alt="" />
                <img src={Image4} className="image" alt="" />
                <img src={Image5} className="image" alt="" />
                <img src={Image6} className="image" alt="" />
                <img src={Image7} className="image" alt="" />
            </div>
        </div>
    );
}
 
export default Cover;