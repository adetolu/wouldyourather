const questionReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_QUESTIONS':
// console.log(action.payload)
            return {

                state,

                ...action.payload

            };
            default:
                return state;                
    }
}
export default questionReducer;