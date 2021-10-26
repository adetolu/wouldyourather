import React, { Component } from 'react'
import './homepage.css';
import "./tabs.css";
import Tabs from './tabs';
import { useSelector } from 'react-redux';
import { connect } from 'react-redux'


class Homepage extends Component {
    render() {
        // console.log(this.props)
        const { answeredQuestions, unansweredQuestions } = this.props
        // const polltab = questions.length > 0 ? questions.filter((question) => {
        //     return question.questions === unanswered
        // }) : answered


        return (
            <div>
                {/* <h2> Home </h2> */}

                <div className="toggle-tabs">
                    <Tabs questionsAnswered={answeredQuestions} questionsUnanswered={unansweredQuestions} />

                </div>

            </div>

        )
    }
}

const mapStateToProps = (state) => {
    let allQuestions = Object.values(state.questions).filter(value => Object.keys(value).length !== 0)

    let allUsers = state.users

    let loggedInUser = state.loggedInUser
    let currentUserAnswers = Object.keys(allUsers[loggedInUser].answers)

    console.log('thisUser', currentUserAnswers)
    const answeredQuestions = allQuestions.filter((question) => {
        return currentUserAnswers.includes(question.id)
    }).sort((a, b) => b.timestamp - a.timestamp);


    const unansweredQuestions = allQuestions.filter((question) => {
        return !currentUserAnswers.includes(question.id)
    }).sort((a, b) => b.timestamp - a.timestamp);

    return {
        answeredQuestions: answeredQuestions,
        unansweredQuestions: unansweredQuestions,
        users: allUsers,
        currentUser: loggedInUser
    };
};

//   const mapDispatchToProps = (dispatch) => {
//       return {
//     setUser: setUser()
//       }
//   }

export default connect(mapStateToProps)(Homepage); // connect wrapper function in use
