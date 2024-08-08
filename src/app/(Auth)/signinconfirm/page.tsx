"use client";
import { auth } from "@/lib/firebaseConfig";
import { isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function SigninConfirm() {
  const router = useRouter();

  useEffect(() => {
    if (isSignInWithEmailLink(auth, window.location.href)) {
      let email = window.localStorage.getItem("emailForSignin");
      console.log(email);
      signInWithEmailLink(auth, email ?? "", window.location.href)
        .then((result) => {
          window.localStorage.removeItem("emailForSignin");
          window.localStorage.setItem("user", JSON.stringify(result.user));

          // Redirect to the home page
          router.push("/");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [router]);

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Sign in to your account
          </h2>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm text-center text-white">
            Checking code...
          </div>
        </div>
      </div>
    </>
  );
}
