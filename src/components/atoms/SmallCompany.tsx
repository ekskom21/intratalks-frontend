import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
    id: string;
    name: string;
    image: string;
    primaryColor: string;
    secondaryColor: string;
};

const Company: React.FC<Props> = (props) => {
    return (
        <Link to={`/company/${props.id}`}>
            <div className={classNames('flex flex-col justify-items-center gap-2')}>
                <div
                    className={classNames(
                        `rounded-full p-1 bg-gradient-to-tr from-${props.primaryColor} to-${props.secondaryColor}`,
                    )}
                >
                    <div className={classNames('relative rounded-full p-1 bg-white')}>
                        <img
                            src={props.image}
                            className={classNames('rounded-full h-24 w-24')}
                            style={{ width: 64, maxWidth: 64, height: 64, maxHeight: 64 }}
                        />
                    </div>
                </div>
                <h3 className={classNames('text-center')}>{props.name}</h3>
            </div>
        </Link>
    );
};

export default Company;
