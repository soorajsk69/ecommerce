export const getAllproductsReducer=(state={products:[]},action)=>{
    switch(action.type) 
    {
        case 'GET_REQUEST' :return{
            loading :true,
            ...state
        }

        case 'SUCCESS':
            return{
                loading :false,
            products:action.payload


    }
    case 'FAIL':
        return{

        error:action.payload,
        loading : false

}
default: 
return state
}}