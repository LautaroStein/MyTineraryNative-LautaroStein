const axios = require('axios')

const userActions = {
    
    registerUser : (newUser) =>{
        return async(dispatch, getState) => {
            try{
                const user = await axios.post('https://mytinerary-lautaro.herokuapp.com/api/user/signUp',{...newUser})
                if(user.data.success && !user.data.error){
                    return {success:true}
                }else{
                    return {errores: user.data.error}
                }
            }catch(error){

            }
        }
    },
    signIn : (userLogIn) => {
        return async(dispatch, getState) => {
            try {
                const user = await axios.post('https://mytinerary-lautaro.herokuapp.com/api/user/signIn',{...userLogIn})
                if(user.data.success && !user.data.error){
                    localStorage.setItem("token", user.data.response.token)
                    dispatch({type:'user', payload:{email:user.data.response.emailExists}})
                    return {success:true}
                }else{
                    return {errores: user.data.error}
                }
            }catch(error){
                console.error(error)
            }
        }
    },
    isAuth: () => {
        return async (dispatch, getState) => {
            try {
                const token = localStorage.getItem('token')
                const user = await axios.get('https://mytinerary-lautaro.herokuapp.com/api/user/auth', {
                    headers: { 'Authorization': 'Bearer ' + token }
                })
                dispatch({ type: 'user', payload: {email: user.data.response} })
                return { response: user.data.response }
            } catch (error) {
                return { error: 'Unautorized user, try login again' }
            }
        }
    },
    SignOut: () => {
        return (dispatch, getState) => {
            localStorage.clear()
            dispatch({ type: 'user', payload: {email:""}})
        }
    },
    GetUsers: () =>{
        return async (dispatch, getState) => {
            try{
                const users = await axios.get('https://mytinerary-lautaro.herokuapp.com/api/user')
                dispatch({ type: 'users', payload: users.data.response})
            }catch(error){
                console.log(error)
            }
        }
    }
}


export default userActions