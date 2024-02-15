

// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';
// // import { useEffect } from 'react';

// const appointment = ({ appointment }) => {



//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardActionArea>
//         <CardMedia
//           // component="img"
//           // height="140"
//           // image={service.img}
//           // alt={service.name}
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">


//           </Typography>
//           <Typography variant="body2" color="text.secondary">

//             <p>{new Date(appointment.date)?.toLocaleDateString()}</p>
//             <p>{appointment.service}</p>
//             <p>{appointment.child_adult}</p>
//             <p> {appointment.name}</p>
//             <p> {appointment.email}</p>

//           </Typography>
//         </CardContent>
//       </CardActionArea>
//     </Card>

//   );
// }
// export default appointment

import React from 'react'
//import Card from '@mui/material/Card';
//import CardContent from '@mui/material/CardContent';
///import CardMedia from '@mui/material/CardMedia';
//import Typography from '@mui/material/Typography';
//import { CardActionArea } from '@mui/material';
import './Appointment.css'


const Appointment = ({ appointment }) => {
  let color = 'later';
  

  if (
    new Date(appointment.date).setHours(0, 0, 0, 0) == new Date().setHours(0, 0, 0, 0)) {
    color = 'today';
    
  }
  else if (

    new Date(appointment.date) < new Date().setDate(new Date().getDate() + 7)) {
    color = 'thisWeek';
    
  }

  return (
    <>
      
        <div className='appointment' >
          <p className={`${color}`}>{new Date(appointment.date)?.toLocaleDateString()}</p>
          <p>{appointment.service}</p>
          <p>מספר מנות :{appointment.qty}</p>
          <p> {appointment.name}</p>
          <p> {appointment.email}</p>
          <p> {appointment.phone}</p>
        </div>
     
    </>

  )
}

export default Appointment
