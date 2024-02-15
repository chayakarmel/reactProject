import React from 'react'
import Swal from 'sweetalert2'




 function SuccessPage() {
    
  return (
    <> 
    {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "!נכנסת בהצלחה",
        showConfirmButton: false,
        timer: 1500
      })
   
    }
    
    </>

  )
}
export default SuccessPage