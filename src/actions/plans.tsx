import Swal from "sweetalert2";
import { fetchSintoken } from "../components/helpers/fetch";
import { types } from "../types/types";


export const planStartAddNew = ( plan ) => {
    return async(dispatch) => {
 
 
     try {
         
         const resp= await fetchSintoken('planes',plan,'POST'); 
         const body = await resp.json();
 
         if(body.ok){
             plan.id = body.plan.id;
             
             dispatch(planAddNew( plan ));
         }
         
     } catch (error) {
         console.log(error)
     }
     
 
    }
    
 }
 const planAddNew=(plan)=> ({
    type:types.planAddNew,
    payload:plan
})

export const planStartLoading = () => {
    return async(dispatch) => {
        try {
         
            const resp= await fetchSintoken('planes',{}); 
            
            const body = await resp.json();
            
            
            const planes = body.planes ;
          

            dispatch(planesLoaded(planes))




        } catch (error) {
            console.log(error)
        }

    }
}

const planesLoaded = (planes) => ({
    type:types.planLoaded,
    payload:planes
})

export const planStartUpdated = (plan) =>{
    return async(dispatch) => {
        try {
            
            const resp= await fetchSintoken(`planes/${plan.id}`,plan,'PUT'); 
            const body = await resp.json();

            if(body.ok){

                 dispatch(planUpdated(plan));
            }else {
                Swal.fire('Error',body.msg,'error')
            }

           




        } catch (error) {
            console.log(error)
        }

    }
}
 const planUpdated=(plan)=>({
    type:types.planUpdate,
    payload:plan
})

export const planStartDelete = (id) =>{
    return async(dispatch) => {
        try {
            
            const resp= await fetchSintoken(`planes/${id}`,{},'DELETE'); 
            const body = await resp.json();

            if(body.ok){

                 dispatch(planDelete());
            }else {
                Swal.fire('Error',body.msg,'error')
            }

           




        } catch (error) {
            console.log(error)
        }

    }
}
 const planDelete=()=>({
    type:types.planDeleted
})