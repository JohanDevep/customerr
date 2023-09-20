import React from 'react'
import DashboardHeaderHeader from './header/DashboardHeader'
import SideBar from './sidebar'
import { Outlet } from 'react-router-dom'
import GetToken from '../../helpers/getToken'
import '../../../src/sass/main.scss'
import './style/Style.css'

const DashboardLayout = () => {

  // let token = GetToken()
  // console.log('token',token)
  return (
    // token &&  
    <div className="layout-holder">
      <SideBar />
      <div>
        {" "}
        <DashboardHeaderHeader />
        <Outlet />
      </div>
    </div>
  )
}

export default DashboardLayout