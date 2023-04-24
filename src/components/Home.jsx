import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';


const Home = () => {
    const {user} = useContext(AuthContext);
    console.log(user);
    return (
        <div>
            <h2>This is HOme</h2>
            {
                user && <span>{user.email}</span>
            }
        </div>
    );
};

export default Home;