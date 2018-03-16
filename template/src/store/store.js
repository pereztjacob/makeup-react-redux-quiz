import { createStore, combineReducers, compose } from 'redux';
// import { categories } from './components/budget/reducer';
import reduce from '../components/app/reducers';

const reducer = combineReducers({
  reduce
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
  reducer,
  composeEnhancers()
);

export default store;