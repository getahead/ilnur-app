import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';

class App extends React.Component {
    render() {
        return <div>
            <div>hell world</div>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/contact'>Contact</Link>
            </div>
            <Switch>
                <Route path='/contact' component={Contact}/>
                <Route path='/' component={Home}/>
            </Switch>
        </div>;
    }
}

export default App;