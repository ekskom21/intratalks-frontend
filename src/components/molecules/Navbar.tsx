import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import classNames from 'classnames';
import { useSignedIn } from '../../contexts/signedIn';

const CLIENT_ID = process.env.REACT_APP_OW_CLIENT_ID as string | undefined;
const CALLBACK_URI = process.env.REACT_APP_CALLBACK_URI as string | undefined;
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion

// Set nonce. Used for signing in with OAuth.
let NONCE: string;
const stored_nonce = sessionStorage.getItem('nonce');
if (stored_nonce === null) {
    NONCE = String(Math.random() * 1e10);
    sessionStorage.setItem('nonce', NONCE);
} else {
    NONCE = stored_nonce;
}

type Props = {
    title: string;
};

const Navbar: React.FC<Props> = () => {
    const authData = useSignedIn();

    const menuItems: Array<{ title: string; to: string; requiresAuth?: boolean }> = [
        {
            title: !!authData ? 'Mine events' : 'Alle events',
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
            to: `https://online.ntnu.no/openid/authorize?client_id=${CLIENT_ID}&redirect_uri=${CALLBACK_URI}&response_type=code&scope=openid%20onlineweb4%20profile&state=${NONCE}`,
        },
        {
            title: 'Profil',
            to: '/profile',
            requiresAuth: true,
        },
    ];

    const [showDropdown, setShowDropdown] = useState(false);
    const history = useHistory();

    useEffect(() => {
        setShowDropdown(false);
    }, [history.location.pathname]);

    return (
        <div className={classNames('sticky', 'top-0', 'bg-white', 'dark:bg-black')}>
            <nav className="sticky z-10 flex justify-between w-full p-4">
                <Link to="/">
                    <span
                        className={classNames(
                            'flex-grow-0',
                            'font-extrabold',
                            'uppercase',
                            'dark:bg-gray-500',
                            'bg-gray-400',
                            'text-white',
                            'dark:text-black',
                            'px-1',
                        )}
                    >
                        Tech Talks
                    </span>
                </Link>
                <button className="flex-grow-0"></button>
                <div className="relative ml-3">
                    <div>
                        <button
                            className="flex text-sm bg-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
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
                    'border-t',
                    showDropdown && ['border-b', 'py-2'],
                    'border-black',
                    'dark:border-white',
                    'w-full',
                )}
                style={{ overflow: 'hidden' }}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu"
            >
                {menuItems.map((mi) => {
                    const inner = (
                        <div
                            className={classNames('flex', 'justify-between', 'px-4')}
                            onClick={() => setShowDropdown(false)}
                        >
                            <span className={classNames('block', 'text-lg', 'p-2', 'font-semibold')}>{mi.title}</span>
                            <span className={classNames('block', 'text-lg', 'p-2', 'font-extrabold')}>→</span>
                        </div>
                    );

                    if (mi.requiresAuth && !authData) {
                        return null;
                    }

                    if (mi.title == 'Logg inn') {
                        return !!authData ? null : (
                            <a href={mi.to} key={mi.to}>
                                {inner}
                            </a>
                        );
                    }

                    return (
                        <Link to={mi.to} key={mi.to}>
                            {inner}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default Navbar;
