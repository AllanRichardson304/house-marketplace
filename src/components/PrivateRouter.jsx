import { Navigate , Outlet } from "react-router-dom"
const PrivateRouter = () => {
     const loggedIn = true
  return  loggedIn ? <Outlet /> : <Navigate to='/signin' />
}

export default PrivateRouter
