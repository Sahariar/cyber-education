import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
    sendEmailVerification,
    signInWithEmailAndPassword,
    updateProfile,
	GithubAuthProvider
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();
const AuthProvider = ({ children }) => {
	const [user, setUser] = useState({
		displayName:"Demo User"
	});
	const [loading, setLoading] = useState(true);

	const logInWithGoogle = () => {
		setLoading(true);
		return signInWithPopup(auth, provider);
	};
	const logInWithGitHub = () => {
		setLoading(true);
		return signInWithPopup(auth, gitHubProvider);
	};

	const createUserWithEmail = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};
	const logInUserWithEmail = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};
    const userProfileUpdate  = (name , photoUrl ) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoUrl
          }) 
    }

	const logOut = () => {
		setLoading(true);
		return signOut(auth);
	};
    const verifyEmail = (email) => {
        return sendEmailVerification(auth.currentUser);
    }
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			setLoading(false);
		});

		return () => {
			unsubscribe();
		};
	}, []);

	const authValues = {
		user,
		logOut,
		logInUserWithEmail,
		createUserWithEmail,
		logInWithGoogle,
		loading,
        verifyEmail,
        userProfileUpdate,
		logInWithGitHub,
	};

	return (
		<AuthContext.Provider value={authValues}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
