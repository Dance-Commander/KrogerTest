import React, { Component } from 'react';

import CategoryItemList from './CategoryItemList'

class CategoriesList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            categories: [],
            selectedCategory: null
        }
    }

    componentDidMount() {
        this.fetchCategories();
    }

    fetchCategories() {
        fetch('https://stream-restaurant-menu-svc.herokuapp.com/category')
            .then(res => res.json())
            .then(categories => {
                this.setState({
                    categories: categories
                })
            });
    }

    handleCategoryClick = (category) => {
        this.setState({
            selectedCategory: category
        })
    }

    renderCategory(category) {
        return <li key={category.id} onClick={() => this.handleCategoryClick(category)}>{category.name} - ({category.short_name})</li>
    }

  render() {

    const listItems = this.state.categories.map(category => this.renderCategory(category));
   
    let categoryItemList = '';

    if(this.state.selectedCategory !== null) {
        categoryItemList = <CategoryItemList category={this.state.selectedCategory} />
    }

    return (
            <div className="row">
                <div className="col-12 col-lg-5">
                    <ul>
                        {listItems}
                    </ul>

                </div>
                <div className="col-12 col-lg-7">
                    {categoryItemList}
                </div>
            </div>
    );
  }
}

export default CategoriesList;
