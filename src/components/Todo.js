/*

"StAuth10244: I Mark Kawucha, 000816619 certify that this material is my original work. No other person's work has been used without due acknowledgement. I have not made my work available to anyone else."

*/


import {React, Component} from 'react';
import {ListItem} from './ListItem';
// Bootstrap
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

/* This component forms the actual list that displays on the to-do page */
class Todo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // Two way binding with text field
            inputText: "",
            // Bool flag to control whether the edit button should show
            editingTask: false,
            // Used to keep track of the task index that's being edited for the method to update the appropriate task text (empty string to avoid accidental updates to first item)
            indexOfEdit: "",
            // I made these objects instead of strings incase I wanted to add functionality in the future (i.e. due dates, priority, etc.)
            tasks: [
                {
                    task: 'Practice Guitar',
                },
                {
                    task: 'Go For A Walk',
                },
                {
                    task: 'Complete Dark Souls',
                },
                {
                    task: 'Finish ASP.NET Assignment',
                }
            ]
        }
    }

    // Update the input text state variable
    updateNewTask(event) {
        this.setState({
            inputText: event.target.value
        });
    }

    // Adds a new task to the list, provided the input text field isn't empty
    addHandler() {
        if (this.state.inputText !== "") {

            // Capitalize the task text to be consistent
            let lowercaseText = this.state.inputText;
            let capitalizedText = lowercaseText.charAt(0).toUpperCase() + lowercaseText.slice(1);

            let taskToAdd = {
                task: capitalizedText
            };

            // Setup a local array and add the new task to it
            let newTaskList = this.state.tasks;
            newTaskList.push(taskToAdd);

            // Update the task list in state with the newly populated one and reset the input text field
            this.setState({
                tasks: newTaskList,
                inputText: ""
            });

            
            // Update local storage to maintain the persistant data
            localStorage.setItem("tasks", JSON.stringify(newTaskList));
        }
    }

    // This delete handler is used to delete a task from the list. It's called by the child component ListItem since the delete button is outside the scope of this file and passes the task index
    deleteHandler = (taskIndex) => {
        // Create a copy of the task list in state and splice the task to be removed
        let newList = this.state.tasks;
        newList.splice(taskIndex, 1);
        // Update the task list in state with the newly spliced one
        this.setState({
            tasks: newList
        });

        // Update local storage to maintain the persistant data
        localStorage.setItem("tasks", JSON.stringify(newList));
    }

    // This edit handler is used to manipulate the variables in state to enable the 'edit' mode
    editHandler = (taskIndex) => {
        // Set the bool flag to true, and update the index with the index of the task that the edit button was clicked. Also, update the input text field with the text of the task
        this.setState({
            editingTask: true,
            indexOfEdit: taskIndex,
            inputText: this.state.tasks[taskIndex].task
        });
    }

    // This method actually does the edit; it copies a local array of the task list in state, and updates its text with the input text binding value
    editTask() {
        let localTasks = this.state.tasks;
        let taskBeingEdited = localTasks[this.state.indexOfEdit];
        taskBeingEdited.task = this.state.inputText;

        // Update the list of tasks in state with the copy above, reset the input text box value, and reset the editing flag/edit index
        this.setState({
            tasks: localTasks,
            inputText: "",
            editingTask: false,
            indexOfEdit: ""
        })

        // Update local storage to maintain the persistant data
        localStorage.setItem("tasks", JSON.stringify(localTasks));
    }

    // When the component is mounted, check to see if there is data in local storage. If there is, grab it and populate the list, otherwise set it with the default task list
    componentDidMount() {
        if (localStorage.getItem("tasks") == null) {
            localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
        }
        else {
            this.setState({
                tasks: JSON.parse(localStorage.getItem("tasks"))
            });
        }
        
    }

    render() {
        // Track if the user is editing a task
        const editing = this.state.editingTask;
        // Button which will conditionally render depending on if the user is editing or not
        let button;

        // If the user is not editing, show the add button
        if (!editing) {
            button = <Button variant="success" onClick={this.addHandler.bind(this)}>Add</Button>;
        }
        // If they are editing, show the edit button
        else {
            button = <Button variant="success" onClick={this.editTask.bind(this)}>Edit</Button>
        }
        return (
            <div>
                <h5 className='mb-4'>Enter a Task Below and Click Add</h5>
                <input className="textField mb-5" type='text' value={this.state.inputText} onChange={this.updateNewTask.bind(this)}/>
                
                {button}
                <div className="listBody">
                {this.state.tasks.map((t, i) => {
                    return (
                        <ListItem deleteHandler={this.deleteHandler} editHandler={this.editHandler} key={i} index={i} task={t.task}/>
                    )
                })}       
                </div>     
            </div>
        );
    }
}


export {Todo}