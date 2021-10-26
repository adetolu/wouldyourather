const authUserReducer = (state = null, action) => {
    switch (action.type) {
        case 'SIGN_IN':
        // console.log(...action.payload)    
        return action.user;

            case 'SIGN_OUT':
                return null;
        default:
            return state;
    }
}
export default authUserReducer;