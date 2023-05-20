import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


const logIn = (email, password) => {
  
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("logueado")
      console.log(user)
      // ...s
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}


export const authService = { logIn }