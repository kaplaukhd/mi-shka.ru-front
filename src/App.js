import React from "react";
import Footer from "./components/Footer";
import Header from './components/Header'
import './index.css';
import Items from "./components/Items";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: 'Xiaomi 12x 8/256',
          price: '49990',
          img: 'xiaomi12x.png'
        },
        {
          id: 2,
          title: 'Redmi 12c 4/128',
          price: '12990',
          img: 'redmi12c.png'
        },
        {
          id: 3,
          title: 'Poco F4 GT 12/256',
          price: '54990',
          img: 'pocof4gt.png'
        },
      ]
    }
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Items items={this.state.items} onAdd={this.addToOrder} />
        <Footer />
      </div>
    );
  }

  deleteOrder(id) {  
     this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach(el => {
      if (el.id === item.id)
        isInArray = true;
    })
    if (!isInArray)
      this.setState({ orders: [...this.state.orders, item] })
  }

}



export default App;
