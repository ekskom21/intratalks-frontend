import classNames from 'classnames';
import React from 'react';

const SignOutButton: React.FC = () => {
    const signOut = () => {
        localStorage.clear();
        window.location.replace('/');
    };
    return (
        <button
            onClick={signOut}
            className={classNames(
                'py-2',
                'px-4',
                'bg-red-500',
                'text-white',
                'font-semibold',
                'rounded-lg',
                'shadow-md',
                'hover:bg-red-700',
                'focus:outline-none',
                'focus:ring-2',
                'focus:ring-green-400',
                'focus:ring-opacity-75',
                'mt-4',
            )}
        >
            Logg ut
        </button>
    );
};

export default SignOutButton;
