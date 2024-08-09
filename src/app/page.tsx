"use client";
import Header from "@/components/Header";
import SlideShow from "@/components/SlideShow";
import { auth } from "@/lib/firebaseConfig";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Home() {
  const [user] = useAuthState(auth);
  const router = useRouter();

  if (!user) {
    router.push("/signin");
  }
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow p-6 mt-4 shadow-lg border-t">
          <SlideShow />
        </div>
      </div>
      {/* ) : ( */}
      {/* <></> */}
      {/* )} */}
    </>
  );
}
