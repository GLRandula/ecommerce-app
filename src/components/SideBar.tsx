import Link from "next/link";
import React from "react";
import { MdSwitchAccount } from "react-icons/md";
import SidebarCart from "./SidebarCart";
import { auth } from "@/auth";
import Image from "next/image";

const SideBar = async () => {
  const session = await auth();
  //console.log(session);

  return (
    <div className="fixed top-60 right-2 z-20 flex flex-col gap-2">
      {/* User Account */}
      <Link
        href={ session?.user ? "/dashboard" : "/signin"}
        className="bg-accentWhite w-16 h-[70px] rounded-md flex flex-col gap-1 text-accent justify-center items-center shadow-sm shadow-lightGreen group overflow-hidden"
      >
        <div className="flex items-center justify-center">
          {session?.user ? (
            <Image
              src={session?.user?.image as string}
              alt="user image"
              width={32}
              height={32}
              className="rounded-full -translate-x-12 group-hover:translate-x-4 transition-transform duration-200"
            />
          ) : (
            <MdSwitchAccount className="text-2xl -translate-x-3 group-hover:translate-x-12 transition-transform duration-200" />
          )}

          {session?.user ? (
            <Image
              src={session?.user?.image as string}
              alt="user image"
              width={32}
              height={32}
              className="rounded-full -translate-x-4 group-hover:translate-x-12 transition-transform duration-200"
            />
          ) : (
            <MdSwitchAccount className="text-2xl -translate-x-3 group-hover:translate-x-12 transition-transform duration-200" />
          )}
        </div>
        <p className="text-xs font-semibold">Profile</p>
      </Link>

      {/* Cart */}
      <SidebarCart />
    </div>
  );
};

export default SideBar;
