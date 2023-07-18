const initialState = {
  email: '',
  score: 0,
  address: '',
  id: '',
};
export default function actionForReducer(state = initialState, payload) {
  switch (payload.type) {
    case 'update_email':
      return {
        ...state,
        email: payload.email,
      };
    case 'update_id':
      return {
        ...state,
        id: payload.id,
      };
    case 'changeTheme':
      return {
        state: true,
        id: payload.id,
      };
    default:
      return state;
  }
}
