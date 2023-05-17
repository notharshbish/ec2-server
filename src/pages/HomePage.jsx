import React from 'react'
import twitter from '../images/twitter-logo.png'
import '../css/HomePage.css'
import HomeIcon from '@mui/icons-material/Home';
import { IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import avatar from '../images/avatar.png'
import Tweet from './Tweet';

function HomePage() {
  return (
    <div className = 'container'>
        {/* SideLine */}
        <div className = "container_sideline">
            <div className = "container_sideline--up">
                <img src={twitter} alt="" />
                <IconButton style = {{margin : '30px 0'}}>
                    <HomeIcon fontSize='medium' />      
                </IconButton>
            </div>
            <div className = "container_sideline--down">
                <IconButton style = {{margin : '30px 0'}}>
                    <AccountCircleIcon fontSize='large' />      
                </IconButton>
            </div>
        </div>
        {/* The Wall */}
        <div className="container_wall">
            <span style = {{display: 'flex', justifyContent : 'left'}}>Home</span>
            {/* TweetSection */}
            <div className='container_section'>
                <div className = "container_section--left">
                    <img src={avatar} alt="avatar" />
                </div>
                <div className = "container_section--right">
                    <textarea placeholder='What is happening ?' type='text'/> 
                    <div 
                    style = {{
                        width : '100%', 
                        display : 'flex' , 
                        height : 'fit-content' , 
                        justifyContent : 'right' ,  
                        alignItems : 'center'
                    }}>
                        <div className = "container_section--right-btn">
                            <span>Tweet</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className = "container_timeline">
                <Tweet /> 
                <Tweet /> 
                <Tweet /> 
                <Tweet /> 
                <Tweet /> 
            </div>
        {/* TimeLine */}
        </div>
    </div>
  )
}

export default HomePage