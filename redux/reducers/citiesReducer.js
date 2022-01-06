const initialState = {
cities : [],
aux : [],
city : [],
}

const citiesReducer = (state = initialState ,action) =>{
    switch(action.type){
        case"fetch":
        return {
            ...state,
            cities: action.payload,
            aux: action.payload
        }

        case"encontrarCity":
        const city = state.cities.find(city => city._id === action.payload.id)
        return {
            ...state,
            city: city
        }

        case"filtroUno":
        console.log(action.payload.aux)
        const filtrando = action.payload.aux.filter((product => product.name.toLowerCase().startsWith(action.payload.val)))
        console.log(filtrando)
        return {
            ...state,
            cities: filtrando
        }
        default:
            return state 
    }
}
export default citiesReducer