// navbar.js
"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../lib/auth';

export default function Navbar() {
    const router = useRouter();
    const isLoggedIn = useAuth();

    const handleLogout = () => {
        localStorage.removeItem('user');
        window.dispatchEvent(new Event('logout'));
        router.push('/login');
    };

    const handleDashboardBtn = () => {
        router.push('/dashboard');
    };

    const handleLoginBtn = () => {
        router.push('/login');
    };

    return (
        <header className="px-4 shadow bg-gray-900 text-gray-200">
            <div className="relative mx-auto flex max-w-screen-lg flex-col py-4 sm:flex-row sm:items-center sm:justify-between">
                <Link className="flex items-center text-2xl font-black" href="/">
                    <span className="mr-2 text-3xl text-blue-600">
                        <img src="/Cloud-host.svg" alt="Logo" width={60} height={60} />
                    </span>
                    <span>Cloud Hosting</span>
                </Link>
                <input className="peer hidden" type="checkbox" id="navbar-open" />
                <label
                    className="absolute right-0 mt-1 cursor-pointer text-xl sm:hidden"
                    htmlFor="navbar-open"
                >
                    <span className="sr-only">Toggle Navigation</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="0.88em"
                        height="1em"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 448 512"
                    >
                        <path
                            fill="currentColor"
                            d="M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z"
                        />
                    </svg>
                </label>
                <nav
                    aria-label="Header Navigation"
                    className="peer-checked:block hidden pl-2 py-6 sm:block sm:py-0"
                >
                    <ul className="flex flex-col items-center gap-y-4 sm:flex-row sm:gap-x-8">
                        <li>
                            <Link href="/" className="text-gray-400 hover:text-blue-600">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="text-gray-400 hover:text-blue-600">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/hosting" className="text-gray-400 hover:text-blue-600">
                                Hosting
                            </Link>
                        </li>
                        <li>
                            <Link href="/support" className="text-gray-400 hover:text-blue-600">
                                Support
                            </Link>
                        </li>
                        <li className="mt-2 sm:mt-0">
                            {isLoggedIn ? (
                                <div className='grid grid-cols-2 grid-rows-1 px-4 items-center text-center gap-x-2'>
                                    <a
                                        onClick={handleDashboardBtn}
                                        className="cursor-pointer rounded-xl border-2 py-1 px-6 border-orange-600 font-medium text-orange-600 hover:bg-orange-600 hover:text-white"
                                    >
                                    Dashboard
                                    </a>
                                    
                                    <a
                                        onClick={handleLogout}
                                        className="cursor-pointer rounded-xl border-2 py-1 px-6 border-blue-600 font-medium text-blue-600 hover:bg-blue-600 hover:text-white"
                                    >
                                        Logout
                                    </a>
                                </div>
                            ) : (
                                <a
                                    onClick={handleLoginBtn}
                                    className="cursor-pointer rounded-xl border-2 border-blue-600 px-6 py-2 font-medium text-blue-600 hover:bg-blue-600 hover:text-white"
                                >
                                    Login
                                </a>
                            )}
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
