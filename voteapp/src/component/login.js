import React, { Component, useReducer } from 'react'
import { useRouteMatch } from 'react-router';
import { connect } from 'react-redux'
import { setUser } from '../action/loggedInUser';
import './login.css'
import profileImage from './loginimage.png'

class Login extends Component {
    // componentDidMount() {
    //     this.props.getUsers()
    //   }
    state = {
        selectedUser: ''
    }

    handleChange = (e) => {
        // console.log(e)
        this.setState({ selectedUser: e.target.value });
    }

    submitLogin = () => {
        // console.log(this.props)
        const { setUser } = this.props
        setUser(this.state.selectedUser)
    }

    render() {
        const { users } = this.props
        // let allUsers = Object.values(users)
        // console.log(allUsers);
        console.log(users)

        return (
            <div>
                <div className="welcome-message">
                    <h4 className="header-text" align="center">Welcome to the would You Rather App!</h4>
                    <h5 className="login-description" align="center">please login to continue</h5>
                    <div>
                        <div className ="profile-logo">
                                <img className="profile-image" src={profileImage} alt="Profile Image"/>
                                <div className="login">
                                    <h4>Select user</h4>
                                    <select onChange={this.handleChange} >
                                        <option value="0" disabled>
                                            Select User
                                        </option>

                                        {users.map((user) => (
                                            <option key={user.id} value={user.id}>{user.name}</option>
                                        ))}
                                    </select>
                                    <br /><button class="submit-button" onClick={this.submitLogin}> Login </button>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
        )
    }

}


const mapStateToProps = (state) => {
    return { users: Object.values(state.users) };
};

//   const mapDispatchToProps = (dispatch) => {
//       return {
//     setUser: setUser()
//       }
//   }

export default connect(mapStateToProps, { setUser })(Login); // connect wrapper function in use
