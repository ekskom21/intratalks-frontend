import React from 'react';
import Members from '../molecules/Members';
import Companies from './Companies';

const About: React.FC = () => {
    return (
        <div className="pl-2 pb-5">
            <h2 className="text-4xl pt-2">Kontakt</h2>
            <div className="p-3 text-s">
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
            <h3 className="text-4xl">Smittevern</h3>
            <p className="p-2 text-s">All relevant informasjon angående smittevern</p>
            <h2 className="text-4xl">Hva er Tech Talks?</h2>
            <p className="p-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit voluptate corporis odio enim, est
                provident neque iusto, assumenda maiores iste id quo veritatis libero eos. Ut provident aliquid
                molestias maxime?
            </p>
            <h2 className="text-4xl">Selskaper</h2>
            <p className="p-2">Alle selskapene som har gjort årets Tech Talks mulig:</p>
            {/** Sikkert en bedre løsning å vise alle selskapene på */}
            <Companies />
            <h2 className="text-4xl">Medlemmer</h2>
            <Members />
        </div>
    );
};
export default About;
