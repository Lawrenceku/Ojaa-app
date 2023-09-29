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
            <img id='cart' className="" src="https://www.clker.com/cliparts/X/U/F/3/N/2/shopping-cart-logo.svg.med.png" alt="" />
            <form className="flex-col" action="">
              <label htmlFor="" className="font-medium">UserName</label>
              <input className=' m-10'  type="text" className="border focus:outline-0 p-2" />
              <label className="font-medium" htmlFor="password" >Password</label>
              <input  className='m-8  border-gray-200 border p-2 focus:outline-0 ' type="password" name="password" id="" />
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