// // import React from 'react'
// import { Button, TextField } from '@mui/material';
// import * as React from 'react';
// import Box from '@mui/material/Box';


// import { observer } from 'mobx-react'
// import { useState } from 'react';
// import { addBusinessData } from '../../data/server';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';

// const EditBusinessData = (observer(() => {

//     const [BD, setBD] = useState({ businessName: "", logo: "", address: "", phone: "", details: "" });

//     const [open, setOpen] = React.useState(false);

//     const handleClickOpen = () => {
//         setOpen(true);
//     };

//     const handleClose = () => {
//         setOpen(false);
//     };

//     return (
//         <>
//             <Button variant="outlined" onClick={handleClickOpen}>
//                 Open alert dialog
//             </Button>
//             <Dialog
//                 open={open}
//                 onClose={handleClose}
//             aria-labelledby="alert-dialog-title"
//             aria-describedby="alert-dialog-description"
//             >
//                 <h3>עדכון פרטים</h3>

//                 <Box
//                     component="form"
//                     sx={{
//                         '& > :not(style)': { m: 1, width: '25ch' }, display: 'grid', columnGap: 3,
//                         rowGap: 0.1,
//                         gridTemplateColumns: 'repeat(1fr)',
//                     }}
//                     noValidate
//                     autoComplete="off"
//                 >
//                     <TextField label="שם הפארק" variant="outlined" value={BD.businessName}
//                         onChange={(e) => setBD({ ...BD, businessName: e.target.value })} />

//                     <TextField label="קישור ללוגו" variant="outlined" value={BD.logo}
//                         onChange={(e) => setBD({ ...BD, logo: e.target.value })} />

//                     <TextField label="כתובת" variant="outlined" value={BD.address}
//                         onChange={(e) => setBD({ ...BD, address: e.target.value })} />

//                     <TextField label="טלפון" variant="outlined" value={BD.phone}
//                         onChange={(e) => setBD({ ...BD, phone: e.target.value })} />

//                     <TextField label="תיאור" variant="outlined" value={BD.details}
//                         onChange={(e) => setBD({ ...BD, details: e.target.value })} />

//                     <Button variant="contained" onClick={() => addBusinessData(BD)}>עדכן</Button>
//                 </Box>
//                 <DialogActions>
//                     <Button onClick={handleClose}>Disagree</Button>
//                     <Button onClick={handleClose} autoFocus>
//                         Agree
//                     </Button>
//                 </DialogActions>
//             </Dialog>

//         </>
//     )

// }))
// export default EditBusinessData


import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
//import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import { observer } from 'mobx-react'
import { useState } from 'react';
import { addBusinessData } from '../../data/server';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import './business.css';
import dataStore from '../../data/dataStore'



const EditBusinessData = (observer(() => {

    const [BD, setBD] = useState(dataStore.businessDatas);



    //שומר את השינוי האחרון שבוצע בהצלחה
    const [open, setOpen] = React.useState(false);


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(BD)
        addBusinessData(BD);
        // BDP=({businessName:BD.businessName,address:BD.address,phone:BD.phone,img:BD.img,logo:BD.logo})
        setOpen(false);
    }
    const handleClose = () => {

        setOpen(false);
    };
   
    
        
    return (
        <>
            <div id="edit">
                <React.Fragment>
                    <Fab id='fab' variant="outlined" onClick={handleClickOpen}>
                        <EditIcon />
                    </Fab>
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        PaperProps={{
                            component: 'form',
                            onSubmit: handleSubmit,
                        }}
                    >
                        <DialogTitle>עדכון פרטי העסק</DialogTitle>
                        <DialogContent>
                            <Box
                                // component="form"
                                sx={{
                                    '& > :not(style)': { m: 2, width: '40ch' }, display: 'grid', columnGap: 3,
                                    rowGap: 0.1,
                                    gridTemplateColumns: 'repeat(1fr)',
                                }}
                                noValidate
                                autoComplete="off"
                            >

                                <TextField label="שם העסק" variant="outlined" value={BD.businessName}
                                    onChange={(e) => setBD({ ...BD, businessName: e.target.value })} />

                                <TextField label="קישור ללוגו" variant="outlined" value={BD.logo}
                                    onChange={(e) => setBD({ ...BD, logo: e.target.value })} />

                                <TextField label="כתובת" variant="outlined" value={BD.address}
                                    onChange={(e) => setBD({ ...BD, address: e.target.value })} />

                                <TextField label="טלפון" variant="outlined" value={BD.phone}
                                    onChange={(e) => setBD({ ...BD, phone: e.target.value })} />

                                <TextField label="תמונה" variant="outlined" value={BD.img}
                                    onChange={(e) => setBD({ ...BD, img: e.target.value })} />

                                {/* <TextField label="תיאור" variant="outlined" value={BD.details}
                            onChange={(e) => setBD({ ...BD, details: e.target.value })} /> */}
                                {/* <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText> */}
                                {/* <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          /> */}
                            </Box>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>ביטול</Button>
                            <Button type="submit" >שמירה</Button>
                        </DialogActions>
                    </Dialog>

                </React.Fragment>
            </div>
        </>
    );
}))
export default EditBusinessData