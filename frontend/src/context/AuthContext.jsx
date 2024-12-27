import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { validatePassword } from "firebase/auth";

const AuthContext = createContext();
export const useAuth = () => {
    return useContext(AuthContext);
};


// authProvider -- firebase
export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);


    // register a user (no password validation)
    // const registerUser = async (email, password) => {
    //     return await createUserWithEmailAndPassword(auth, email, password);
    // };

    // register a user (whit password validation from Firebase)
    const registerUser = async (email, password) => {
        const status = await validatePassword(auth, password);
        if (!status.isValid) {
            // Password could not be validated. Use the status to show what
            // requirements are met and which are missing.

            //! Firebase Authentication password policies support the following password requirements:
            //! Lowercase character required
            //! Uppercase character required
            //! Numeric character required
            //! Non-alphanumeric character required
            //! The following characters satisfy the non-alphanumeric character requirement: ^ $ * . [ ] { } ( ) ? " ! @ # % & / \ , > < ' : ; | _ ~
            //! Minimum password length (ranges from 6 to 30 characters; defaults to 6)
            //! Maximum password length (maximum length of 4096 characters)

            // If a criterion is undefined, it is not required by policy. If the
            // criterion is defined but false, it is required but not fulfilled by
            // the given password. For example:
            const needsLowerCase = status.containsLowercaseLetter !== true;
        } else {
            return await createUserWithEmailAndPassword(auth, email, password);
        }
    };




    // login the user
    const loginUser = async (email, password) => {
       return await signInWithEmailAndPassword(auth, email, password);
    };

    // login whit Google
    const signInWithGoogle = async () => {
        const googleProvider = new GoogleAuthProvider();
        return await signInWithPopup(auth, googleProvider);
    };

    // logout the user
    const logout = async () => {
        return signOut(auth);
    };


    // manage user
    useEffect(() => {  
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);

            if(user) {
                const {email, displayName, photoURL} = user;
                const userData = { email, username: displayName, photo: photoURL };
            };
        });

        return unsubscribe();
    }, []);


    const value = {
        currentUser,
        loading,
        registerUser,
        loginUser,
        signInWithGoogle,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
};