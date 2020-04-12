import {take, put} from 'redux-saga/effects'
import * as actions from './actions'

export function* checkThimblesValueSaga() {
    while (true) {
        const {payload: {enterKey, randomValue}} = yield take(actions.checkValueAction)
        if (enterKey === randomValue) {
            alert('Success’')
            yield put(actions.newRandomValueAction())
        } else {
            console.error('Error')
        }
    }
}