import { useEffect,useState } from "react"
import {getAuth,onAuthStateChange} from 'firebase/auth'
export default function useAuthStatus() {
    const [loggedIn, setLoggedIn] = useState(false)
    const [checkingStatus , setCheckingStatus] = useState(true)
    useEffect(()=>{
        const auth = getAuth()
        onAuthStateChange( auth, (user) =>{
            
        })
    })
  return (
    <div>
      
    </div>
  )
}
