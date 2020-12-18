import React from 'react';

type Props = {
    id: number;
    name: string;
    role: string;
    image: string;
};

const Member: React.FC<Props> = (props) => {
    return (
        <div className="my-2 flex items-center space-x-4">
            <img
                src={props.image}
                alt="member-image"
                className="rounded-full h-12 w-12 flex items-center justify-center"
            ></img>
            <div className="flex-auto">
                <h2 className="text-lg">{props.name}</h2>
                <p className="text-sm">Rolle: {props.role}</p>
            </div>
        </div>
    );
};
export default Member;
