import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
import { AllCompanies } from '../../api/queries/companies';

type Props = { company: AllCompanies['companies'][number] };

const Company: React.FC<Props> = (props) => {
    const numPresentations = Math.floor(Math.random() * 4);

    return (
        <Link to={`/company/${props.company._id}`}>
            <article className={classNames('mb-4', 'rounded-lg')}>
                <h1 className={classNames('text-3xl', 'font-bold', 'mb-0')}>
                    {props.company.name}{' '}
                    <span
                        className={classNames(
                            'bg-gradient-to-r',
                            `from-${props.company.colors.primary}`,
                            `to-${props.company.colors.secondary}`,
                            'rounded-lg',
                            'mb-2',
                            'inline-block',
                            'bg-clip-text',
                            'text-transparent',
                            'font-extrabold',
                        )}
                    >
                        →
                    </span>
                </h1>
                <div
                    className={classNames(
                        'bg-gradient-to-r',
                        `from-${props.company.colors.primary}`,
                        `to-${props.company.colors.secondary}`,
                        'h-2',
                        'rounded-full',
                        'my-1',
                    )}
                ></div>
                <small className={classNames("dark:text-gray-300','text-sm','mb-3")}>
                    {numPresentations > 0
                        ? numPresentations + ' kommende arrangementer'
                        : 'Ingen kommende arrangementer'}
                </small>
            </article>
        </Link>
    );
};

export default Company;
