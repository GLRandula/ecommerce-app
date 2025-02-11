import React from 'react'
import Container from './Container'
import Logo from './Logo'
import SearchInput from './SearchInput'
import { navBarList } from '@/constants'
import Link from 'next/link'
import { IoMenu } from "react-icons/io5";

const Header = () => {
  return (
    <header className='w-full h-20 bg-accentWhite border-b-[1px] border-b-lightText/50 sticky z-50 top-0 left-0'>
      <Container className='h-full flex items-center justify-between gap-5 lg:gap-10'>
        <Logo />
        <SearchInput />
        <div className='hidden md:inline-flex items-center gap-6'>
          {navBarList?.map((item) => (
            <Link key={item?.title} href={item?.link} 
            className='navBarItem'>
              {item?.title}
            </Link> 
          ))}
          <Link href={"/orders"} className='navBarItem'>
            Orders
          </Link>
          <Link href={"/studio"} className='navBarItem'>
            Studio
          </Link>
          <Link href={"/signin"} className='navBarItem'>
            Sign in
          </Link>
        </div>
        <IoMenu className='inline-flex md:hidden cursor-pointer text-2xl hoverEffect hover:text-darkOrange'/>
      </Container>
    </header>
  )
}

export default Header
