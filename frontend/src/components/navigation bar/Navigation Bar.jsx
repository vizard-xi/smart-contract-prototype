import React, { Component } from 'react';
import LogoAndWebsiteName from './navigation bar components/Logo and Website Name';
import NavigationBarMenu from './navigation bar components/Navigation Bar Menu';

class NavigationBar extends Component {
    
    render() {

        return (
            <nav className='flex space-x-4 items-stretch overflow-hidden h-16 justify-start bg-blue-200 border-2 border-b-black pt-0 mt-0'>
                <LogoAndWebsiteName />
                <NavigationBarMenu />       
            </nav>
        );
    }
}

export default NavigationBar;
