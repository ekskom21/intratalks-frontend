import React, { useState } from 'react';

type Props = {
    title: string;
};

const Navbar: React.FC<Props> = ({ title }) => {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <div>
            <nav className="z-10 w-full sticky flex justify-between dark:bg-white bg-black dark:text-black text-white p-4">
                <span className="flex-grow-0">Tech Talks</span>
                <span className="flex-grow-0">{title}</span>
                <button className="flex-grow-0"></button>
                <div className="ml-3 relative">
                    <div>
                        <button
                            className="bg-transparent flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                            id="user-menu"
                            aria-haspopup="true"
                            onClick={() => setShowDropdown((curr) => !curr)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
            <div
                className={`transition-height duration-500 ${
                    showDropdown ? 'h-56' : 'h-0'
                } w-full ring-1 ring-black ring-opacity-5`}
                style={{ overflow: 'hidden' }}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu"
            >
                <a
                    href="#"
                    className="block border-2 dark:border-gray-800 border-gray-100 px-8 py-2 text-3xl dark:bg-white bg-black dark:text-black text-white dark:hover:bg-gray-100 hover:bg-gray-800"
                    role="menuitem"
                >
                    Logg Inn
                </a>
                <a
                    href="#"
                    className="block border-2 dark:border-gray-800 border-gray-100 px-8 py-2 text-3xl dark:bg-white bg-black dark:text-black text-white dark:hover:bg-gray-100 hover:bg-gray-800"
                    role="menuitem"
                >
                    Forside
                </a>
                <a
                    href="#"
                    className="block border-2 dark:border-gray-800 border-gray-100 px-8 py-2 text-3xl dark:bg-white bg-black dark:text-black text-white dark:hover:bg-gray-100 hover:bg-gray-800"
                    role="menuitem"
                >
                    Bedrifter
                </a>
                <a
                    href="#"
                    className="block border-2 dark:border-gray-800 border-gray-100 px-8 py-2 text-3xl dark:bg-white bg-black dark:text-black text-white dark:hover:bg-gray-100 hover:bg-gray-800"
                    role="menuitem"
                >
                    Om Tech Talks
                </a>
            </div>
        </div>
    );
};

export default Navbar;