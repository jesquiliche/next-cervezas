"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export default function ButtonAuth() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }
 

  if (session) {
    return (
      <>
        <button
          onClick={async () => await signOut({ callbackUrl: "/" })}
          className="px-1"
        >
          <span className="">Log out - {session.user?.name}</span>
        </button>
      </>
    );
  }
  return (
    <>
      <button onClick={() => signIn()} className="px-4">
        Log in
      </button>
    </>
  );
}
