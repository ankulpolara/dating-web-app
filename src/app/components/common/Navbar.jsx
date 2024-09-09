"use client"

import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='bg-blue-900  text-white py-3 text-center fixed top-0  w-screen flex gap-4   justify-around'>
            <p>       this is navbar</p>
            <div className='gap-3 flex'>
                <Link href={"/register"}>
                    Register
                </Link>
                <Link href={"/login"}>
                    Login
                </Link>
            </div>

        </div>
    )
}

export default Navbar
