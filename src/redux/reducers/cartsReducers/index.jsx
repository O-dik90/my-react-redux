const initialState = {
    carts: [],
    cartsNumb: 0,
    cartsPrice:0
}

export default function CartsReducers(state = initialState, action) {
    switch (action.type) {
        case "ADDCART":
            return {
                ...state,
                carts: action.payload,
                cartsNumb: state.carts.length
            };
        default:
            return state;
    }
}