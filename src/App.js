import Nav from './components/Nav'
import Home from './pages/Home'
import Books from './pages/Books'
import Cart from './pages/Cart'
import BookInfo from './pages/BookInfo'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import React, { useState } from 'react'
import { books } from './data'


function App() {
  const [cart, setCart] = useState([])

  function addToCart(book) {
    setCart([...cart, {...book, quantity: 1}])
  }

  function removeBook(item) {
    setCart(cart.filter(book => book.id !== item.id))
  }

  function changeQuantity(book, quantity) {
    setCart(
      cart.map((item) => 
        item.id === book.id
          ? {
            ...item,
            quantity: +quantity,
            }
          : item
      )
    )
  }

  function numberOfItems() {
    let counter = 0
    cart.forEach((item) => {
      counter += item.quantity
    })
    return counter
  }

  return (
    <Router>
      <div className="App">
        <Nav numberOfIems={numberOfItems()} />
        <Route path="/" exact component={Home} />
        <Route path="/books" exact render={() => <Books books={books} />} />
        <Route path="/books/:id" render={() => <BookInfo books={books} addToCart={addToCart} cart={cart}/>} />
        <Route path="/cart" render={() => <Cart books={books} cart={cart} changeQuantity={changeQuantity} removeBook={removeBook}/>} />
        <Footer />        
      </div>
    </Router>
  );
}

export default App;
