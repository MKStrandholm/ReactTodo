/*

"StAuth10244: I Mark Kawucha, 000816619 certify that this material is my original work. No other person's work has been used without due acknowledgement. I have not made my work available to anyone else."

*/


import {React, Component} from 'react';
import graphic from '../images/home/list.png';

/* Home page component */
class Home extends Component {
    render() {
        return (
            <div>
                <h1 className='display-6'>Welcome to(do) my Application!</h1><br/>
                <p>If you've got things that need to be done and want to track them, you've come to the right place!</p>
                <p>Get started by visiting the To-do List page and instantly begin adding/editing/removing tasks</p>
                <img src={graphic} alt='woman using todo list' width="85%"/>
            </div>
        );
    }
}

export {Home}