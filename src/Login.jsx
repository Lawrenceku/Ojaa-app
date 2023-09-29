import React from "react";
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "AUTH_DOMAIN",
  projectId: "PROJECT_ID",
  storageBucket: "STORAGE_BUCKET",
  messagingSenderId: "MESSAGING_SENDER_ID",
  appId: "APP_ID"
}

// Initialize Firebase and Firebase Authentication
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
export {auth}

function Login(){
return(
  <div className=" w-full  h-full absolute">
        <div id='container' className="items-center justify-center flex-col h-full w-full">
            <p className="font-bold text-orange-500 text-6xl block text-center p-8">Ojaa</p>
            <img id='cart' className="h-52 mb-10" src="https://www.clker.com/cliparts/X/U/F/3/N/2/shopping-cart-logo.svg.med.png" alt="" />
            <form id="form" className="flex-col p-8 r" action="">
              <label htmlFor="" className="block font-medium">UserName   </label>
              <input placeholder="Enter UserName" name="name"  type="text" className="w-full md:w-80 mb-8 border focus:outline-0 p-2" />
              <label className="font-medium block" htmlFor="password" >Password</label>
              <input  className='  border-gray-200 border p-2 focus:outline-0 w-full md:w-80 ' type="password" placeholder="Enter Password" name="password" id="" />
            </form>
              <p className="flex justify-center ">
                <button className=" hover:text-orange-500 hover:bg-white border border-orange-500 text-white mx-4 bg-orange-500 p-2">Login</button>
                <button className=" bg-white hover:text-white hover:bg-orange-500 text-orange-500 border p-2 border-orange-500">Sign Up</button>
              </p>
        </div>
  </div>
)
}
export default Login