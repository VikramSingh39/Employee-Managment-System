import React, { useState } from 'react';
import { setLocalStorage } from '../../utils/localStorage';

const Header = (props)=>{
      // const[userName, setUserName] = useState('');

      // if(!data){
      //       setUserName('Admin')
      // }else{
      //     setUserName(data.firstName)
      // }
      // console.log(userName);

      const logOut = ()=>{
        localStorage.setItem('loggedInUser', '');
        props.changeUser('')
      //   window.location.reload()
      }

      return(
            <div className='flex items-end justify-between '>
                  <h1 className='text-2xl font-medium'>Hello <br />
                  <span className='text-3xl font-semibold'>userName 👋</span>
                  </h1>
                  
                  <button onClick={logOut} className='bg-red-500 text-white px-5 py-2 rounded-sm text-lg font-medium'>Logout</button>
            </div>
      )
}
export default Header