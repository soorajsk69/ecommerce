export const addToCart =(product,quantity,varient)=>(dispatch , getState)=>{
    var cartItem ={
        name : product.name,
        id:product.id,
        image:product.image,
         varient:varient,
         quantity:Number (quantity),
         price:product.price,
         prices:product.price[0][varient]*quantity
    }
    if(cartItem.quantity>10){
        alert('you cannot add more than 10 quentities')
    }
    else{
        if(cartItem.quantity<1){
            dispatch({type:'DELETE_FROM_CART',payload:product})

        }
        else{
        dispatch({type:'ADD_TO-CART',payload:cartItem})
        }
    }

    const cartItems =getState().cartReducer.cartItems

    localStorage.setItem('cartItems',JSON.stringify(cartItems))
}

export const deleteFromCart =(product)=>(dispatch,getState)=>{
    dispatch({type:'DELETE_FROM_CART',payload:product})


    const cartItems =getState().cartReducer.cartItems

    localStorage.setItem('cartItems',JSON.stringify(cartItems))

}

