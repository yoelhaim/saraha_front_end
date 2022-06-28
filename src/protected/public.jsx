import { Navigate, Outlet } from 'react-router-dom'
const PublicRoutes = () => {
  let auth = {'token':localStorage.getItem('token') ? true : false}
return (
    !auth.token ? <Outlet/> : <Navigate to='/home'/> 
  )
}
export default PublicRoutes