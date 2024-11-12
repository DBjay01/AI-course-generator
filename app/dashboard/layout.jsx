import React from 'react'
import SideBar from './_components/SideBar'
import Header from './_components/header'

function DashboardLayout({children}) {
  return (
    <div>
        <div className='md:w-64 hidden md:block'>
            <SideBar></SideBar>
        </div>
        <div className='md:ml-64'>
            <Header/>
            <div className='p-5'>{children}</div>
            
        </div>
    </div>
  )
}

export default DashboardLayout