//we import axios since we need to call an API
import axios from "axios";

//an action is just a function

export function fetchFavourites(){
    console.log('POBIRANIE FAVOURITES')
    //we return a function that will dispatch the action
    return function(dispatch){
        
        axios.get("/api/cities").then(response=>{
            
            //get the location object
            //due the structure of the API response
            //which is in objects I did a little code to get the data I need
            console.log(response.data[0]);

            let arr = [];
            for (var i=0; i<response.data.length; i++) {
                arr.push(response.data[i].name);
              
            }
            //here is the important part
            //--- DISPATCH THE ACTION
            //dispatch the FETCH_LOCATION action           
            //We say which action we want to call
            //and in the payload object
            //we add the data, in this case the array created
            //by parsing the object from the API
            //which at this point has data
            dispatch({type:"FETCH_FAVOURITES", payload:arr});
           
            //these next parts are the same
            //parsing the object to store the data in an array
            //get the current conditions object
            

            // console.log the FULL response
            console.log(response);



        }).catch(err=>{
            console.log(err)
        });     
        // we got now 1 action, which dispatche  
        //we need to import this action in our component 
   }
}