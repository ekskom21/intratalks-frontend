import classNames from 'classnames';
import React from 'react';

const Page: React.FC = (props) => <main className={classNames('p-4', 'container', 'mx-auto')}>{props.children}</main>;

export default Page;
