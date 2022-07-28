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
            <h2>New Customer?</h2>
            <h2>Signup</h2>
        </div>
        <div className="logint_in">
            <AccountCircleIcon/>
            <p>My Profile</p>
        </div>
        <div className="logint_in">
            <img src='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png' alt=''/>
            <p>Filpkart Plus zone</p>

        </div>
        <div className="logint_in">
            <StoreIcon/>
            <p>Orders</p>
        </div>
        <div className="logint_in">
         <FavoriteIcon/>
         <p>Wishlist</p>
        </div>
        <div className="logint_in">
            <ConfirmationNumberIcon/>
            <p>Reward</p>

        </div>
        <div className="logint_in">
        <CardGiftcardIcon/>
        <p>Gift Card</p>

        </div>
    </div>
  )
}

export default LoginT