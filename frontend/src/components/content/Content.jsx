import React, { Component } from 'react';
import TransactionForm from './transaction form/Transaction Form';
import TransactionHistory from './transaction history/Transaction History';

class Content extends Component {
    render() {
        return (
            <>
                <TransactionForm />
                <TransactionHistory />
            </>
        );
    }
}

export default Content;
