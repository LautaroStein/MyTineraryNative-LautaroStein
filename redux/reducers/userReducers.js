const initialState = {
    user:{email:""},
    users:[]
}

const userReducers = (state = initialState, action) => {
    switch(action.type){
        case 'user':
            return {
                ...state,
                user: action.payload
            }
        case 'users': 
            return {
                ...state,
                users: action.payload
            }
        default:
                return state
    }
}

export default userReducers