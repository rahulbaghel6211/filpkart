import '../Style/MoreT.css';

import React from 'react';

import GetAppIcon from '@mui/icons-material/GetApp';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import MonetizationOn from '@mui/icons-material/MonetizationOn';
import NotificationsIcon from '@mui/icons-material/Notifications';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const MoreT = () => {
  return (
    <div className='moret'>

        <div className='moret_in'>
         <NotificationsIcon></NotificationsIcon>
         <p>Notification</p> 
        </div>
        <div className='moret_in'>
            <MonetizationOn/>
            <p>Sell On FilKart</p>

        </div>
        <div className='moret_in'>
            <LiveHelpIcon/>
            <p>24*7 customer Care</p>

        </div>
        <div className='moret_in'>
            <TrendingUpIcon/>
            <p>Advertise</p>

           </div>
        <div className='moret_in'>
            <GetAppIcon/>

            <p>Download App</p>
        </div>
    </div>
  )
}

export default MoreT