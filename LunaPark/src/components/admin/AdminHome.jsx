import React, { useState } from 'react'
import EditBusinessData from '../businessData/EditBusinessData'
import { observer } from 'mobx-react'
import './admin.css';
import BusinessData from '../businessData/BusinessData'
import ServicesList from '../services/ServicesList'

import AddService from '../services/AddService';
import AppointmentList from '../appointment/AppointmentList';
import { Outlet, useNavigate } from 'react-router';





const AdminHome = (observer(() => {

 const navigate=useNavigate()

 
  // const [openServices, setOpenServices] = useState(true);
  // const [openAppointment, setOpenAppointment] = useState(false);

  // const handleOpenServices = () => {
  //   setOpenServices(true)
  //   setOpenAppointment(false)
  // }

  // const handleOpenAppointment = () => {
  //   setOpenAppointment(true)
  //   setOpenServices(false)
  // }
  return (
    <>



    
      <BusinessData />
    
      <div id="buttons">
        <button onClick={()=>navigate("ServicesList")}>שירותים</button>
        <button  onClick={()=>navigate("Appointments")}>פגישות</button>
        <AddService />
        <EditBusinessData/>
      </div>
      {/* {openServices && <ServicesList setOpenServices={setOpenServices}></ServicesList>}
      {openAppointment && <AppointmentList></AppointmentList>} */}

      <Outlet/>
       {/* <div id="buttons">
        <button><Link to='../ServicesList'>שירותים</Link></button>
         <Outlet name='outletA'></Outlet> 
        <button><Link to='../Appointments'>פגישות</Link></button>
       <Outlet name='outletB'></Outlet>
        <AddService />
        <EditBusinessData/>
      </div> */}
      
     

      {/* </div> */}


    </>
  )
}))
export default AdminHome