import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {drivers} from '../reducers/drivers';
import {composeWithDevTools} from 'redux-devtools-extension';

const rootReducer = combineReducers({
  drivers,
});

const configureStore = () =>
  createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default configureStore;
