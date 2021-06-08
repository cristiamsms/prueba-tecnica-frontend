import Swal from "sweetalert2"
import { fetchContoken, fetchSintoken } from "../components/helpers/fetch"
import { types } from "../types/types"

export const startLogin =(email,password) =>
  
{    
    return async(dispatch)=>{   
       const resp= await fetchSintoken('usuarios',{email,password},'POST')
        const body = await resp.json();
        const tiempo:any = new Date().getTime()
        
        if (body.ok) {
             localStorage.setItem('token',body.token);
             localStorage.setItem('token-init', tiempo) ;
            dispatch(login({uid:body.uid,
                            name:body.name}));
        }else{
            Swal.fire('Error',body.msg,'error');
        }
    }
}
export const startChecking =() => {
    return async(dispatch) =>{
        const resp= await fetchContoken('usuarios/renew',{}); 
        const body = await resp.json();
        if(body.ok)
        {
            dispatch(checkingFinish());
        }
    } 
}

const checkingFinish = () => ({
    type:types.authCheckingFinish
})
const login = (user) =>({
    type:types.authLogin,
    payload:user
});
export const startLogout = ()=>{
    return (dispatch)=>{
        localStorage.clear();
        dispatch(logout()); 
    }
}
const logout = ()=>({

    type:types.authLogout
})