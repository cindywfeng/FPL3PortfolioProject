import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getHabits } from '../../Actions/actions';

class AddHabit extends Component {
    state = {
        data: []
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const data = {...this.state.data}
        data.userid = this.props.userid;
        console.log(data)

        const options = {
            headers: { "Content-Type": "application/json" },
            method: 'POST',
            body: JSON.stringify(data)
        }

        fetch('http://localhost:3000/habits/', options)
        .then(resp => this.setState({ data: [] }))
        .then(resp => this.props.closeModal())
    }

    handleInput = (e) => {
        let data = this.state.data;
        data[e.target.name] = e.target.value
        this.setState({data})
    }

    render() {
        return (
            <div>
                <form id="habitform" onSubmit={this.handleSubmit}>

                    <label htmlFor="habit">Habit</label><br/>
                    <input type="text" id="habit" name="habit" placeholder="Please enter a habit" onChange={this.handleInput}></input><br/>
                    <br/>

                    <label htmlFor="frequency" id="frequency">Frequency</label><br/>
                    <select name="frequency" defaultValue="" onChange={this.handleInput}>
                        {/* value={filterFreq} */}
                        <option value="" disabled>Select Frequency</option>
                        <option value="daily" >Daily</option>
                        <option value="weekly">Weekly</option>
                        <option value="monthly">Monthly</option>
                    </select><br/>
                    <br/>

                    <label htmlFor="startdate">Start Date:</label><br/>
                    <input type="date" id="startdate" name="startdate" placeholder="Date YYYY-MM-DD" onChange={this.handleInput}></input><br/>

                    <label htmlFor="enddate">Until When?</label><br/>
                    <input type="date" id="enddate" name="enddate" placeholder="Date YYYY-MM-DD" onChange={this.handleInput}></input><br/>
                    <br/>

                    <input type="submit"></input>
                </form>
            </div>
        )
    }
}

const mSTP = state => ({
    userid: state.userid
})

export default connect(mSTP)(AddHabit)
