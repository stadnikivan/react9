import React, { useState } from 'react'
import { bindActionCreators, Dispatch } from "redux"
import {connect} from 'react-redux'
import * as actions from '../../store/thimbles/actions'
import { IRootState, IRootActions } from '../../store/rootReducer'

const mapStateToProps = (state: IRootState) => {
    return {
        randomValue: state.thimbles.randomValue,
    }
}

const mapDispatchToProps = (dispatch: Dispatch<IRootActions>) =>  //// check this
    bindActionCreators(
        {newRandomValue: actions.newRandomValueAction,
        checkValueAction: actions.checkValueAction},
            dispatch
    )
type CounterProps = ReturnType<typeof mapStateToProps> &
    ReturnType<typeof mapDispatchToProps>;
    const Counter: React.FC<CounterProps> = props => {
        const [value, setValue] = useState('')
        const checkValue = (e: React.KeyboardEvent) => {
            const enterValue = Number(e.key)
            if (!enterValue || (enterValue > 3 || enterValue < 1)) { 
                e.preventDefault();
                e.stopPropagation();
                return;
            } 
            props.checkValueAction(enterValue, props.randomValue)
            setValue('')   
        }
    const clearValue = (e: React.FormEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    } 
return(
        <React.Fragment>
        <p >Random Number {props.randomValue}</p>
        <input type='text' onKeyDown={checkValue} value={value} onChange={clearValue}/>
        </React.Fragment>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Counter));