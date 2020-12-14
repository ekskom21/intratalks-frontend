import React from 'react';
import Member from '../atoms/Member';

const Members: React.FC = () => {
    const allMembers: { id: number; name: string; role: string; image: string }[] = [
        {
            id: 0,
            name: 'Fredrik A',
            role: 'Leder',
            image: 'https://image.flaticon.com/icons/png/512/168/168726.png',
        },
        {
            id: 1,
            name: 'Jon',
            role: 'Nest-Leder',
            image: 'https://image.flaticon.com/icons/png/512/168/168726.png',
        },
        {
            id: 2,
            name: 'Jonathan',
            role: 'Økans',
            image: 'https://image.flaticon.com/icons/png/512/168/168726.png',
        },
        {
            id: 3,
            name: 'Vidar',
            role: 'TT',
            image: 'https://image.flaticon.com/icons/png/512/168/168726.png',
        },
        {
            id: 4,
            name: 'Andreas',
            role: 'Nisse1',
            image: 'https://image.flaticon.com/icons/png/512/168/168726.png',
        },
        {
            id: 5,
            name: 'Karl Petter',
            role: 'Nisse2',
            image: 'https://image.flaticon.com/icons/png/512/168/168726.png',
        },
        {
            id: 6,
            name: 'Fredrik B',
            role: 'Nisse3',
            image: 'https://image.flaticon.com/icons/png/512/168/168726.png',
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
