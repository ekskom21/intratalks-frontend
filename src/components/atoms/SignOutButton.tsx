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
            className={classNames('mt-4', 'bg-red-700', 'text-white', 'p-2', 'rounded-md', 'font-bold')}
        >
            Logg ut
        </button>
    );
};

export default SignOutButton;
