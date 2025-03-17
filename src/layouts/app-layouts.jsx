import React from 'react'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div>
      <main>
        {/* {Header} */}
        <Outlet/>
        {/* {Body} */}
      </main>
      {/* {footer} */}
    </div>
  )
}

export default AppLayout
