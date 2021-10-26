import './App.css';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom'
import NavBar from './component/nav';
import Leaderboard from './component/leaderboard';
import Homepage from './component/homepage';
import Addpolls from './component/addpolls';
import Login from './component/login'
import Nomatch from './component/nomatch';
import Pollsdetails from './component/pollsdetails';
import { Component, Fragment } from 'react';
import { getData } from './action/common';
import { connect } from 'react-redux'



class App extends Component {
  componentDidMount() {
    this.getInitialData()
  }

  async getInitialData() {
    await this.props.dispatch(getData())
  } 

  render() {
    // console.log(this.props)
    const isAuthenticated = this.props.currentUser;
    console.log(isAuthenticated)
    // const users = this.props.users

    return (

      <BrowserRouter>
        {isAuthenticated === null ? (
          // <Route path='/login' component={Login} />
          // <Route render={() => <Login users={this.state.allUsers} userLogIn={this.userLogIn} />} />
          <Route render={() => <Login />} />
        ) : (
          <Fragment>

            <NavBar />

            <Switch>
              {/* <Route exact path='/' render={() => <Homepage questions={this.state.allQuestions} />} /> */}

              <Route exact path='/' component={Homepage} />

              {/* <Route exact path="/">
                <Redirect to ="/home" />
               {/* <Homepage questions={this.state.allQuestions} /> 
              <Route> */}

              <Route path='/add' component={Addpolls} />

              <Route path='/leaderboard' component={Leaderboard} />

              <Route path='/nomatch' component={Nomatch} />

              {/* <Route path='/questions/:question_id' component={Pollsdetails} questions={this.state.allQuestions} /> */}


              <Route path='/questions/:question_id' component={Pollsdetails} />

              {/* <Route path='/questions/:question_id' render={(props) => <Pollsdetails questions={this.state.allQuestions}/>} /> */}
              {/* <Route exact path="/questions/:question_id" render={({match}) => (
  <Pollsdetails question={this.state.allQuestions.find(q => q.id === match.params.id)} />
)} /> */}

            </Switch>
          </Fragment>

        )}
      </BrowserRouter>
    )
  }

}

const mapStateToProps = (state) => {
  return { currentUser: state.loggedInUser };
};
// const mapDispatchToProps = (dispatch) => {
//   return {
//     getData: getData()
//   }
// }

// const mapDispatchToProps = {
//   getData
// }

export default connect(mapStateToProps)(App); // connect wrapper function in use
