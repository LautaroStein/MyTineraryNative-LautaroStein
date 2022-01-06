import axios from "axios"

const citiesActions = {
    fetchCities : () => {
        return async(dispatch, getState) => {
            const res = await axios.get("https://mytinerary-lautaro.herokuapp.com/api/datos")
            dispatch({type:"fetch", payload: res.data.response.cities})
        }
    },
    encontrarCity : (id) => {
        return (dispatch, getState) => {
            dispatch({type:"encontrarCity", payload:{id}})
        }
    },
    filtroCity: (val, aux ) =>{
        return (dispatch, getState)=>{
            dispatch({type:"filtroUno", payload:{val, aux}})
        }
    }
}
export default citiesActions