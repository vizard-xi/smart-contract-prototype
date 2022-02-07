import React, { Component } from 'react';

class TransactionForm extends Component {
    constructor(props) {
        super(props);
        this.state = {ethereumAddress: '', amount: ''};

        this.onChange = this.handleChange.bind(this);
        this.onSumbit = this.handleOnSumbit.bind(this);
    }

    handleChange(event) {
        event.target.name === this.state.ethereumAddress ? this.setState({ethereumAddress: event.target.value}) : this.setState({amount: event.target.value});
    };

    handleOnSumbit(event) {
        return null;
    };
    

    render() {
        return (
            <div className='space-x-4 grid justify-items-center'>
                <div className='mt-36 w-80 p-10 border-solid border-2 border-black rounded-md bg-blue-200'>
                <form onSubmit={this.onSumbit}>
                    <div class="grid grid-cols-1 gap-6">
                        <label class="block">
                            <span class="text-gray-700">Ethereum Address</span>
                            <input type="text" class="
                                mt-1
                                block
                                w-full
                                rounded-md
                                bg-gray-100
                                focus:border-gray-500 focus:bg-white focus:ring-0" 
                                placeholder='Enter Ethereum Address'
                                name="ethereumAddress" 
                                value={this.state.ethereumAddress}
                                onChange={this.onChange}/>
                        </label>
                        <label class="block">
                            <span class="text-gray-700">Amount</span>
                            <input type="email" class="
                                mt-1
                                block
                                w-full
                                rounded-md
                                bg-gray-100
                                focus:border-gray-500 focus:bg-white focus:ring-0" 
                                placeholder='Enter ETH Amount' 
                                name='amount'
                                value={this.state.amount}
                                onChange={this.onChange}/>
                        </label>
                        <button type="submit" className='justify-self-center border-solid border-2 
                        border-black w-28 rounded-md bg-gray-100 font-sans text-lg font-semibold 
                        hover:bg-black hover:text-gray-100'
                        >Send ETH</button>
                    </div>
                </form>
            </div>
            </div>
        );
    }
}

export default TransactionForm;
