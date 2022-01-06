const initialState = {
    itinerary : [],
    activity: []
    }
    
    const itineraryReducer = (state = initialState ,action) =>{
        switch(action.type){
            case"fetchIdItinerary":
                return{
                    ...state,
                    itinerary : action.payload
                }
            case"fetchActivity":
                return{
                    ...state,
                    activity : action.payload
                }
                default:
                    return state 
        }   
    }
export default itineraryReducer