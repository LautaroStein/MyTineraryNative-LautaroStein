import { createStore, applyMiddleware, compose  } from "redux"
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import mainReducer from './redux/reducers/mainReducer';
import App2 from "./App2";


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reduxStore = createStore(mainReducer, composeEnhancer(applyMiddleware(thunk)))





export default function App() {
  return (
    <Provider store={reduxStore} > 
      <App2 />
    </Provider>
  );
}

