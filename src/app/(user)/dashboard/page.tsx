import { auth, signOut } from "@/auth";
import Container from "@/components/Container";
import { redirect } from "next/navigation";
import Image from "next/image";
import React from "react";

const DashboardPage = async () => {
  const session = await auth();
  if (!session?.user) {
    redirect("/");
  }

  return (
    <Container className="py-10">
      <h2 className="text-2xl font-semibold">Welcome to Dashboard</h2>
      <div className="flex items-center gap-3 my-5">
        <Image
          src={session?.user?.image as string}
          alt={"user-image"}
          width={300}
          height={300}
          className="w-20 h-20 rounded-full"
        />
      </div>
      <div>
        <p className="text-base font-semibold">{session?.user?.name}</p>
        <p className="text-sm font-mediums">{session?.user?.email}</p>
      </div>
      <form action={async () => {
        "use server";
        await signOut();
        //redirect("/");
      }}>
        <button
          type="submit"
          className="border border-lightRed px-8 py-2 mt-10 text-sm font-semibold rounded-sm hover:bg-red-500 hover:text-white hoverEffect"
        >
          Sign Out
        </button>
      </form>
    </Container>
  );
};

export default DashboardPage;
