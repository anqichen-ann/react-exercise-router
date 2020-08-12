import React from 'react';
import {Link} from 'react-router-dom';
import './About.css';


class About extends React.Component {
    render() {
        return <div className='about'>
                <div className='line1'>
                <p>Company: ThoughtWorks Local</p>
                <p>Location: Xi'an</p>
                </div>
                <div className='line2'>
                <p>For more information, please view our  
                    <Link to='/'> website</Link>
                </p>
                </div>
            </div>
    }
}

export default About;