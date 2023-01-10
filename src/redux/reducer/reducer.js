const initialState = {
  contact: [],
  keyword: "",
  contactList: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      const { name, num } = action.payload;
      return { ...state, contactList: [...state.contactList, { name, num }] };
    default:
      return state;
  }
};

export default reducer;
