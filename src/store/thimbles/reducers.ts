import * as actions from "./actions"
import { getType } from "typesafe-actions";
import { ThimblesState, ThimblesAction } from "./types";

const getRandomNumber = (min: number, max: number): number => Math.floor(min + Math.random() * (max + 1 - min))
const initialState: ThimblesState = {
    randomValue: getRandomNumber(1, 3)
}

export default (state: ThimblesState = initialState, action: ThimblesAction) => {
    switch (action.type) {case getType(actions.newRandomValueAction):
            return{...state, randomValue: getRandomNumber(1, 3)};
    default:return state
    }
}