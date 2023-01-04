import { 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged
} from 'firebase/auth';


export const loginRequest = (auth, email, password) => signInWithEmailAndPassword(auth, email, password);

export const registerRequest = (auth, email, password) => createUserWithEmailAndPassword(auth, email,password); 
  
export const onAuthChange = (auth, setUser, setIsLoading) => onAuthStateChanged(auth, (user) => {
  if (user) {
    setUser(user);
    setIsLoading(false);
  } else {
    setIsLoading(false);
  }
});
 



