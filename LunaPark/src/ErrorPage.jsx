import React from 'react'
import Swal from 'sweetalert2'


 function ErrorPage() {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
  return (
    <>
    <div>
      
      
      </div>  
    
      </>
  )
}
export default ErrorPage