export default function({dispatch}) {
  return next => action => {
    if (action.payload && action.payload.then) {
      action.payload.then(response => {
        const newAction = {...action, payload: response.data};

        dispatch(newAction);
      });
    }

    next(action);
  }
}
