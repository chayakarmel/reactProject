import React from 'react'
//import AddAppointment from './AddAppointment'
import { useEffect } from 'react'
import dataStore from '../../data/dataStore'
import { getAppointment } from '../../data/server'
import { observer } from 'mobx-react';
import Appointment from './Appointment'
import { useState } from 'react'
import InputDate from './InputDate'
import './Appointment.css'

const AppointmentList = (observer(() => {
    // const { admin=true } = props;

    const [selectedDate, setSelectedDate] = useState('MM/DD/YYYY');
    useEffect(() => {

        if (!dataStore.appointments.length > 0) {
            getAppointment()
        }

    }, [])
    return (
        <>

            <div className='appointmentList'>{dataStore.appointments.map((appointment, indexA) => {
                return <Appointment key={indexA} appointment={appointment}></Appointment>
            })}
            </div>

            {/* <div className='appointmentList'>
                    {dataStore.appointments.forEach(e=>console.log("e.date",new Date(e.date).toDateString()))}
                    {console.log(new Date(selectedDate).toDateString())}
                    {dataStore.appointments.filter((a) => (selectedDate === 'MM/DD/YYYY' ||new Date(a.date).toDateString() === new Date(selectedDate).toDateString()))
                        .map((a, i) => <Appointment key={i} appointment={a} ></Appointment>)}</div> */}



            {/* <InputDate setSelectedDate={setSelectedDate} /> */}
            {/* <AddAppointment /> */}






        </>
    )
}))
export default AppointmentList