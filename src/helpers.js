export const createReducer = function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    } else {
      return state;
    }
  };
};

const handler = namespace => payload => ({ payload, type: namespace });

const createActionCreator = TYPES => {
  const res = handler(TYPES.name);

  res.type = TYPES.name;

  res.start = handler(TYPES.start);
  res.start.type = TYPES.start;

  res.onLoadChange = handler(TYPES.onLoadChange);
  res.onLoadChange.type = TYPES.onLoadChange;

  res.succeed = handler(TYPES.succeed);
  res.succeed.type = TYPES.succeed;

  res.failed = handler(TYPES.failed);
  res.failed.type = TYPES.failed;

  return res;
};

export const actionCreator = (pfx, action_name) => {
  const name = `${pfx}_${action_name}`.toUpperCase();
  const TYPES = {
    name,
    start: `${name}_START`,
    onLoadChange: `${name}_ON_LOAD_CHANGE`,
    succeed: `${name}_SUCCEED`,
    failed: `${name}_FAILED`
  };

  return createActionCreator(TYPES);
};
