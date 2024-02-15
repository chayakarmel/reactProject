
import './App.css'
import AddAppointment from './components/appointment/AddAppointment'
// import BusinessData from './components/businessData/BusinessData'
import { Button } from '@mui/base'
import { Link } from 'react-router-dom'
import BusinessData from './components/businessData/BusinessData'
import ServicesList from './components/services/ServicesList'



function App() {

  return (
    <>


      
      <BusinessData/>
      <AddAppointment />
      {/* <Button><Link to='./Admin'>מנהל </Link></Button> */}
      <ServicesList/>
      

      
      {/* <BussinessData/> */}





    </>
  )
}

export default App