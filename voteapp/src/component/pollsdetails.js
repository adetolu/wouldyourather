import React, { Component } from 'react'
import { useParams } from 'react-router-dom';
import { _getUsers, _getQuestions, _saveQuestion, _saveQuestionAnswer } from '../utils/_DATA';
import { connect } from 'react-redux'
import './pollsdetails.css'



class Pollsdetails extends Component {
  //   state = {
  //   isUserloggedin: false,
  //   allUsers: [],
  //   allQuestions: []
  // }

  state = {
    selectedOption: ''
  }

  // userLogIn = () => this.setState({ isUserloggedin: true });

  // componentDidMount() {
  // let {users, questions} = 


  //   this.getData().then((data) => {
  //     this.setState(() => ({
  //       allUsers: data.users,
  //       allQuestions: data.questions
  //     }))
  //     console.log(this.state.allQuestions)
  //   })
  // }
  // getData() {

  //   return Promise.all([_getUsers(), _getQuestions()]).then(([users, questions]) => ({

  //     users, questions
  //   }));

  // }

  submitVote = () => {
    //Print selected answer

    // Add answer to question object

    // Add answer to user object

    // 
  }

  submitChange = (e) => {
    const { value } = e.target;
    console.log(value)
    this.setState({
      selectedOption: value
    });
  }

  render() {
    // let allQuestionsarray = Object.values(this.state.allQuestions)
    const { allUsers, allQuestions, answersid } = this.props
    let selectedQuestion = allQuestions[this.props.match.params.question_id]
    let avatar = allUsers[selectedQuestion.author].avatarURL
    console.log('avatar', avatar)


    // const {id} = useParams();

    console.log(this.props);
    return (
      <div className ="pollsdetails">
        {/* <h2>Polls Details</h2> */}
        {selectedQuestion ? (

          <div>
            {/* <h3>{selectedQuestion.author} asks:</h3> */}
            <div class="row">

              <div class="column">
                <img width="40px" height="50px" styles="padding-bottom: 5px" src={avatar} />
              </div>
              <div class="column">
                <h5 className="author-name">{selectedQuestion.author}</h5> asks
              </div>
            </div>

            <label>{selectedQuestion.timestamp}</label>
            <h5>Would you rather ? </h5>
            <br/><br/>
            <div>
              {answersid.includes(selectedQuestion.id) ? (
                <div>
                  Results:
                  <br/>
                  <b>Option 1:</b> {selectedQuestion.optionOne.text}<br/>
                  <ul>
                    <li>Number of votes: {selectedQuestion.optionOne.votes.length}</li>
                    <li>
                      Percentage:
                      {(selectedQuestion.optionOne.votes.length /
                        (selectedQuestion.optionOne.votes.length + selectedQuestion.optionTwo.votes.length)) *
                        100}
                      %
                    </li>
                  </ul><br/>
                  <b>Option 2:</b> {selectedQuestion.optionTwo.text}<br/>
                  <ul>
                    <li>Number of votes: {selectedQuestion.optionTwo.votes.length}</li>
                    <li>
                      Percentage:
                      {(selectedQuestion.optionTwo.votes.length /
                        (selectedQuestion.optionOne.votes.length + selectedQuestion.optionTwo.votes.length)) *
                        100}
                      %
                    </li>
                  </ul>
                </div>
              ) : (
                <div>
                  <input type="radio" value="optionOne" onChange={this.submitChange} /> <b> Option 1</b> {selectedQuestion.optionOne.text}<br />
                  <input type="radio" value="optionTwo" onChange={this.submitChange} /> <b>Option 2:</b> {selectedQuestion.optionTwo.text}
                  <br /><button onClick={this.submitVote}>Submit</button>
                </div>
              )}

            </div>
          </div>
        ) : (<div></div>)}
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  let allQuestions = Object.values(state.questions).filter(value => Object.keys(value).length !== 0)
console.log('allQuestions', allQuestions)
  let allUsers = state.users

  let loggedInUser = state.loggedInUser
  let currentUserAnswers = Object.keys(allUsers[loggedInUser].answers)
  return {
    allQuestions: state.questions,
    answersid: currentUserAnswers,
    allUsers: allUsers

  }
};

//   const mapDispatchToProps = (dispatch) => {
//       return {
//     setUser: setUser()
//       }
//   }

export default connect(mapStateToProps)(Pollsdetails); // connect wrapper function in use
