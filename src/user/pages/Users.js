import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
    const USERS = [
        {
            id: 'u1',
            name: 'Sharjeel',
            image: 'https://www.dictionary.com/e/wp-content/uploads/2010/08/55_Mosque-790x310.jpg',
            places: 3
        }];

    return <UsersList items={USERS} />;
};

export default Users;