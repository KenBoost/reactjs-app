import './index.scss'
import Sidebar from '../Sidebar'
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">     
       <Outlet></Outlet>
      </div>
    </div>
  )
}

export default Layout