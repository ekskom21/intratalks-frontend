import React from 'react';

import SignOutButton from '../atoms/SignOutButton';
import RegistrationBanner from '../molecules/RegistrationBanner';
import DesiredEvents from '../molecules/DesiredEvents';
import { cancellationDeadlinePassed } from '../../utils/timeTranslator';

const Profile: React.FC = () => {
    return (
        <>
            <RegistrationBanner />
            {cancellationDeadlinePassed ? null : <DesiredEvents />}
            <SignOutButton />
        </>
    );
};
export default Profile;
