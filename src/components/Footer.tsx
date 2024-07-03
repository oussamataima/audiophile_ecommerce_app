import React from 'react'
import Logo from './Logo'
import Link from 'next/link'

 export default function Footer () {
  return (
    <footer className='bg-[#101010]'>
        <div>
            <div className='mx-auto my-12'>
            <Logo/>
            </div>
            <ul className='flex flex-col justify-center gap-4 text-white'>
                <Link href={'/'}>Home</Link>
                <Link href={'/'}>Headphones</Link>
                <Link href={'/'}>Speakers</Link>
                <Link href={'/'}>Earphones</Link>
            </ul>
            <p>Copyright 2021. All Rights Reserved</p>
        </div>
    </footer>
  )
}
