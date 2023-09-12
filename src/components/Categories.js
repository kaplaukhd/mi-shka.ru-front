import React, { Component } from 'react'


export class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: []
        }
        this.categories = this.getCategories.bind(this)
    }




    render() {
        return (
            <div className='categories'>
                {this.state.categories.map(el => (
                    <div key={el.id} onClick={() => this.props.onChoose(el.id)} >
                        {el.name}
                        <sup>{el.count}</sup>
                    </div>
                ))}
            </div>
        )
    }

    componentDidMount() {
        this.getCategories();
    }

    getCategories = async () => {
        const response = await fetch('http://mi-shka.online:7054/v1/api/categories');
        const data = await response.json();
        const newElement = {
            "id": 0,
            "name": "Все",
            "count": 58
        }
        const updatedCategories = [newElement, ...data];
        this.setState({ categories: updatedCategories });
    }


}

export default Categories