import classNames from 'classnames';
import React from 'react';
import Members from '../molecules/Members';

const About: React.FC = () => {
    return (
        <>
            <h2 className="title-2">Kontakt</h2>
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

            <h2 className={classNames('title-2', 'mt-4')}>Smittevern</h2>
            <p>All relevant informasjon angående smittevern</p>

            <h2 className={classNames('title-2', 'mt-4')}>Hva er Tech Talks?</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit voluptate corporis odio enim, est
                provident neque iusto, assumenda maiores iste id quo veritatis libero eos. Ut provident aliquid
                molestias maxime?
            </p>

            <h2 className={classNames('title-2', 'mt-4')}>Selskaper</h2>
            <p>Alle selskapene som har gjort årets Tech Talks mulig:</p>

            <h2 className={classNames('title-2', 'mt-4')}>Medlemmer</h2>
            <Members />
        </>
    );
};
export default About;
