const INITIAL_STATE = {
  description: "",
  list: [],
};

// Reducers / entrada: estado e action
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "DESCRIPTION_CHANGED":
      // evolui o estado alterando a descrição
      return { ...state, description: action.payload };
    case "TODO_SEARCHED":
      // evolui o estado alterando a lista
      return { ...state, list: action.payload };
    // evolui o estado limpando a descrição
    case "TODO_CLEAR":
      return { ...state, description: "" };
    default:
      return state;
  }
};
