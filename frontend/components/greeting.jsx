import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
    if (props.currentUser) {
        return (
            <div>
                <p>hello {props.currentUser.username}</p>
                <button onClick={props.logout}>log out</button>
            </div>
        )
    } else {
        return (
            <div>
                <Link to='/signup'>sign up</Link>
                <Link to='/login'>log in</Link>
            </div>
        )
    }
}
