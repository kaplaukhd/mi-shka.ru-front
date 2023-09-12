import React, { Component } from 'react'

export class Item extends Component {
    render() {
        return (
            <div className='item'>
                <img src={"./img/amazfitgts4.png"} onClick={() => this.props.onShowItem(this.props.item)} />
                <h2>{this.props.item.name}</h2>
                <h3>{this.props.item.brand}</h3>
                <b>{this.props.item.price}₽</b>
                <div className='add-to-cart' onClick={() => this.props.onAdd(this.props.item)}>+</div>
            </div>
        )
    }
}   

export default Item