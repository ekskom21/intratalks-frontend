import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import classNames from 'classnames';

type Props = {
    title: string;
};

const menuItems: Array<{ title: string; to: string }> = [
    {
        title: 'Mine events',
        to: '/',
    },
    {
        title: 'Bedrifter',
        to: '/companies',
    },
    {
        title: 'Om Tech Talks',
        to: '/about',
    },
    {
        title: 'Logg inn',
        to: '/login',
    },
];

const Navbar: React.FC<Props> = ({ title }) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const history = useHistory();

    useEffect(() => {
        setShowDropdown(false);
    }, [history.location.pathname]);

    return (
        <>
            <nav className="z-10 w-full sticky flex justify-between p-4">
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
                className={classNames(
                    showDropdown ? 'max-h-full' : 'max-h-0',
                    showDropdown && 'py-2',
                    'border-t',
                    showDropdown && 'border-b',
                    'border-black',
                    'dark:border-white',
                    'w-full',
                    'ring-0',
                )}
                style={{ overflow: 'hidden' }}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu"
            >
                {menuItems.map((mi) => (
                    <Link to={mi.to} key={mi.to}>
                        <div className={classNames('flex', 'justify-between', 'px-4')}>
                            <span className={classNames('block', 'text-lg', 'p-2', 'font-semibold')}>{mi.title}</span>
                            <span className={classNames('block', 'text-lg', 'p-2', 'font-extrabold')}>→</span>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
};

export default Navbar;
