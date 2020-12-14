import classNames from 'classnames';
import React from 'react';
import Members from '../molecules/Members';

const About: React.FC = () => {
    return (
        <div className="pl-2 pb-5">
            <h1 className={classNames('text-3xl', 'font-bold', 'mb-0')}>Kontakt</h1>
            <div className="my-4">
                <p>
                    <strong>Mail</strong>:{' '}
                    <a href="mailto:ekskom@online.ntnu.no" className="text-blue-600 no-underline hover:underline">
                        ekskom@online.ntnu.no
                    </a>
                </p>
                <p>
                    <strong>Telefon</strong>: XXXXXXXX (Fredrik), XXXXXXXX (Vidar)
                </p>
                <p>
                    <strong>Instagram</strong>: ?
                </p>
            </div>
            <h1 className={classNames('text-3xl', 'font-bold', 'mb-0')}>Smittevern</h1>
            <p className="p-2 text-s">All relevant informasjon angående smittevern</p>
            <h1 className={classNames('text-3xl', 'font-bold', 'mb-0')}>Hva er Tech Talks?</h1>
            <p className="p-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit voluptate corporis odio enim, est
                provident neque iusto, assumenda maiores iste id quo veritatis libero eos. Ut provident aliquid
                molestias maxime?
            </p>
            <h1 className={classNames('text-3xl', 'font-bold', 'mb-0')}>Selskaper</h1>
            <p className="p-2">Alle selskapene som har gjort årets Tech Talks mulig:</p>
            {/** List over alle selskapene */}
            <h1 className={classNames('text-3xl', 'font-bold', 'mb-0')}>Medlemmer</h1>
            <Members />
        </div>
    );
};
export default About;
