import React, { createContext, useEffect, useState } from 'react';
import {getAuth, onAuthStateChanged, signInWithPopup}from'firebase/auth'
import app from '../Firebaseconfig/Fireconfig';
export const AuthContext =createContext()
export const auth =getAuth(app)
const Firebase = ({children}) => {
    const [user ,setuser] = useState(null);

   
    //write funtion for login 
    const providerLogin =(provider)=>{
        return signInWithPopup(auth,provider)
    }
    
    useEffect(()=>{
        const unsubscrib = onAuthStateChanged(auth,(currentUser)=>{
            console.log('user inside state change', currentUser)
            setuser(currentUser)
        })
        return ()=>{
            unsubscrib()
        }
    },[])
    const authinfo = {user,providerLogin}
    return (
        <AuthContext.Provider value={authinfo}>
              {children}
        </AuthContext.Provider>
    );
};

export default Firebase;