import Container from "@/components/Container";
import Image from "next/image";
import React from "react";
import googleImage from "../../../assets/googleImage.png";
import { redirect } from "next/navigation";
import { auth, signIn } from "@/auth";

const SignInPage = async () => {

  const session = await auth();
  if (session?.user){
    redirect('/')
  }

  return (
    <Container className="py-20 flex flex-col items-center justify-center">
      <form
        action={async () => {
            "use server";
            await signIn("google", { redirectTo: "/" })
        }}
        className="flex items-center gap-1 border border-blue-500 font-semibold bg-blue-50 px-2 py-1.5 rounded-md hover:bg-blue-800 hover:text-white duration-300 ease-in-out"
      >
        <Image src={googleImage} alt="google-image" className="w-6" />
        <button type="submit" className="p-2">
          Signin with Google
        </button>
      </form>
    </Container>
  );
};

export default SignInPage;
