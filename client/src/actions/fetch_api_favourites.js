import axios from "axios";


export function fetchFavourites(){
    console.log('POBIRANIE FAVOURITES')
    return function(dispatch){
        
        axios.get("/api/cities").then(response=>{
            

            let arr = [];
            for (var i=0; i<response.data.length; i++) {
                arr.push(response.data[i].name);
              
            }
            dispatch({type:"FETCH_FAVOURITES", payload:arr});
           


        }).catch(err=>{
            console.log(err)
        });     

   }
}