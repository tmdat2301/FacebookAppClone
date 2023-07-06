export const updateEmail = email => async dispatch => {
  try {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 3000);
    });
    console.log('zzzzzzzzzzzzzzzzzz');
    dispatch({
        type: 'update_email',
        email:email
    })
  } catch (error) {}
};
