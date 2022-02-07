import React, { Component } from 'react';

class TransactionDetails extends Component {
    render() {
        return (
            <>
                <div className='grid'>
                    <h1 className='font-mono text-lg font-bold'>To</h1>
                    <p class='proportional-nums'>0xED8...cb99</p>
                </div>
            
                <div className='grid'>
                    <h1 className='font-mono text-lg font-bold'>From</h1>
                    <p class='proportional-nums'>0xED8...cb99</p>
                </div>
                
                <div className='grid'>
                    <h1 className='font-mono text-lg font-bold'>Amount</h1>
                    <p class='proportional-nums'>4 ETH</p>
                </div>
            </>
        );
    }
}

export default TransactionDetails;
