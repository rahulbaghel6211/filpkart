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
         <NotificationsIcon style={{color:'blue'}}></NotificationsIcon>
         <p>Notification Preferences</p> 
        </div>
        <hr/>
        <div className='moret_in'>
            <MonetizationOn style={{color:'blue'}}/>
            <p>Sell On FilKart</p>

        </div>
        <hr/>
        <div className='moret_in'>
            <LiveHelpIcon style={{color:'blue'}}/>
            <p>24*7 customer Care</p>

        </div>
        <hr/>
        <div className='moret_in'>
            <TrendingUpIcon style={{color:'blue'}}/>
            <p>Advertise</p>

           </div>
           <hr/>
        <div className='moret_in'>
            <GetAppIcon style={{color:'blue'}}/>
            <p>Download App</p>
        </div>
    </div>
  )
}

export default MoreT