import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import "./App.css";
import { auth } from "./firebase-config";

function App() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className="App flex">
      <div className="flex flex-col">
        <h3 className="text-[25px] font-bold select-none text-[#333333]"> Register User </h3>
        <input
        type="email"
          placeholder="Email..."
          className="p-[5px] px-5 py-2 outline-none border-none my-1 rounded-full shadow focus:shadow-xl"
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <input
          type="password"
          className="p-[5px] px-5 py-2 outline-none border-none my-1 rounded-full shadow focus:shadow-xl"
          placeholder="Password..."
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />

        <button onClick={register}  className="p-[5px] px-3 py-2 bg-white w-[50%] rounded-full shadow-md my-2 active:transition-none active:shadow-lg"> Create User</button>
      </div>

      <div className="flex flex-col mx-4">
        <h3 className="text-[25px] font-bold select-none text-[#333333]"> Login </h3>
        <input
          type="email"
          className="p-[5px] px-5 py-2 outline-none border-none my-1 rounded-full shadow focus:shadow-xl"
          placeholder="Email..."
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
        <input
          type="password"
          className="p-[5px] px-5 py-2 outline-none border-none my-1 rounded-full shadow focus:shadow-xl"
          placeholder="Password..."
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />

        <button onClick={login}  className="p-[5px] px-3 py-2 bg-white w-[50%] rounded-full shadow-md my-2 active:transition-none active:shadow-lg"> Login</button>
      </div>

      <div className="flex flex-col p-1 px-2 items-center justify-center">
          <span>{user?.email}</span>

      <button onClick={logout} className="p-[5px] px-4 py-2 bg-white  h-[40px] rounded-full shadow-md my-2 active:transition-none active:shadow-lg"> Sign Out </button>
      </div>
    </div>
  );
}

export default App;