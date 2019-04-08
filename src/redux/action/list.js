import { GET_LIST } from "../action-type/list"

export const getList = url => ({
  type:    GET_LIST,
  payload: {
    url
  }
})
