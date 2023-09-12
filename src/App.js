import React from "react";
import Footer from "./components/Footer";
import Header from './components/Header'
import './index.css';
import Items from "./components/Items";
import Categories from "./components/Categories";
import FullItem from "./components/FullItem";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [], 
      showFullItem: false,
      fullItem: {}
    }
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
    this.items = this.getItems.bind(this)
    this.state.currentItems = this.state.items
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories onChoose={this.chooseCategory} />
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />
        {this.state.showFullItem && <FullItem onShowItem={this.onShowItem} onAdd={this.addToOrder} item={this.state.fullItem} />}
        <Footer />
      </div>
    );
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter(el => el.id !== id) })
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

  chooseCategory(category) {
    if (category === 0) {
      this.setState({ currentItems: this.state.items })
      return;
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }


  componentDidMount() {
    this.getItems();
  }

  getItems = async () => {
    const response = await fetch('http://mi-shka.online:7054/v1/api/products');
    const data = await response.json();
    this.setState({ items: data.filter(el => el.status !== 'DISABLED') });
  }

  onShowItem(item) {
    this.setState({ fullItem: item })
    this.setState({ showFullItem: !this.state.showFullItem })
  }

}



export default App;
