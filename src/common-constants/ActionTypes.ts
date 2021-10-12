const buildActionType: any = (eventType: string) => {
  return {
    PROCESSING: `${eventType}.PROCESSING`,
    SUCCESS: `${eventType}.SUCCESS`,
    FAIL: `${eventType}.FAIL`
  }
}

export const FETCH_CARDS = buildActionType('FETCH_CARDS');

export const ADD_CARD = buildActionType('ADD_CARD');
export const EDIT_CARD = buildActionType('EDIT_CARD');
export const DELETE_CARD = buildActionType('DELETE_CARD');
export const MOVE_CARD  = buildActionType('MOVE_CARD');
