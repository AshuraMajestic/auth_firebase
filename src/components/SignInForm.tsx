"use client";
import Image from "next/image";
import page from "../../public/design.jpg";
import logo from "../../public/firebase.svg";
import google from "../../public/google.svg";
import mail from "../../public/gmail.svg";
import Link from "next/link";
import { auth } from "@/lib/firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  signInWithPopup,
  GoogleAuthProvider,
  sendSignInLinkToEmail,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function SignInForm() {
  const [showEmail, setShowEmail] = useState(false);
  const [user, setUser] = useAuthState(auth);
  const googleAuth = new GoogleAuthProvider();
  const router = useRouter();
  const [email, setEmail] = useState("");

  const loginWithGoogle = async () => {
    const result = await signInWithPopup(auth, googleAuth);
    if (!result) {
      console.log("Error");
    } else {
      router.push("/");
    }
  };
  const actionCodeSetting = {
    url: "http://localhost:3000/signinconfirm",
    handleCodeInApp: true,
  };
  const signInWithMail = async () => {
    sendSignInLinkToEmail(auth, email, actionCodeSetting)
      .then(() => {
        window.localStorage.setItem("emailForSignin", email);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 md:z-0 z-0 relative">
        <div className="relative flex items-end px-4 pb-10 pt-60 sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24">
          <div className="absolute inset-0 h-1/2">
            <Image
              src={page}
              className="md:h-screen  w-full rounded-md object-cover object-top"
              alt="background"
            />
          </div>
        </div>
        <div>
          <header className="flex flex-col items-center mt-4 md:z-0 z-10 relative">
            <Image src={logo} className="w-12 h-12 mb-2" alt="logo" />
            <p className="text-white">
              Journey to trillion miles start from here!
            </p>
          </header>
          <div className="w-full h-full flex justify-center items-center">
            <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
              <h5 className=" mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white text-center">
                Sign In
              </h5>
              <p className="text-sm font-normal text-gray-500 dark:text-gray-400 text-center">
                Choose a Sign In Method
              </p>
              <ul className="my-12 space-y-3">
                <li>
                  <button
                    onClick={loginWithGoogle}
                    className="flex justify-center items-center border border-gray-200  p-3 text-base font-bold text-gray-900 rounded-lg group hover:shadow  dark:text-white w-full"
                  >
                    <Image src={google} alt="google" className="h-4 w-4 me-4" />
                    <p className="whitespace-nowrap">Sign In With Google</p>
                  </button>
                </li>
                <li>
                  {showEmail ? (
                    <>
                      <input
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full mb-4 p-2 border rounded"
                      />
                      <button
                        onClick={signInWithMail}
                        className="flex justify-center items-center p-3 border border-gray-200 text-base font-bold text-gray-900 rounded-lg group hover:shadow dark:text-white w-full"
                      >
                        <Image src={mail} alt="mail" className="h-4 w-4 me-4" />
                        <p className="whitespace-nowrap">Sign In With Email</p>
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => setShowEmail(true)}
                      className="flex justify-center items-center p-3 border border-gray-200 text-base font-bold text-gray-900 rounded-lg group hover:shadow dark:text-white w-full"
                    >
                      <Image src={mail} alt="mail" className="h-4 w-4 me-4" />
                      <p className="whitespace-nowrap">Sign In With Email</p>
                    </button>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
