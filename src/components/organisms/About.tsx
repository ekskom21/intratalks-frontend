import classNames from 'classnames';
import React from 'react';
import Members from '../molecules/Members';
import CompaniesList from '../molecules/CompaniesList';

const About: React.FC = () => {
    return (
        <>
            <h1 className={classNames('text-3xl', 'font-bold', 'mb-2')}>Kontakt</h1>
            <div>
                <strong>Mail</strong>:{' '}
                <a href="mailto:ekskom@online.ntnu.no" className="text-blue-600 no-underline hover:underline">
                    ekskom@online.ntnu.no
                </a>
            </div>
            <div>
                <strong>Telefon</strong>
                <span>
                    :{' '}
                    <a className="text-blue-600" href="tel:+4792848870">
                        +47 928 48 870 (Fredrik)
                    </a>
                    ,{' '}
                    <a className="text-blue-600" href="tel:+4748284328">
                        +47 482 84 328 (Vidar)
                    </a>
                </span>
            </div>

            <div>
                <strong>Instagram</strong>:{' '}
                <a className="text-blue-600" href="https://instagram.com/ekskomonline">
                    @ekskomonline
                </a>
            </div>

            <h1 className={classNames('text-3xl', 'font-bold', 'mt-4', 'mb-2')}>Smittevern</h1>
            <p>All relevant informasjon angående smittevern</p>

            <h1 className={classNames('text-3xl', 'font-bold', 'mt-4', 'mb-2')}>Hva er Tech Talks?</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit voluptate corporis odio enim, est
                provident neque iusto, assumenda maiores iste id quo veritatis libero eos. Ut provident aliquid
                molestias maxime?
            </p>

            <h1 className={classNames('text-3xl', 'font-bold', 'mt-4', 'mb-2')}>Selskaper</h1>
            <p>Alle selskapene som har gjort årets Tech Talks mulig:</p>
            <CompaniesList />

            <h1 className={classNames('text-3xl', 'font-bold', 'mt-4')}>Medlemmer</h1>
            <Members />
        </>
    );
};
export default About;
