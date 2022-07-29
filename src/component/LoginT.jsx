import '../Style/LoginT.css';

import React from 'react';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StoreIcon from '@mui/icons-material/Store';

const LoginT = () => {
  return (
    <div className='logint'>
        <div className="logint_in">
            <h3>New Customer?</h3>
            <h3 style={{color:'blue'}}>Signup</h3>
        </div>
         <hr/>
        <div className="logint_in">
            <AccountCircleIcon style={{color:'blue'}}/>
            <p>My Profile</p>
        </div>

 <hr/>
        <div className="logint_in">
            <img src='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png' alt=''/>
            <p>Filpkart Plus zone</p>

        </div>
        <hr/>
        <div className="logint_in">
            <StoreIcon style={{color:'blue'}}/>
            <p>Orders</p>
        </div>
        <hr/>
        <div className="logint_in">
         <FavoriteIcon style={{color:'blue'}}/>
         <p>Wishlist</p>
        </div>
        <hr/>
        <div className="logint_in">
            <ConfirmationNumberIcon style={{color:'blue'}}/>
            <p>Reward</p>

        </div>
        <hr/>
        <div className="logint_in">
        <CardGiftcardIcon style={{color:'blue'}}/>
        <p>Gift Card</p>
        </div>
    </div>
  )
}

export default LoginT