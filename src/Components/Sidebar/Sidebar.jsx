import React from 'react'
import './Sidebar.css'
import home from '../../assets/home.png'
import cube from '../../assets/cube.png'
import customer from '../../assets/customer.png'
import report from '../../assets/report.png'
import settings from '../../assets/settings.png'
import goods from '../../assets/booking-online.png'
import layers from '../../assets/layers.png'

const Sidebar = () => {
  return (
    <div className='Sidebar'>
        <div className='sideopt sideopt-head'>
          <img src={layers} alt="" />
          <span>
          FUND FLOW 360
          </span>
          </div>
        <div>
            <hr />
        </div>
        <div className='sidebar-opts'>
        <div className='sideopt'>
          <img src={home} alt="" />          
          <span>Dashboard</span>
          </div>
        <div className='sideopt customer-sideopt'>
          <img src={customer} alt="" />          
          <span>Customers</span>
          </div>
        <div className='sideopt'>
          <img src={cube} alt="" />          
          <span>Vendors</span>
          </div>
        <div className='sideopt'>
          <img src={goods} alt="" />          
          <span>Goods/Services</span>
          </div>
        <div className='sideopt'>
          <img src={settings} alt="" />          
          <span>Settings</span>
          </div>
        <div className='sideopt'>
          <img src={report} alt="" />          
          <span>Reports</span>
          </div>
        </div>
        <div>
            <hr />
        </div>

    </div>
  )
}

export default Sidebar