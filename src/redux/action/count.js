import { ADD, DEC } from '../action-type/count'

export const addCount = (num) => {
    return {
        type: ADD,
        payload: {
            num
        }
    }
}

export const decCount = num => ({
    type: DEC,
    payload: {
        num
    }
})