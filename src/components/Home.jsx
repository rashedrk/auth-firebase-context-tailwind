import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';


const Home = () => {
    const user = useContext(AuthContext)
    return (
        <div>
            <h2>This is HOme</h2>
            {
                user && <span>{user.displayName}</span>
            }
        </div>
    );
};

export default Home;