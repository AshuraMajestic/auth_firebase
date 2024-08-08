"use client";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebaseConfig";
import firebaseLogo from "../../public/firebase.svg";
import Image from "next/image";
export default function Header() {
  const router = useRouter();
  const logout = async () => {
    await signOut(auth);
    window.localStorage.clear();
    router.push("/signin");
  };
  return (
    <>
      <div className="flex justify-between items-center mx-12 mt-4 mb-2">
        <div className="flex items-center">
          <Image src={firebaseLogo} alt="logo" className="h-12 w-12" />
          <span className="text-white text-2xl">Firebase</span>
        </div>
        <p
          onClick={logout}
          className="text-blue-500 text-xl font-bold cursor-pointer"
        >
          Sign Out
        </p>
      </div>
    </>
  );
}
