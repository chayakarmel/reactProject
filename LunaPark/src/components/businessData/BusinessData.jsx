
import { observer } from 'mobx-react';
import { useEffect, useState } from "react";
import dataStore from '../../data/dataStore';
import './business.css';
import { getBusinessData } from '../../data/server';






const BusinessData = (observer(() => {

  // const [bd, setBD] = useState({
  //   businessName: "דליס",
  //   address: "בני ברק",
  //   phone: "0737146548",
  //   img: "https://www.delis.co.il/contentManagment/uploadedFiles/new/drushim_top_img.jpg",
  //   logo: "https://www.delis.co.il/contentManagment/uploadedFiles/%D7%9C%D7%95%D7%92%D7%95%202020/delis_logo.png"
  // });

  // console.log("businessData", bd);

  useEffect(() => {
    console.log('useEffect')
    if (!Object.entries(dataStore.businessDatas).keys.length) {
      getBusinessData();
      console.log('getBusinessData')

    }

  }, [])




  return (
    <>

      <header >

        <div className='header'>


          <img id='logo' src={dataStore.businessDatas.logo} alt="Business Logo" />

          <p>{dataStore.businessDatas.businessName}</p>
          <p> {dataStore.businessDatas.address}</p>
          <p>{dataStore.businessDatas.phone}</p>






        </div>




      </header >
      <div>
        <img id="img-header" src={dataStore.businessDatas.img} alt="Business image" />
      </div>
    </>
  );
}));

export default BusinessData;



// import React from 'react'
// // import {observer} from 'react'
// // import dataStore from '../../data/dataStore'
// // import { getBusinessData } from '../../data/server'

//  function BusinessData({bd}){

// //   useEffect(() => {

// //     if (!dataStore.setBusinessData.length > 0) {
// //         getBusinessData()
// //     }

// // }, [])

//   return (
//    <>
//    <div>
//     <image src={bd.logo}/>
//     <p>{bd.businessName}</p>
//     <p>{bd.address}</p>
//     <p>{bd.phone}</p>
//     <p>{bd.details}</p>
//    </div>
//    </>

//   )
// }
// export default BusinessData