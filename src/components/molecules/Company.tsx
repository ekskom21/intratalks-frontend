import React from 'react';
import { Link } from 'react-router-dom';

type Props = { company: { id: number; name: string; shortDescription: string; gradient: string } };

const Company: React.FC<Props> = (props) => {
    const numPresentations = Math.floor(Math.random() * 4);

    return (
        <Link to="#">
            <article className="p-4 m-2 rounded-xl dark:bg-black dark:text-white">
                <h1 className="text-3xl font-bold mb-0">{props.company.name}</h1>
                <div className={`bg-gradient-to-r ${props.company.gradient} h-2 rounded-full my-1`}></div>
                <small className="dark:text-gray-300 text-sm mb-3">
                    {numPresentations > 0
                        ? numPresentations + ' kommende arrangementer'
                        : 'Ingen kommende arrangementer'}
                </small>
                <p>{company.shortDescription}</p>
            </article>
        </Link>
    );
};

export default Company;
