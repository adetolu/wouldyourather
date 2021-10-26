import React, { Component } from 'react'
import { _saveQuestion } from '../utils/_DATA';
import './addpoll.css'

class Addpolls extends Component {

    state = { Option1: " ", Option2: " " }

    OptionOneInputChange = event => {
        // console.log(event.target.value)

        this.setState({
            Option1: event.target.value,
        })
    }

    OptionTwoInputChange = event => {
        // console.log(event.target.value)

        this.setState({
            Option2: event.target.value,
        })
    }

    submitHandler = event => {

    }

    // getData() {
    //     let optionOneText = this.state.Option1
    //     let optionTwoText = this.state.Option2
    //     return saveQuestion({
    //         author,
    //         optionOneText,
    //         optionTwoText
    //     })

    // }

    render() {
        const { Option1, Option2 } = this.state
        return (
            <div className="addpolls">
                <h2> Add Polls </h2>
                <h5> Would you rather? </h5>

                <form>
                    <label for="Option1">Option 1:</label><br />
                    <input type="text" value={Option1} onChange={this.OptionOneInputChange} />
                    <br /><label for="option2">Option 2:</label><br />
                    <input type="text" value={Option2} onChange={this.OptionTwoInputChange} />

                    <button onClick={this.submitHandler}> Submit </button>

                </form>

            </div>
        )
    }
}

export default Addpolls;