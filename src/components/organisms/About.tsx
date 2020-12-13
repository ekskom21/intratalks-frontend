import React from 'react';
/**
 * Skal inneholde:
 * "Hva er TT" seksjon
 * Liste over medlemmer
 * Hvilke selskaper eksponerte dette
 */
const About: React.FC = () => {
    return (
        <div>
            <h2 className="h-2">Hva er Tech Talks?</h2>
            <p className="p-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit voluptate corporis odio enim, est
                provident neque iusto, assumenda maiores iste id quo veritatis libero eos. Ut provident aliquid
                molestias maxime?
            </p>
            <h2 className="h-2">Medlemmer</h2>
            <p className="p-5">Fredrik, Jonathan</p>
        </div>
    );
};
export default About;
