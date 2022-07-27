import '../Style/Header.css';

import React from 'react';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  return (
    <div className='header'>
        <div className="header_first">
            <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="filpkartlogo" />
            <div className="header_first1">
                <span style={{
                    color:"white",
                    fontStyle:"italic",
                    fontSize:"11px"
                }}>Explore</span>
                <span style={{
                    color:"#f9e107",
                    fontStyle:"italic",
                    fontSize:"11px"
                }}>Plus</span>
                <span><img width="10" src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png" alt="" /></span>
            </div>
        </div>
        <div className="header_second">
            <input placeholder='Search For Products,Brands and More' type="text" />
            <SearchIcon/>
        </div>
        <div className="header_third">
            <button>Login</button>
        </div>
        <div className="header_fourth">
            <span>More</span>
            <ExpandMoreIcon/>
        </div>
        <div className="header_five">
            <AddShoppingCartIcon/>
            <p>cart</p>
        </div>

    </div>
  )
}

export default Header