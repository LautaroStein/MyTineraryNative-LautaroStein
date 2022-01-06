import axios from "axios"

const itineraryActions = {

    fetchItineraryId : (id) => {
        return async(dispatch, getState) => {
            const res = await axios.get(`https://mytinerary-lautaro.herokuapp.com/api/itinerariosCity/${id}`)
            dispatch({type:"fetchIdItinerary", payload: res.data.response})
        }
    },
    ActivitesId : (id) => {
        return async(dispatch, getState) => {
            const res = await axios.get(`https://mytinerary-lautaro.herokuapp.com/api/${id}/activities`)
            dispatch({type:"fetchActivity", payload: res.data.response})
        }
    },
    LikeAndDislike: (like) => {
        return async (dispatch, getState) => {
            try {
                const token = localStorage.getItem('token')
                await axios.put(`https://mytinerary-lautaro.herokuapp.com/api/itineraries/likes`,{
                    ...like,
                },{
                    headers: { 'Authorization': 'Bearer ' + token }
                });
            return { success: true };
            } catch (err) {
            }
        };
    },
}
export default itineraryActions