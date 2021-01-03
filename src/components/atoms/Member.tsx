import React from 'react';

type Props = {
    id: number;
    name: string;
    role: string;
    image: string;
};

const Member: React.FC<Props> = (props) => {
    return (
        <div className="flex items-center my-2 space-x-4">
            <img
                src={props.image}
                alt="member-image"
                className="flex items-center justify-center w-12 h-12 rounded-full"
            ></img>
            <div className="flex-auto">
                <h2 className="text-lg">{props.name}</h2>
                <p className="text-sm">Rolle: {props.role}</p>
            </div>
        </div>
    );
};
export default Member;
