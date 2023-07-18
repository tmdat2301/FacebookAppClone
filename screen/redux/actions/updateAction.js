export const updateEmail = email => async dispatch => {
  try {
    // side-effect, call to server or do smth async (middleware redux thunk)
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
    dispatch({
        type: 'update_email',
        email:email
    })
  } catch (error) {}
};

export const updateId = id => async dispatch => {
  try {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 3000);
    });
    dispatch({
        type: 'update_id',
        id:id
    })
  } catch (error) {}
};
export const themeToDark = mode => async dispatch => {
  try {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 0);
    });
    dispatch({
        type: 'changeToDarkMode',
        state: true
    })
  } catch (error) {}
};
export const themeToLight = mode => async dispatch => {
  try {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 0);
    });
    dispatch({
        type: 'changeToLightMode',
        state: false
    })
  } catch (error) {}
};
