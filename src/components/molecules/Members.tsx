import React from 'react';
import Member from '../atoms/Member';

const Members: React.FC = () => {
    const allMembers: { id: number; name: string; role: string; image: string }[] = [
        {
            id: 0,
            name: 'Fredrik A',
            role: 'Leder',
            image: 'https://www.dagsavisen.no/image/policy:1.1588268:1568980737/image.jpg?f=16x9&w=980&$p$f$w=06ef47e',
        },
        {
            id: 1,
            name: 'Jon',
            role: 'Nest-Leder',
            image: 'https://www.dagsavisen.no/image/policy:1.1588268:1568980737/image.jpg?f=16x9&w=980&$p$f$w=06ef47e',
        },
        {
            id: 2,
            name: 'Jonathan',
            role: 'Økans',
            image: 'https://www.dagsavisen.no/image/policy:1.1588268:1568980737/image.jpg?f=16x9&w=980&$p$f$w=06ef47e',
        },
        {
            id: 3,
            name: 'Vidar',
            role: 'TT',
            image: 'https://www.dagsavisen.no/image/policy:1.1588268:1568980737/image.jpg?f=16x9&w=980&$p$f$w=06ef47e',
        },
        {
            id: 4,
            name: 'Andreas',
            role: 'Nisse1',
            image: 'https://www.dagsavisen.no/image/policy:1.1588268:1568980737/image.jpg?f=16x9&w=980&$p$f$w=06ef47e',
        },
        {
            id: 5,
            name: 'Karl Petter',
            role: 'Nisse2',
            image: 'https://www.dagsavisen.no/image/policy:1.1588268:1568980737/image.jpg?f=16x9&w=980&$p$f$w=06ef47e',
        },
        {
            id: 6,
            name: 'Fredrik B',
            role: 'Nisse3',
            image: 'https://www.dagsavisen.no/image/policy:1.1588268:1568980737/image.jpg?f=16x9&w=980&$p$f$w=06ef47e',
        },
    ];

    return (
        <div>
            {allMembers.map((member) => (
                <Member key={member.id} id={member.id} name={member.name} role={member.role} image={member.image} />
            ))}
        </div>
    );
};

export default Members;
