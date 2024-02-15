
import Login from "./Login"
import AdminHome from "./AdminHome"
import dataStore from "../../data/dataStore"
import { observer } from "mobx-react"



const AdminPage = (observer(() => {

   


    return (
        <>
            {!dataStore.isLogin ?  <Login/>: <AdminHome/> }
        </>
    )
}))

export default AdminPage
