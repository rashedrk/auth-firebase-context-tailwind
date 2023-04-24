import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);
    const handleSignOut = () => {
        logOut()
        .then(() => {})
        .catch(err => console.log(err))
    }
    return (
            <div className="navbar bg-primary text-primary-content">
                <a className="btn btn-ghost normal-case text-xl">Auth Master</a>
                <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/orders'>Orders</Link>
                {user && 
                    <Link className="btn btn-ghost normal-case text-xl" to='/profile'>Profile</Link>}
                <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
                {
                    user ?
                    <>
                    <span>{user.email}</span>
                    <button onClick={handleSignOut} className="btn btn-xs">sing out</button>
                    </>
                    : ''
                }
            </div>
    );
};

export default Header;