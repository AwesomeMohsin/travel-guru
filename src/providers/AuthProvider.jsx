import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";


export const AuthContext = createContext()




const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState(null) 

    const googleProvider = new GoogleAuthProvider();

    // email sign up
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // email login
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // google login
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        return signOut(auth);
    }



    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user in the auth state change', currentUser);
            setUser(currentUser)
        });
        return () => {
            unSubscribe();
        }
    } , [])


    const authInfo = {
        user,
        createUser,
        loginUser,
        googleLogin,
        logOut,
        

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;