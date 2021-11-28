/*

"StAuth10244: I Mark Kawucha, 000816619 certify that this material is my original work. No other person's work has been used without due acknowledgement. I have not made my work available to anyone else."

*/


/* This component is used to build the actual task item (the box with the task text) */
import {React, Component} from 'react';
import './Task.css';

class Task extends Component {
    render() {
        return (
            <div className='task mb-4'>
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                        <h1 className='title'>{this.props.task}</h1>
                        </div>
                    </div>
                </div>      
            </div>
        );
    }
}

export {Task}