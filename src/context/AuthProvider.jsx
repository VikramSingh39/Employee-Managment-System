import React, { createContext, useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export const AuthContext = createContext()

export const AuthProvider = ({children})=>{
      localStorage.clear()
      const [userData, setUserData] = useState(null)
      
      useEffect(()=>{
        setLocalStorage()
         const {employee, admin} = getLocalStorage();
         setUserData({employee, admin})
         
      }, [])

      return(
            <AuthContext.Provider value={userData}>
                  {children}
            </AuthContext.Provider>
      )

}
