import React, { useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);

  // Email & Pass
  const signUpWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   Signin With Email
  const signInWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const authInfo = {
    user,
    setUser,
    signUpWithEmail,
    signInWithEmail,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
