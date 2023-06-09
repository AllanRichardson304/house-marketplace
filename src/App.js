import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import PrivateRouter  from './components/PrivateRouter';
import Explore from './pages/Explore';
import Category from './pages/Category';
import Offers from './pages/Offers';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import CreateListing from './pages/CreateListing';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Explore/>}/>
        <Route path='/offers' element={<Offers/>}/>
        <Route path='/category/:categoryName' element={<Category/>}/>
        <Route path='/profile' element={<PrivateRouter/>}>
        <Route path='/profile' element={<Profile/>}/>
        </Route>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/forgotpassword' element={<ForgotPassword/>}/>
        <Route path='/create-listing' element={<CreateListing/>}/>
      </Routes>
      <Navbar/>
    </Router>
    <ToastContainer/>
    </>
  );
}

export default App;
