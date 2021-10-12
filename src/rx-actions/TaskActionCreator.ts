import * as ActionTypes from "common-constants/ActionTypes"
import axios, { fakeAPICalling } from "common-network/Axios"

export const fetchTask = () => {
  // Interpreted by the thunk middleware
  return async (dispatch: any, getState: any) => {
    const taskId = localStorage.getItem('taskId');
    const endpoint = `/tasks/${taskId}/cards`
    const { data } = await axios.get(endpoint);
    dispatch({
      type: ActionTypes.FETCH_CARDS.SUCCESS,
      payload: data
    })
  }
}

export const addCard = (content: any) => {
  // Interpreted by the thunk middleware
  return async (dispatch: any, getState: any) => {
    const taskId = localStorage.getItem('taskId');
    const { data }: any = await axios.post('/cards', { content, completed: false, taskId })
    const { id } = data;
    dispatch({
      type: ActionTypes.ADD_CARD.SUCCESS,
      payload: {
        id: id,
        content
      }
    })
  }
}

export const editCard = (card: any) => {
  // Interpreted by the thunk middleware
  return async (dispatch: any, getState: any) => {
    await fakeAPICalling();
    dispatch({
      type: ActionTypes.EDIT_CARD.SUCCESS,
      payload: {
        card
      }
    })
  }
}

export const deleteCard = (id: any) => {
  // Interpreted by the thunk middleware
  return async (dispatch: any, getState: any) => {
    await axios.delete(`/cards/${id}`);
    dispatch({
      type: ActionTypes.DELETE_CARD.SUCCESS,
      payload: {
        id
      }
    })
  }
}

export const moveCard = (id: any, oldPosition: any, newPosition: any) => {
  // Interpreted by the thunk middleware
  return async (dispatch: any, getState: any) => {
    const taskId = localStorage.getItem('taskId');
    const endpoint = `/tasks/${taskId}/from/${oldPosition}/to/${newPosition}`;
    await axios.put(endpoint);
    dispatch({
      type: ActionTypes.MOVE_CARD.SUCCESS,
      payload: {
        id,
        oldPosition,
        newPosition
      }
    })
  }
}
