import React from 'react';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './Components/Pages/Home';
import Services from './Components/Pages/Services';
import Products from './Components/Pages/Products';
import SignUp from './Components/Pages/SignUp';
import Footer from './Components/Footer';

function App() {
    return(
        <>
            <Router>
                <Navbar/>
                    <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/services' component={Services} />
                        <Route path='/products' component={Products} />
                        <Route path='/sign-up' component={SignUp} />
                    </Switch>
                    <Footer />
            </Router>
        </>
    );
}

export default App;
