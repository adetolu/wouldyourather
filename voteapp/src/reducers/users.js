// import RECEIVE_USER from './action/users'
const userReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_USERS':
        
            return {

                state,

                ...action.payload

            };
            default:
                return state;                
    }
}
export default userReducer;