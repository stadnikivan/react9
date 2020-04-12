import {createAction} from 'typesafe-actions'

export const newRandomValueAction = createAction(
    "thimbles/NEW_RANDOM_VALUE"
)();
export const checkValueAction = createAction(
    "thimbles/CHECK_VALUE_ACTION", (enterKey: number, randomValue: number) => ({enterKey, randomValue})
)();
