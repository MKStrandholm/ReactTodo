/*

"StAuth10244: I Mark Kawucha, 000816619 certify that this material is my original work. No other person's work has been used without due acknowledgement. I have not made my work available to anyone else."

*/


import {React, Component} from 'react';

/* About page component */
class About extends Component {
    render() {
        return (
            <div>
                <h1 className='display-6'>About</h1><br/>
                <p>This application serves as a To-Do List app that allows users to manage tasks through
                    <span style={{ fontWeight: 'bold'}}> add</span>,
                    <span style={{ fontWeight: 'bold'}}> edit</span>, and
                    <span style={{ fontWeight: 'bold'}}> remove</span> actions.
                </p><br/>

                <h1 className='display-6'>Backstory</h1><br/>
                <p>During my studies in Software Development, I received an assignment to build a To-Do application within ReactJS. Its purpose was to combine all of the teachings about React that I had been given with a primary focus on React Router, multi-page component rendering within a SPA, and CRUD operations via local arrays in state. This application is the result of that assignment. </p><br/>
            </div>

        );
    }
}

export {About}