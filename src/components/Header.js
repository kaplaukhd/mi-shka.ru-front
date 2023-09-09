import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { SiXiaomi } from "react-icons/si";
import Order from './Order';

const showOrders = (props) => {
    let summ = 0;
    props.orders.forEach(el => {
        summ += Number.parseFloat(el.price);
    });
    return (<div>
        {props.orders.map(el => (
            <Order key={el.id} item={el} onDelete={props.onDelete} />
        ))}
        <p className='summ'>Итого: {new Intl.NumberFormat().format(summ)}₽</p>
    </div>)
}

const showNothing = () => {
    return (<div className='empty'>
            <h2>В корзине пусто =(</h2>
    </div>)
}

const reloadPage = () => {
    window.location.href = 'http://localhost:3000/';
}

export default function Header(props) {


    let [cartOpen, setCartOpen] = useState(false);


    return (
        <header>
            <div>
                <span className='logo'>
                    MI-SHKA.RU
                </span>
                <ul className='nav'>
                    <li>О нас</li>
                    <li>Контакты</li>
                    <li>Кабинет</li>
                </ul>
                <SiXiaomi className='logotype' onClick={() => reloadPage()}/>

                <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && ' active'}`} />
                {cartOpen && (
                    <div className='shop-cart'>
                        {props.orders.length > 0 ? showOrders(props) : showNothing()}
                    </div>
                )}
            </div>
            <div className='presentation'>
            </div>
        </header>
    )
}
