import React from 'react';
import { useQuery } from '@apollo/client';
import { AllCompanies, ALL_COMPANIES } from '../../api/queries/companies';
import SmallCompany from '../atoms/SmallCompany';
import classNames from 'classnames';

const Carousel: React.FC = () => {
    const { data } = useQuery<AllCompanies>(ALL_COMPANIES);

    if (!data) return <></>;

    // const companies = data.companies;

    // This is temporary until we get more companies in DB
    const tmpId = data.companies[0]._id;
    const companies = [
        {
            name: 'Bekk',
            image: 'https://cdn-images-1.medium.com/max/1200/1*-najyPWH90Km31SztjhtBA.jpeg',
            primaryColor: 'gray-300',
            secondaryColor: 'purple-600',
        },
        {
            name: 'Knowit',
            image:
                'https://www.knowit.no/globalassets/system/icons-and-logotypes/knowit-logotypes/ogimage.png/Medium50',
            primaryColor: 'yellow-400',
            secondaryColor: 'green-600',
        },
        {
            name: 'Capgemini',
            image:
                'https://www.capgemini.com/us-en/wp-content/uploads/sites/4/2018/08/cropped-cropped-capgemini_logo_color_rgb.png',
            primaryColor: 'purple-400',
            secondaryColor: 'blue-600',
        },
        {
            name: 'Itera',
            image: 'https://www.itera.no/Static/Images/logo-new.png',
            primaryColor: 'purple-600',
            secondaryColor: 'red-400',
        },
        {
            name: 'Sopra Steria',
            image:
                'https://c0.klipartz.com/pngpicture/397/511/gratis-png-sopra-steria-naranja-s-a-director-ejecutivo-de-credito-agricole-canal-sop.png',
            primaryColor: 'red-400',
            secondaryColor: 'yellow-600',
        },
        {
            name: 'Netcompany',
            image: 'https://online.ntnu.no/media/images/responsive/69aaadc0-2fc1-4276-80d4-66e510e030fb.png',
            primaryColor: 'blue-400',
            secondaryColor: 'gray-600',
        },
    ];

    return (
        <div className={classNames('overflow-auto flex gap-4')}>
            {companies.map((company) => (
                <SmallCompany key={company.name} id={tmpId} {...company} />
            ))}
        </div>
    );
};

export default Carousel;
