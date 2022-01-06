const axios = require('axios')

const commentActions = {

    sendComment : (newComment) =>{
        return async(dispatch, getState) => { 
            try{
                const token = localStorage.getItem('token')
                await axios.post('https://mytinerary-lautaro.herokuapp.com/api/itineraries/comments',{...newComment},{
                    headers: { 'Authorization': 'Bearer ' + token }
                })
                return({success:true})
            }catch(error){
                return({error:error})
            }
        }
    },
    updateComment : (updateComment) => {
        return async(dispatch, getState) => { 
            try{
                const token = localStorage.getItem('token')
                await axios.put('https://mytinerary-lautaro.herokuapp.com/api/itineraries/comments',{...updateComment},{
                    headers: { 'Authorization': 'Bearer ' + token }
                })
                return({success:true})
            }catch(error){
                return({error:error})
            }
        }
    },
    deleteComment : (deleteComment) => {
        return async(dispatch, getState) => { 
            try{
                const token = localStorage.getItem('token')
                await axios.delete('https://mytinerary-lautaro.herokuapp.com/api/itineraries/comments',{data:deleteComment, headers: { 'Authorization': 'Bearer ' + token }})
                return({success:true})
            }catch(error){
                return({error:error})
            }
        }
    }

}
export default commentActions