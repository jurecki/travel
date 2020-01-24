/* SELECTORS */

export const getAllFilters = ({filters}) => {
  console.log(filters);
  
  return filters;
};

/* ACTIONS */

// action name creator
const reducerName = 'filters';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_PHRASE = createActionName('CHANGE_PHRASE');
// TODO - add other action types
export const ADD_TAGS = createActionName('ADD_TAGS');
export const REMOVE_TAGS = createActionName('ADD_TAGS');
export const CHANGE_DURATION = createActionName('CHANGE_DURATION');

// action creators
export const changeSearchPhrase = payload => ({ payload, type: CHANGE_PHRASE });

// TODO - add other action creators
export const addTags = payload => ({ payload, type: ADD_TAGS });
export const removeTags = payload => ({payload, type: REMOVE_TAGS});

export const changeDuration = payload => ({ payload: {...payload}, type: CHANGE_DURATION });

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_PHRASE:
      return {
        ...statePart,
        searchPhrase: action.payload,
      };
    // TODO - handle other action types
    case CHANGE_DURATION:
      return {
        ...statePart,
        duration: action.payload,
      };

    case ADD_TAGS:
      return {
        ...statePart,
        tags: action.payload,
      };  

    case REMOVE_TAGS:
      return {
        ...statePart,
        tags: action.payload,
      };  
    default:
      return statePart;
  }
}
