import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import Swal from 'sweetalert2';
import './Appointment.css';

// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';

import { useState } from 'react';
import { observer } from 'mobx-react';
import { addAppointment } from '../../data/server'
import BasicDatePicker from './Date';
import KindOfServices from './KindOfServices';
import dataStore from '../../data/dataStore';


const AddAppointment = (observer(() => {

    //לפרטי ההזמנה
    const [appointment, setAppointment] = useState({ service: "", qty: "", date: "", name: "", email: "", phone: "" });
    const [open, setOpen] = React.useState(false);

    //לפתיחת הדיאלוג
    const handleClickOpen = () => {
        setOpen(true);
    };
    //לסגירת הדיאלוג ללא שמירה
    const handleClose = () => {
        setOpen(false);
    }

    const handleAddAppointment=()=>{
        addAppointment(appointment);
        setOpen(false);
      }
    
    
    
    //   const[errorDate,setErrorDate]=useState(false);
    
    
    //   const getCurrentDateTime = () => {
    //     const today = new Date();
    //     const year = today.getFullYear();
    //     const month = String(today.getMonth() + 1).padStart(2, '0');
    //     const day = String(today.getDate()).padStart(2, '0');
    //     const hours = String(today.getHours()).padStart(2, '0');
    //     const minutes = String(today.getMinutes()).padStart(2, '0');
    
    //     return `${year}-${month}-${day}T${hours}:${minutes}`;
    //   };
    
      const handleSubmit=(e)=>{
        e.preventDefault();
        addAppointment(appointment).then(()=>{
          if(dataStore.checkAppointment===false)
          {
            setErrorDate(true);
            alert("bbbbb")
          }
          else{
            if(dataStore.checkAppointment===true)
            {
              setErrorDate(false);
              ////////////////////////
              setAppointment({ service: "", qty: "", date: "", name: "", email: "", phone: "" });
            }
          }
        })
    
      }
    
    //   const handleChange=(e)=>{
    //     setFromDataMeeting({...fromDataMeeting,[e.target.name]:e.target.value,});
    
    //   }
   



   

    return (

        <React.Fragment>
            <form onSubmit={handleSubmit} className="dialog-meeting">

            <button variant="outlined" onClick={handleClickOpen}>
                הזמנת ארוע
            </button>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                    component: 'form',
                    onSubmit: (event) => {
                        event.preventDefault();
                        const formData = new FormData(event.currentTarget);
                        const formJson = Object.fromEntries(formData.entries());
                        const email = formJson.email;
                        console.log(email);
                        handleClose();
                    },
                }}
            >

                <DialogTitle>הזמנת ארוע</DialogTitle>
                <DialogContent>

                    <Box
                        // component="form"
                        sx={{
                            '& > :not(style)': { m: 3, width: '40ch' }, display: 'grid', columnGap: 3,
                            rowGap: 0.1,
                            gridTemplateColumns: 'repeat(1fr)',
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <KindOfServices setAppointment={setAppointment} appointment={appointment} />


                        {/* <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                            <InputLabel id="demo-select-small-label">Age</InputLabel>
                            <Select
                                labelId="demo-select-small-label"
                                id="demo-select-small"
                                value={age}
                                label="Age"
                                onChange={handleAgeChange}
                            >
                                <MenuItem value="מבוגר">מבוגר</MenuItem>
                                <MenuItem value="ילד">ילד</MenuItem>

                            </Select>
                        </FormControl> */}

                        <BasicDatePicker setAppointment={setAppointment} appointment={appointment} ></BasicDatePicker>
                        {/*date  */}
                        {/* <DialogContentText>
                            בחר תאריך רצוי.
                        </DialogContentText>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker value={appointment.date}
                                dateFormat="dd/MM/yyyy"
                                onChange={(target) => setAppointment({ ...appointment, date: new Date(target.toString()) })} disablePast
                            />
                        </LocalizationProvider> */}
                        {/* date */}
                        <TextField
                            autoFocus
                            required
                            type='number'
                            label="כמות "
                            variant="outlined"
                            value={appointment.qty}
                            //value={appointment.name}
                            onChange={(e) => {
                                setAppointment({ ...appointment, qty: e.target.value })
                                console.log(e.target.value)
                            }} />
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="name"
                            name="email"
                            label="שם"
                            type="text"
                            fullWidth
                            variant="outlined"
                            value={appointment.name}
                            onChange={({ target }) => setAppointment({ ...appointment, name: target.value })}
                        />
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="name"
                            name="email"
                            label="מייל"
                            type="email"
                            fullWidth
                            variant="outlined"
                            value={appointment.email}
                            onChange={({ target }) => setAppointment({ ...appointment, email: target.value })}
                        />
                        <TextField
                            label="טלפון "
                            type='phone'
                            autoFocus
                            required
                            variant="outlined"
                            value={appointment.phone}
                            onChange={(e) => setAppointment({ ...appointment, phone: e.target.value })} />
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>ביטול </Button>
                    <Button type="submit" onClick={handleSubmit}>שמירה</Button>
                </DialogActions>
            </Dialog>
            </form>
        </React.Fragment>
    );
}))
export default AddAppointment