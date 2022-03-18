import { ref } from "vue";
import { auth, signInWithEmailAndPassword } from "../firebase/firebase";

const error = ref(null);

const signIn = async (auth, email, password) => {
  error.value = null;

  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    if (!res) {
      throw new Error("Could not sign in into the app!");
    }
    error.value = null
    console.log(res)
    return res
  } catch (error) {
    console.log(error.message);
    error.value = error.message;
  }
};

const useSignIn = () => {
  return { error, signIn };
};

export default useSignIn;
