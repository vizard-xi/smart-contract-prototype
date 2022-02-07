import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class NavigationBarMenu extends Component {
    render() {
        const NavigationBarMenu = [
            {name: "Perform Transaction", href: '#'},
            {name: "Transaction History", href: '#'}
        ];

        function CreateMenuOptions(props) {
            return props.navigationBarMenu.map((menu) => 
                <div key={menu.name.toString()}  className='ml-60 mt-2 mb-2 p-3 rounded-lg font-bold text-base hover:bg-white justify-items-end'>
                    <a href={menu.href} className='m-3 p-3'>{menu.name}</a>
                </div>
            );
        };

        return (
            <div className='flex flex-row space-x-4 basis-1/2 ml-5'>
                    <CreateMenuOptions navigationBarMenu={NavigationBarMenu}/>

                    <div className='p-3 mt-1 overflow-hidden hover:rounded-full hover:border-2 hover:border-white'>
                        <FontAwesomeIcon icon={['fa', 'wallet']} size='2x' className='cursor-pointer'/>
                    </div>
                    
            </div>
        );
    }
}

export default NavigationBarMenu;
