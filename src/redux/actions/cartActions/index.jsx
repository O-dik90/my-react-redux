export function cartsActions(payload){
    return (dispatch,getState)=>{
        const store = getState().CartReducers.carts
        const newList = store;

        let itemExist = false;
        store.forEach(itemCart => {
            if(itemCart.id === payload.id){
                itemExist =true;
                itemCart.countItem++;
            }
        });
        if(!itemExist){
            newList.push({
                ...payload,countItem:1
            })
        }
        // let grandTotal =0
        // for (let i in newList ){
        //     const grandTotal += newList.countPrice 
        // }
        dispatch({
            type:"ADDCART",
            payload:newList
        })
    }
}