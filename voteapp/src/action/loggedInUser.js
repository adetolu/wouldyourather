export function setUser (user) {
    return {
        type: 'SIGN_IN',
        user
    }
}

export function unSetUser () {
   let user = ''
    return {
        type: 'SIGN_OUT',
       
        user
    }
}
