
const defaultState = ['Par défaut 1', 'Par défaut 2'];

const testing = (state = defaultState, action) => {
  
  switch(action.type){
    case 'ADD_ELEMENT':
      const copy = [...state];
      copy.push(action.element);
      return copy;
    default:
      return state;

  }

}

export default testing;