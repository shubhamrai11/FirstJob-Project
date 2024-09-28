
import Nevbar from "@/components/Nevbar";
import React from 'react'
import { BrowserRouter, Outlet, Route } from 'react-router-dom' // Assuming Outlet is imported from 'react-router-dom'//+

const AppLayout = () => {
  return (
    <div>
      <div className='grid-background'></div>
      <main className="min-h-screen containe">
        <Nevbar />
        <Outlet />
      </main>
    </div>
  )
}

export default AppLayout
