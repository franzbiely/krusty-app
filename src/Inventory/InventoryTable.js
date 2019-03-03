import React, { Component } from 'react';

class InventoryTable extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){

    }

    handleRemoveItem = (e, key) => {
        e.preventDefault();
        
        this.props.clear(key);
    }

    render(){
        const { products, clear } = this.props;

        return(
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Object.keys(products).map(key => (
                            <tr key={key}>
                                <td>{products[key].name}</td>
                                <td>{products[key].quantity}</td>
                                <td><button onClick={event => this.handleRemoveItem(event, key)}>Clear</button></td>
                                <td><button>Edit</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        );
    }
}

export default InventoryTable;