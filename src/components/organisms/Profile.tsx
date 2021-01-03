import React from 'react';

import SignOutButton from '../atoms/SignOutButton';
import RegistrationBanner from '../molecules/RegistrationBanner';
import DesiredEvents from '../molecules/DesiredEvents';
import { cancelationDeadlinePassed } from '../../utils/timeTranslator';

const Profile: React.FC = () => {
    return (
        <>
            <RegistrationBanner />
            {cancelationDeadlinePassed ? null : <DesiredEvents />}
            <SignOutButton />
        </>
    );
};
export default Profile;
