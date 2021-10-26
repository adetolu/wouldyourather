import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { unSetUser } from '../action/loggedInUser';
import { connect } from 'react-redux'
import './nav.css'

class NavBar extends Component {

    logoutUser = () => {
        this.props.unSetUser()
    }

    render() {
        console.log(this.props)
        const isAuthenticated = this.props.currentUser
        const avatar = this.props.avatar
        return (
            <div className="navbar">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/add">Add Polls</Link></li>
                    <li><Link to="/leaderboard"> Leader Board</Link></li>
                    {/* <li><Link to="/login"> Login</Link></li> */}
                    <li><Link to="/nomatch"> 404 Page </Link></li>
                    {/* <li>
                        <form class="form-inline my-2 my-lg-0">
                            UserName &nbsp;&nbsp;
                            <img className="img-thumbnail rounded-circle" styles="width: 10px; height: 10px;"
                                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg" />
                        </form>
                    </li> */}
                    {isAuthenticated !== null &&
                        <li className="logout">
                            <span><img src={avatar} height='37px' alt="image profile" /></span>
                            <span>{isAuthenticated}</span>
                            <span>
                                <Link to="/" onClick={this.logoutUser}> Logout </Link>
                            </span>
                            {/* <div class="row">

              <div class="column">
                <img width="40px" height="50px" styles="padding-bottom: 5px" src="" />
              </div>
              <div class="column">
                <h5>{isAuthenticated}</h5> asks
              </div>
            </div> */}

                        </li>
                    }
                </ul>
            </div >

        )
    }
}


const mapStateToProps = (state) => {
    return {
        currentUser: state.loggedInUser,
        avatar: state.users[state.loggedInUser].avatarURL
    };
};

//   const mapDispatchToProps = (dispatch) => {
//       return {
//     setUser: setUser()
//       }
//   }

export default connect(mapStateToProps, { unSetUser })(NavBar); // connect wrapper function in use