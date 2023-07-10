const initialState = {
    state:false,

  };
  export default function themeReducer(state = initialState, payload) {
    switch (payload.type) {
      case 'changeToDarkMode':
        return {
          state:payload.state
        };
      case 'changeToLightMode':
        return {
          state:payload.state
        };
      
      default:
        return state;
    }
  }
  