import React from 'react';
import Members from '../molecules/Members';
/**
 * Skal inneholde:
 * "Hva er TT" seksjon
 * Liste over medlemmer
 * Hvilke selskaper eksponerte dette
 */
const About: React.FC = () => {
    return (
        <div>
            <h2 className="text-l">Kontakt</h2>
            <div className="p-3 text-s">
                <p className="">Mail: ekskom@online.ntnu.no</p>
                <p>Telefon: XXXXXXXX </p>
                <p>Instagram: </p>
            </div>
            <h2 className="text-l">Hva er Tech Talks?</h2>
            <p className="p-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit voluptate corporis odio enim, est
                provident neque iusto, assumenda maiores iste id quo veritatis libero eos. Ut provident aliquid
                molestias maxime?
            </p>
            <h2 className="text-l">Medlemmer</h2>
            <Members />
            <h2 className="text-l">Selskaper</h2>
            <ul className="text-s">
                <li>En</li>
                <li>Liste</li>
                <li>Over</li>
                <li>Alle</li>
                <li>Selskapene</li>
                <li>!</li>
            </ul>
        </div>
    );
};
export default About;
