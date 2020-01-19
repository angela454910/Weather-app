export const TOGGLE_UNIT = "TOGGLE_UNIT";
export const SET_SEARCH = "SET_SEARCH";

export const toggleUnit = () => ({
  type: TOGGLE_UNIT
});

export const setSearch = input => ({
  type: SET_SEARCH,
  input
});
