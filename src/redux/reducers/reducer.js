const INIT_STATE = {
    carts: []
}


export const cartreducer = (state=INIT_STATE , action)=>{
    // eslint-disable-next-line default-case
    switch(action.type){
        case "ADD_CART" : return{
            ...state,
            carts:[...state.carts,action.markload]
        }

        default : return {state} 
    }
}