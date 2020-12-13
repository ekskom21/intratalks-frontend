import React from 'react';
import { Link } from 'react-router-dom';

type Props = { company: { id: number; name: string; shortDescription: string; gradient: string } };

const Company: React.FC<Props> = (props) => {
    const numPresentations = Math.floor(Math.random() * 4);

    return (
        <Link to="#">
            <article className="my-4 rounded-lg">
                <h1 className="text-3xl font-bold mb-0">
                    {props.company.name}{' '}
                    <span
                        className={`bg-gradient-to-r ${props.company.gradient} rounded-lg mb-2 inline-block bg-clip-text text-transparent font-extrabold`}
                    >
                        →
                    </span>
                </h1>
                <div className={`bg-gradient-to-r ${props.company.gradient} h-2 rounded-full my-1`}></div>
                <small className="dark:text-gray-300 text-sm mb-3">
                    {numPresentations > 0
                        ? numPresentations + ' kommende arrangementer'
                        : 'Ingen kommende arrangementer'}
                </small>
                <p>{props.company.shortDescription}</p>
            </article>
        </Link>
    );
};

export default Company;
