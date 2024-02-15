

// import * as React from 'react';

// // import { useEffect } from 'react';

// const Service = ({ service }) => {

//   return (
//     <>

//     <div className='font'>
//       <img src={service.img} />.
//              <h1>{service.name}</h1>
//             <p>{service.descripition}</p>
//             <p>מחירון לילד: {service.child}</p>
//             <p>מחירון למבוגר: {service.adult}</p>

//           </div>
//     </>

//   );
// }
// export default Service


import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import './service.css';


import Stack from '@mui/material/Stack';



const Service = ({ service }) => {

  return (
    <>
      <div className='font'>
        <Card sx={{ maxWidth: 450 }} >
          <CardHeader
            title={service.name}
          />
             <Typography >
             {service.descripition}
            </Typography>
          
          <CardMedia 
            component="img"
            height="194"
            image={service.img}
            alt="service image"
          />
          <CardContent>
            <Typography >
             מחיר:  {service.price} ש"ח למנה
            </Typography>
          </CardContent>
         
          <Collapse timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph></Typography>

            </CardContent>
          </Collapse>
        </Card>
      </div>
    </>
  );
}

export default Service;





