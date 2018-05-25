//we import axios since we need to call an API
import axios from "axios";

//an action is just a function

export function fetchAPIClue(city){
    //we return a function that will dispatch the action
    return function(dispatch){
        //make the axios call for the API
        //that is my key, you can get yours is free.

        // --- ADD YOUR APIXU API KEY ----- //
        axios.get("http://api.apixu.com/v1/search.json?key=71fdcc02371146bfb7b84834181405&q=" + city ).then(response=>{
            let arr = [];
            for (var i=0; i<response.data.length; i++) {
                arr.push(response.data[i].name);
              
            }
            console.log(arr);

            dispatch({type:"FETCH_CLUE", payload:arr});
           
        }).catch(err=>{
            console.log(err)
        });     
   }
}