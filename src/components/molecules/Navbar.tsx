import React, { useState } from 'react';

const Navbar: React.FC = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <div>
            <nav className="z-10 w-full sticky flex justify-between bg-black text-white p-4">
                <span className="flex-grow-0">Tech Talks</span>
                <button className="flex-grow-0"></button>
                <div className="ml-3 relative">
                    <div>
                        <button
                            className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
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
                className={`${
                    showDropdown ? 'transform ' : ''
                }duration-200 translate-y-64 w-full fixed rounded-md bg-white ring-1 ring-black ring-opacity-5 -mt-64`}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu"
            >
                <a
                    href="#"
                    className="block border-2 px-8 py-2 text-3xl text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                >
                    Logg Inn
                </a>
                <a
                    href="#"
                    className="block border-2 px-8 py-2 text-3xl text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                >
                    Forside
                </a>
                <a
                    href="#"
                    className="block border-2 px-8 py-2 text-3xl text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                >
                    Bedrifter
                </a>
                <a
                    href="#"
                    className="block border-2 px-8 py-2 text-3xl text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                >
                    Om Tech Talks
                </a>
            </div>
        </div>
    );
};

export default Navbar;
