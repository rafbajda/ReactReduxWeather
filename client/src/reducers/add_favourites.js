const addFavourites=(state={
    favourites:[]
    }, action)=>{
        if(action.type === "ADD_FAVOURITES"){
            //as you see, its the same
            //except that we use another property
            //that way we dont mix the state data
            state= {...state, favourites: action.payload}
        }
    
        return state;
    };
    //at the end export it
    //remember you import the reducers
    //in the main reducer file
    export default addFavourites;