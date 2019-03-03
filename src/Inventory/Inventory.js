import React, { Component } from 'react';
import InventoryTable from './InventoryTable';

import { products } from './Products';

class Inventory extends Component{
    constructor(props){
        super(props);

        this.state = {
            products: [],
            name: "",
            quantity: 0
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.remove = this.remove.bind(this);
        this.save = this.save.bind(this);
    }

    componentDidMount(){
        this.setState({
            products
        }, () => {
            this.test();
        })
    }

    render(){
        const { products } = this.state;
        return(
            <div>
             <form onSubmit={this.save}>
                <input  type="text" placeholder="Enter Item" name="name" onChange={this.handleInputChange}/>
                <input  type="text" placeholder="Enter Quantity" name="quantity" onChange={this.handleInputChange}/>
                <button>Save</button>
             </form>
             
             <InventoryTable  products={products} clear={this.remove}/>
            </div>
        );
    }

    async test(){
        const test = await fetch('http://localhost:5000/test/');
        const data = await test.json();
        console.log(data);
    }

    handleInputChange(e){
        e.preventDefault();
        const { name, value } = e.target;

        this.setState({ [name]: value });
    }

    saveUpdate(e){
        e.preventDefault();
    }

    async save(e){
        e.preventDefault();
        const { name, quantity, products } = this.state;

        const newItem = {
            name: name,
            quantity: quantity 
        }

        let flag = false;

        Object.keys(products).map(i => {
            if(products[i].name.toLowerCase() === name.toLowerCase()){
                products[i].quantity = quantity;
                flag = !flag;
            }
        });
        
        if(!flag){
            this.setState(prevState => ({
                products: [...prevState.products,  newItem]
            }))
        }else{
            this.setState(prevState => ({
                products: [...prevState.products]
            }))
        }

        const test = await fetch('http://localhost:5000/newItem/', {
            method: 'post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body:JSON.stringify(newItem)
        });
        const data = await test.json();
    }

    edit(e){
        return(
            <div>
             <form onSubmit={this.saveUpdate}>
                <input  type="text" placeholder="Enter Item" name="name" onChange={this.handleInputChange}/>
                <input  type="text" placeholder="Enter Quantity" name="quantity" onChange={this.handleInputChange}/>
                <button>Update</button>
             </form>
            </div>
        );
    }

    remove(e){
        const { products } = this.state;
        products.splice(e, 1);
        
        this.setState({ products }, () => {
            console.log(products);
        })
    }
}

export default Inventory;