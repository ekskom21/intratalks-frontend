import React from 'react';
import { useParams } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { SpecificCompany, COMPANY } from '../../api/queries/companies';

import classNames from 'classnames';

const Foo: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    const { data, loading, error } = useQuery<SpecificCompany>(COMPANY, {
        variables: {
            _id: id,
        },
    });

    if (error) return <p>Could not load data. {error.message}</p>;

    if (loading) return <p>Loading...</p>;

    if (!data || !data.company) return <p>Could not find company {id}</p>;

    const company = data.company;

    return (
        <>
            <img
                className={classNames('max-h-48 w-full mx-auto')}
                style={{ objectFit: 'cover' }}
                src="https://cdn-images-1.medium.com/max/1200/1*-najyPWH90Km31SztjhtBA.jpeg"
            />
            <div className={classNames('p-4')}>
                <h1 className={classNames('text-3xl', 'font-light', 'py-2')}>{company.name}</h1>
                <p>{company.description}</p>
                <h2 className={classNames('text-xl', 'font-bold', 'py-4')}>Arrangementer</h2>

                {company.events ? (
                    company.events.map((ev) => <p key={ev?._id}>{ev && ev._id}</p>)
                ) : (
                    <p className={classNames('dark:text-gray-400 text-gray-600 italic')}>
                        Denne bedriften har ingen arrangementer...
                    </p>
                )}
            </div>
        </>
    );
};

export default Foo;
