import React from 'react';

import SignOutButton from '../atoms/SignOutButton';
import RegistrationBanner from '../molecules/RegistrationBanner';
import DesiredEvents from '../molecules/DesiredEvents';

const Profile: React.FC = () => {
    return (
        <>
            <RegistrationBanner />
            <DesiredEvents />
            <SignOutButton />
        </>
    );
};
export default Profile;
