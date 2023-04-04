import { Button } from '@chakra-ui/react'
import React from 'react'
import AdminNavbar from './AdminNavbar'
import "./Admin_Dashboard.css"

const AdminDashboard = () => {
  return (
    <div>
     <AdminNavbar/>
     <div className="admin_dashboard_div">
          <div className="welcome_div">
            <div className="row">
              <div className="col-md-12 text-center">
                <h3 className="animate-charcter">Welcome</h3>
                <h4 className="eBuzz_text">Apni Dukan is here to make your bussiness grow!</h4>
              </div>
            </div>
          </div>
          <div className="explore_button">
            <Button>Explore Now!</Button>
          </div>
          <div className="footer"></div>
        </div>
    </div>
  )
}

export default AdminDashboard
