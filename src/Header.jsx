import img1 from '../public/31b2f6_31aff7c0eace4126a8214222900efe72~mv2.png';
import "./Header.css";
import searchicon from '../public/search.svg';
import login from '../public/path7.svg';
import cart from '../public/Group 8321.svg';
import { useState } from 'react';
function Header() {
   
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
      setIsHovered(!isHovered);
    }
  return (
    <>
    <div className='header' style={{marginTop:'2vh'}} >

        <div className="header-1" >
        <img src={img1} alt=""/>
        </div>

        
        <div className="header-2" >
         <input type="search" className='search' placeholder='Enter a Keyword' />
         <div className="search-icon">
                <img src={searchicon} alt="Search Icon"/>
            </div>

            
        <div className="login" >
            <figure >
                <img src={login} alt=""/>
                <figcaption>Login</figcaption>
            </figure>
            <figure >
                <img src={cart} alt=""/>
                <figcaption>Cart</figcaption>
            </figure>
          </div>
        </div>


    </div>


    
        <div className="third-div" style={{zIndex:'5'}}>
            <li className="item">Item 1</li>
            <li className="item">Item 2</li>
            <li className="item">Item 3</li>
            <li className="item">Item 4</li>
            <li className="item" >Item 5</li>
            <li className="item dropdown-item" onMouseEnter={handleHover} onMouseLeave={handleHover}>
      Item 6
      {isHovered && (
        <div className="dropdown-content">
          <a href="#" className='option'>Option 1</a> <br /> 
          <a href="#" className='option'>Option 2</a> <br />
          <a href="#" className='option'>Option 3</a> <br />
          <a href="#" className='option'>Option 4</a> <br />
          <a href="#" className='option'>Option 5</a> <br />
          <a href="#" className='option'>Option 6</a>

        </div>
      )}
    </li>
            <li className="item">Item 7</li>
            <li className="item">Item 1</li>
            <li className="item">Item 1</li>
            <li className="item">Item 1</li>

            <button  className="order" >Order Now</button>
          
        </div>

 


    
    </>
  )
}

export default Header