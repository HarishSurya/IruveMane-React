import React from 'react';
import data from './data';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import './App.css';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';

function App() {
  const openMenu = () => {
  document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  }
  return (
    <BrowserRouter>
    <div className="grid-container">
                <header class="header">
                    <div class="brand">
                        <button onClick={openMenu}>&#9776;</button>
                        <Link to="/">IruveMane</Link>
    
                    
                    </div>
                    <div className="search">
                        <input id="search-bar" name="search" type="text" placeholder="Type here to Search"/>
                        <input class ="search" id="search-button" name="search-submit" type="submit" value="Search"/>

                    </div>
                    <div className="header-links">
                        <a href="cart.html">Cart</a>
                        <a href="signin.html">Sign In</a>
                        
                    </div>
                </header>

                <aside className="sidebar">
                    <h3>Shop By Catergory</h3>
                    <button class="sidebar-close-button" onClick={closeMenu}>x</button>
                    <ul>
                        <li>
                            <a href="index.html">Groceries</a>

                        </li>
                        <li>
                            <a href="index.html">Fresh Veggies</a>
                        
                        </li>

                        <li>
                            <a href="index.html">Fruits</a>
                        </li>
                        
                        <li> 
                            <a href="index.html">Savories</a>
                
                        </li>
                        <li>
                            <a href="index.html">Pooja Items</a>
                        </li>
                    </ul>
                </aside>
                <main class="main">
                    <div class="content">
                      <Route path="/product/:id" component={ProductScreen} />
                      <Route path="/" exact={true} component={HomeScreen} />
                        
                </div>
                </main>
                <footer class="footer">
                    All rights reserved.
                </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
