export const initialState = {
    isLoading:false,
    cards: [
        {
            id:0,
            name:'',
            colors:[],
            url:'',
        }
    ]
        
}

    
export const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case "FETCHING_ACTIVITY_START":
            console.log(state)
            return {
                ...state,
                isLoading: true
            };
        case "FETCHING_DATA_SUCCESS":
            console.log(state)
            return {
                ...state,
                isLoading: false,
                cards: action.payload
            };
        case "FILTER_COLOR":
            return {
                ...state, cards:[
                    ...state.cards, state.cards.filter(item => item.colors !== action.payload)]
            };
        default: 
            return state;
    }
}