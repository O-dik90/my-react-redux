import { createStore ,applyMiddleware,compose} from "redux";
import reducers from "./reducers";
import thunk  from "redux-thunk";

const store = createStore(
    reducers,
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
export default store
