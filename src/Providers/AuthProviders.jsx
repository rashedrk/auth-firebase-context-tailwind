import React, { createContext, useEffect, useState } from 'react';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import { app } from '../firebase/firebaseConfig';
export const AuthContext = createContext(null);

const googleAuthProvider = new GoogleAuthProvider();
const auth = getAuth(app);

const AuthProviders = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    //register
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //login
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    
    //currently signed-in user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
                setUser(currentUser);
                setLoading(false);
        })
        return () => {
            unsubscribe()
        };
    },[])

    //google sign in
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleAuthProvider)
    }

    //logout
    const logOut = () =>{
        return signOut(auth);
    }

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        signInWithGoogle,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;