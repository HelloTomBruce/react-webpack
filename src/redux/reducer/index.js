import { combineReducers } from 'redux'
import count from './counter.js'
import list from './list.js'
import login from './login'

const rootReducer = combineReducers({
    count,
    list,
    login
})

export default rootReducer