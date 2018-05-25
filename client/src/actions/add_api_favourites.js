import axios from "axios";


export function addFavourites(id1, name1){
    console.log('dodawanie FAVOURITES')
    return function(dispatch){
        
        axios.post("/api/cities", {id:id1, name:name1}).then(response=>{
            
    
            let arr = [];
            for (var i=0; i<response.data.length; i++) {
                arr.push(response.data[i].name);
              
            }
        
            dispatch({type:"ADD_FAVOURITES", payload:arr});
           



        }).catch(err=>{
            console.log(err)
        });     


   }
}