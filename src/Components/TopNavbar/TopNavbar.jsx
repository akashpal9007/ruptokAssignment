import React from 'react'
import './TopNavbar.css'
import search from '../../assets/search.png'
import notification from '../../assets/notification.png'
import user from '../../assets/user.png'

const TopNavbar = () => {
  return (
    <div className='topNav-p'>
        <div className='TopNavbar'>
            <div className='topnav-l'>
                <span className='topnav-l-head'>Application</span>
                <span>-</span>
                <span>Dashboard</span>
            </div>
            <div className='topnav-r'>
                <div className='topnav-r-search'>
                    <input type="text" placeholder='Search' />
                    <img src={search} alt="" />
                </div>
                <div><img src={notification} alt="" /></div>
                <div><img src={user} alt="" /></div>
            </div>
        </div>
        <div className='hr'>
            <hr />
        </div>
    </div>
  )
}

export default TopNavbar