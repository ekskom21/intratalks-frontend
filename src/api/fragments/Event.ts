import { gql } from '@apollo/client';

export default {
    fragments: {
        allFields: gql`
            fragment allFields on Event {
                _id
                title
                time
                location {
                    lat
                    lng
                    name
                }
                description
                company {
                    _id
                    name
                    colors {
                        primary
                        secondary
                    }
                    description
                }
            }
        `,
    },
};
