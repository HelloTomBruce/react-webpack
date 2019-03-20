import { combineReducers } from 'redux'
import count from './counter.js'
import list from './list.js'
import login from './login'
import solid from './solid'

const rootReducer = combineReducers({
    count,
    list,
    login,
    solid
})

export default rootReducer