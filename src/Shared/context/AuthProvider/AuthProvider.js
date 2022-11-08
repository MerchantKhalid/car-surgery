import React, {  createContext, useEffect, useState } from 'react';
import app from '../../../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'

export const AuthContext = createContext()
    const auth = getAuth(app)
    const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    // create user with email password
    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login
    const login =(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    // onAuthStateChanged
    useEffect(()=>{
      const unSubscribe  = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)

      })
      return ()=>{
        return unSubscribe();
      }

    },[])

 
    const authInfo = {
        user,
        loading,
        createUser,
        login

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;