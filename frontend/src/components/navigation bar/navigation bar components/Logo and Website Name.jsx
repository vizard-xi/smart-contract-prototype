import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class LogoAndWebsiteName extends Component {
    render() {
        return (
            <div className='space-x-4 flex flex-row basis-1/2'>
                    <div className='static pt-2 mb-2 ml-10'>
                        <FontAwesomeIcon icon={['fab', 'ethereum']} size='3x'/>
                    </div>
                    <div className='font-sans text-2xl font-bold inline-block mt-4'>
                        <h1>Smart Contract Prototype</h1>
                    </div>
                    
            </div>
        );
    }
}

export default LogoAndWebsiteName;
