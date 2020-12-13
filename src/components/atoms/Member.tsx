import React from 'react';

type Props = {
    id: number;
    name: string;
    role: string;
    image: string;
};

const Member: React.FC<Props> = (props) => {
    return (
        <div className="p-4 flex space-x-4">
            <img
                src={props.image}
                alt=""
                className="flex-none w-18 h-18 rounded-lg object-cover bg-gray-100"
                width="144"
                height="144"
            ></img>
            <div className="min-w-0 relative flex-auto sm:pr-20 lg:pr-0 xl:pr-20">
                <h2 className="font-size: 23px; line-height: 27px;">{props.name}</h2>
                <p className="text-xs">Rolle: {props.role}</p>
            </div>
        </div>
    );
};
export default Member;
