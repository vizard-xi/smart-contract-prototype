import React, { Component } from 'react';
import TransactionDetails from './transaction history components/Transaction Details';
import TransactionHeader from './transaction history components/Transaction Header';

class TransactionHistory extends Component {
    render() {
        return (
            <div className='grid grid-cols-5 gap-4 place-content-stretch justify-items-center m-10'>
                <div class="box-border border rounded-md border-black h-64 w-64 p-4 overflow-hidden bg-blue-200 flex flex-col text-center space-y-4">
                    <TransactionHeader />
                    <TransactionDetails />
                </div>
            </div>
        );
    }
}

export default TransactionHistory;
