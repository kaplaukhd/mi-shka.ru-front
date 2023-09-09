import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [
                {
                    id: 'all',
                    name: 'Все'
                },
                {
                    id: 'phones',
                    name: 'Телефоны'
                },
                {
                    id: 'vacuum',
                    name: 'Пылесосы'
                },
                {
                    id: 'watch',
                    name: 'Часы'
                },
            ]
        }
    }
  render() {
    return (
      <div>Categories</div>
    )
  }
}

export default Categories