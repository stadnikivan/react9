import { combineReducers } from 'redux'
import thimblesReducer from './thimbles/reducers'
import { StateType } from 'typesafe-actions';
import { ThimblesAction } from './thimbles/types';

const rootReducers = combineReducers({
    thimbles: thimblesReducer
})

export type IRootState = StateType<typeof rootReducers>
export type IRootActions = ThimblesAction
export default rootReducers;
