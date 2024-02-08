import { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase.config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const googleSingIn = () => {
    setLoader(true);
    return signInWithPopup(auth, provider);
  };
  const signInUser = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOutUser = () => {
    setLoader(true);
    return signOut(auth);
  };
  const updateUser = (name, photo) => {
    setLoader(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      //   const userEmail = currentUser?.email || user?.email;
      //   const loggedUser = { email: userEmail };
      setUser(currentUser);
      setLoader(false);
      console.log(currentUser?.email);
      //   if (currentUser?.email) {
      //     axiosPublic.post("/jwt", loggedUser).then((res) => {
      //       if (res.data.token) {
      //         localStorage.setItem("access-token", res.data.token);
      //         setLoader(false);
      //       }
      //     });
      //   } else {
      //     localStorage.removeItem("access-token");
      //   }
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    loader,
    user,
    signInUser,
    logOutUser,
    googleSingIn,
    createUser,
    updateUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
