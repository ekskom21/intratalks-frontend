import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className="w-full sticky flex justify-between bg-black text-white p-4">
            <div className="flex-grow-0">Tech Talks</div>
            <button className="flex-grow-0">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
        </nav>
    );
};

export default Navbar;
