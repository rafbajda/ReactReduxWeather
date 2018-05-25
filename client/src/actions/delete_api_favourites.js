import axios from "axios";


export function deleteFavourites(id1, name1){
    console.log('usuwanie FAVOURITE')
    return function(dispatch){
        
        axios.delete("/api/cities/"+name1).then(response=>{
            
            let arr = [];
            for (var i=0; i<response.data.length; i++) {
                arr.push(response.data[i].name);
              
            }
            dispatch({type:"DELETE_FAVOURITES", payload:arr});
           
        }).catch(err=>{
            console.log(err)
        });     

   }
}