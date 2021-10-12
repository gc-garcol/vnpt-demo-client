import * as ActionTypes from "common-constants/ActionTypes";

const initialState: { ids: any, byIds: any } = {
  ids: [],
  byIds: {}
}

const handlers: any = {}

handlers[ActionTypes.FETCH_CARDS.SUCCESS] = (state: any, action: any): any => {
  const data = action.payload;
  const byIds: any = {};
  data.forEach((card: any) => {
    byIds[card.id] = card;
  });
  return {
    ids: data.map((card: any) => card.id),
    byIds
  }
}

handlers[ActionTypes.ADD_CARD.SUCCESS] = (state: any, action: any): any => {
  const { id, content } = action.payload;
  return {
    ...state,
    ids: [...state.ids, id],
    byIds: {
      ...state.byIds,
      [id]: {
        content,
        completed: false
      }
    }
  }
}

handlers[ActionTypes.EDIT_CARD.SUCCESS] = (state: any, action: any): any => {
  const { card } = action.payload;
  const { id } = card;
  return {
    ...state,
    byIds: {
      ...state.byIds,
      [id]: {
        ...card
      }
    }
  }
}

handlers[ActionTypes.MOVE_CARD.SUCCESS] = (state: any, action: any): any => {
  const { oldPosition, newPosition } = action.payload;
  const ids = state.ids;
  const [removed] = ids.splice(oldPosition, 1);
  ids.splice(newPosition, 0, removed);
  return {
    ...state,
    ids
  }
}

handlers[ActionTypes.DELETE_CARD.SUCCESS] = (state: any, action: any): any => {
  const { id } = action.payload;
  const { ids, byIds } = state;
  delete byIds[id];
  return {
    byIds,
    ids: ids.filter((i: any) => i != id)
  }
}

const taskReducer = (state = initialState, action: any) => {
  return handlers[action.type]?.(state, action) ?? state;
}
export default taskReducer;
