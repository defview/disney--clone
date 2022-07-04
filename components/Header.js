import Image from 'next/image'
import React from 'react'
import { HomeIcon, PlusIcon, SearchIcon, StarIcon } from '@heroicons/react/solid'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router';

function Header() {
    const { data: session } = useSession();
    const router = useRouter();


  return (
    <header className='sticky bg-[#040714] top-0 z-[1000] flex h-[72px] items-center
    px-10 md:px-12 '>
        <Image 
        src='/images/logo.svg' 
        width={80} 
        height={80} 
        className='cursor-ponter'
        onClick={() => router.push('/')}
        />
        {session && (
            <div className='ml-10 md:flex hidden items-center space-x-6'>
            <a className='header-link group'>
                <HomeIcon className='h-4' />
                <span className='span'>Home</span>
            </a>
            <a className='header-link group'>
                <SearchIcon className='h-4' />
                <span className='span'>Search</span>
            </a>
            <a className='header-link group'>
                <PlusIcon className='h-4' />
                <span className='span'>WatchList</span>
            </a>
            <a className='header-link group'>
                <StarIcon className='h-4' />
                <span className='span'>Originals</span>
            </a>
            <a className='header-link group'>
                <img src='/images/movie-icon.svg'
                alt=''
                className='h-4' />
                <span className='span'>Movies</span>
            </a>
            <a className='header-link group'>
                <img src='/images/series-icon.svg'
                alt='' 
                className='h-4' />
                <span className='span'>Series</span>
            </a>
        </div>
        )}
        {!session ? (
            <button className='ml-auto uppercase border px-4 py-1.5 rounded-lg 
            font-medium tracking-wide hover:bg-white hover:text-sky-500
            transition duration-700 ease-in-out border-transparent shadow-md 
            shadow-sky-500' onClick={signIn}>Login
            </button>
        ) : (
            <img src={session.user.image} 
            alt=''
            className='ml-auto h-12 w-12 rounded-full object-cover transition 
            duration-700 ease-in-out border-transparent shadow-md shadow-sky-500
            cursor-pointer' onClick={signOut}/>
        )}     
    </header>
  )
}

export default Header;