import React, { Component } from 'react';

export default class CategoryItemList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryItems: []
        }
    }

    componentDidMount() {
        this.fetchListItems();
    }

    componentDidUpdate(prevProps) {
        if(this.props.category && prevProps.category){ // Check if present
            if(this.props.category.short_name !== prevProps.category.short_name) {
                this.fetchListItems();
            }
       }
    }

    fetchListItems() {
        fetch('https://stream-restaurant-menu-svc.herokuapp.com/item?category=' + this.props.category.short_name)
            .then(res => res.json())
            .then(items => {
                this.setState({
                    categoryItems: items 
                })
            })

    }

    renderRow(item){ 
        return (<tr id={item.id}>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                </tr>)
    }

    render() {

        const rows = this.state.categoryItems.map(item => this.renderRow(item));

        return(
            <div>
                <h4>Items in Category: ({this.props.category.short_name})</h4>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        );

    }
}