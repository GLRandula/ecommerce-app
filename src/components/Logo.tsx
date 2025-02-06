import Link from 'next/link'
import React from 'react'
import { twMerge } from 'tailwind-merge'

const Logo = ({className}: {className?: string}) => {
  return (
    <Link href={'/'}>
        <h2 className={twMerge("text-2xl text-black font-extrabold uppercase hover:text-darkOrange cursor-pointer hoverEffect relative group overflow-hidden", className)}>
        Shoppers
        <span className='absolute left-0 bottom-0 w-full h-[2px] bg-darkOrange -translate-x-[100%] group-hover:translate-x-0 hoverEffect'/>
        </h2>
    </Link>
  )
}

export default Logo
