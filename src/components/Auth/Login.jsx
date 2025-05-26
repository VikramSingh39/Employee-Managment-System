import React, {useState } from 'react';

const Login = ({handleLogin})=>{
      // console.log(handleLogin);
      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')

      const submitHandler = (e)=>{
            e.preventDefault()
           handleLogin(email, password)

           setEmail("")
           setPassword("")
      }

      return(
            <div className='h-screen w-screen flex items-center justify-center bg-black text-white'>
<div className=''>
      <form onSubmit={(e)=>{
            submitHandler(e)
      }} action="" className='flex flex-col items-center justify-center'>
            <input value={email}
            onChange={(e)=>{
                  setEmail(e.target.value);
            }}
             required className='outline-none bg-transparent border-2 py-3 px-5 text-xl border-emerald-600 rounded-full ' type="email" placeholder='enter your email' />
            <input value={password}
            onChange={(e)=>{
                 setPassword(e.target.value) 
            }}
             required className='outline-none bg-transparent border-2 py-3 px-5 text-xl border-emerald-600 rounded-full mt-3'  type="password" placeholder='enter your password' />
            <button className='text-white outline-none  border-none py-2 px-25 text-xl bg-emerald-600 rounded-full mt-7'>Login</button>
      </form> 
</div>
            </div>
      )
}
export default Login