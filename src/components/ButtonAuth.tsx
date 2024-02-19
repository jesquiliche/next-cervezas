"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { FaUser } from "react-icons/fa";

export default  function  ButtonAuth() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }
  console.log(session);

  if (session) {
    return (
      <>
        
        <button
          onClick={async () => await signOut(
            {callbackUrl:"/"})}
          className="px-4"
        >
          <span className="">Log out - {session.user?.name}</span>
        </button>
      </>
    );
  }
  return (
    <>
    
      <button
        onClick={() => signIn()}
        className="px-4"
      >
        Log in
      </button>
    </>
  );
}
