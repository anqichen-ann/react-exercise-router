import React from 'react';
import './Profile.css';

class Profile extends React.Component {
    render() {
        return <div className='profile'>
            <p>UserName:XXX</p>
            <p>Gender:Female</p>
            <p>Work:IT Industry</p>
            <p>Website:'/my-profile'</p>
        </div>
    }
}

export default Profile;