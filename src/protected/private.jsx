import { Navigate, Outlet } from 'react-router-dom'
const PrivateRoutes = () => {
  let auth = {'token':localStorage.getItem('token') ? true : false}
return (
    auth.token ? <Outlet/> : <Navigate to='/login'/> 
  )
}
export default PrivateRoutes