import { types } from '../types/types';
const initialState:any={
 planes:[
 ]
};

export const planReducer = (state=initialState,action:any) => 
{
    switch (action.type) {
        case types.planAddNew:
            
            return {
                ...state,
                planes:[...state.planes,action.payload]
                
            }
        
        case types.planUpdate:
            return{
                ...state,
                planes:state.planes.map(
                    (e:any) =>(e.id === action.payload.id) ? action.payload : e
                )
            }
        case types.planDeleted:
            return{
                ...state,
                planes:state.planes.filter(
                    (e:any) =>(e.id !== state.activePlan.id) 
                ),
                activePlan:null
            }

        case types.planLoaded:
            return{
                ...state,
                planes:[...action.payload]
            }
        default:
            return state;
    }
}