import React, { createContext, useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export const AuthContext = createContext()

export const AuthProvider = ({children})=>{

      const [userData, setUserData] = useState(null)
      
      useEffect(()=>{
        setLocalStorage()
         const {employee} = getLocalStorage();
         setUserData({employee})
         
      }, [])

      return(
            <AuthContext.Provider value={[userData, setUserData]}>
                  {children}
            </AuthContext.Provider>
      )

}
