import { all, spawn} from 'redux-saga/effects'
import {checkThimblesValueSaga} from './thimbles/sagas'

export default function* rootSaga() {
    yield all([spawn(checkThimblesValueSaga)])
}