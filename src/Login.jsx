import React from "react";
import { useState } from "react";
import { initializeApp } from "firebase/app"
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth"

// Initialize Firebase and Firebase Authentication
const firebaseConfig = {
  
  apiKey: "AIzaSyAk69XIPoc7o85wKwh9KZERIQY9tMluY1o",
  authDomain: "ojaa-cef8a.firebaseapp.com",
  projectId: "ojaa-cef8a",
  storageBucket: "ojaa-cef8a.appspot.com",
  messagingSenderId:"85551257488",
  appId: "1:85551257488:web:2adce7913f278682124515",
  measurementId: "G-P3W97B9PVL"

  /* apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId */
}
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

function Login(){
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')  
 



    function logIn(event){
    event.preventDefault()
    signInWithEmailAndPassword(auth,email,password)
    .then((userCredential)=>{
      //done signing in
      alert('login successful!')
      const user = userCredential.user
      navigate('./home')
    })
    .catch ((error)=>{
      const errorCode = error.code;
      const errorMessage = error.message; 
    alert('Fill in the required info correctly')
    }
    )
    }

    function signUp(event){
     event.preventDefault()
     createUserWithEmailAndPassword(auth,email,password)
     .then((userCredential) =>{
      //signed up
      alert('signed up successfully! ')
      const user = userCredential.user
     })
     .catch((error)=>{
      const errorCode = error.code;
      const errorMessage = error.message;
      alert('Fill in the required info correctly')
     }

     )
     
      }
return(
  <div className=" w-full  h-full absolute">
        <div id='container' className="items-center justify-center flex-col h-full w-full">
            <p className="font-bold text-orange-500 text-6xl block text-center p-8">Ojaa</p>
            <div className="flex justify-center ">
              <img id='cart' className="h-48 ml-12 mt-10 mb-20" src="https://www.clker.com/cliparts/X/U/F/3/N/2/shopping-cart-logo.svg.med.png" alt="" />
            </div>
            <form id="form" className="flex-col p-8 r"  action="">
              <label htmlFor="" className="block font-medium  w-full md:w-80">Email   </label>
              <input onChange={(event)=>setEmail(event.target.value)}  placeholder="Enter Email" required name="name"  type="email" className="w-full md:w-80 mb-8 border focus:outline-0 p-2" />
              <label className="font-medium block w-full md:w-80" htmlFor="password" >Password</label>
              <input onChange={(event)=>setPassword(event.target.value)}  required className='  border-gray-200 border p-2 focus:outline-0 w-full md:w-80 ' type="password" placeholder="Enter Password" name="password" id="" />
            </form>
              <p className="flex justify-center items-end">
                <input type="submit" onClick={logIn}  className="duration-300 w-20 hover:text-orange-500 hover:bg-white border border-orange-500 text-white mx-4 bg-orange-500 p-2" value='Login'/>
                No account yet?  
                <input type="submit" onClick={signUp} className="duration-300 w-20 bg-white hover:text-white hover:bg-orange-500 text-orange-500 border p-2 border-orange-500 mx-4" value='Sign Up'/>
              </p>
              <p className="text-orange-500 text-center m-4">Forgot Password?</p>
        </div>
  </div>
)
}
export default Login