import { useState } from 'react'
import {getAuth, updateProfile} from 'firebase/auth'
import { doc, updateDoc } from 'firebase/firestore'  
import { db } from '../firebase.config'
import { useNavigate,Link } from 'react-router-dom'
import {toast} from 'react-toastify'
import arrowRight from '../assets/svg/keyboardArrowRightIcon.svg'
import homeIcon from '../assets/svg/homeIcon.svg'
export default function Profile() {
  const auth = getAuth()
  const navigate = useNavigate()
  const [changeDetails , setChangeDetails] = useState(false)
  const [formData,setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email
  })
  const {name, email} = formData
  const onLogout = () =>{
   auth.signOut()
   navigate('/')
  }
  const onSubmit = async() => {
   try {
    if(auth.currentUser.displayName !== name){
      await updateProfile(auth.currentUser, {
        displayName:name
      })
      const userRef = doc(db, 'users',auth.currentUser.uid)
      await updateDoc(userRef,  {
          name
      })
    } 
   } catch (error) {
    console.log(error)
    toast.error('Could not update profile details')
   }
  }
  const onChange = (e) => {
   setFormData((preState) => ({
    ...preState,
    [e.target.id]:e.target.value
   }))
  }
  return (
    <>
    <div className="profile">
      <header className='profileHeader'>
        <p className="pageHeader">
          My Profile
        </p>
        <button type='button' className='logOut' onClick={onLogout}>Logout</button>
      </header>
      <main>
        <div className="profileDetaisHeader">
          <p className="profileDetailsText">Personal Details</p>
          <p className="changePersonalDetails" onClick={() => {
            changeDetails && onSubmit(); setChangeDetails((preState) => !preState)
          }}>{changeDetails ? 'done' : 'change'}</p>
        </div>
        <div className="profileCard">
           <form>
              <input type="text" id='name'
               className={!changeDetails ? 'profileName' :  'profileNameActive'}  
               disabled={!changeDetails} value={name} onChange={onChange}/>
               <input type="text" id='email'
               className={!changeDetails ? 'profileEmail' :  'profileEmailActive'}  
               disabled={!changeDetails} value={email} onChange={onChange}/>
           </form>
        </div>

        <Link to='/create-listing' className='createListing'>
          <img src={homeIcon} alt="home" />
          <p>Sell or rent your home</p>
          <img src={arrowRight} alt="" />
          </Link>

      </main>
    </div>
    </>
  )

}
