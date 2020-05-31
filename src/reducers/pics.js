import { Map } from 'immutable';

const initialState = Map({ loading: false });

const pics = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PIC':
      return state.set('loading', true);

    case 'PIC_FETCH_SUCCEEDED':
      return state
        .set('loading', false)
        .set(action.pic.id, {
          src: action.pic.src,
          title: action.pic.title,
          date: action.pic.date
        });

    case 'DELETE_PIC':
      return state.delete(action.id);

    default:
      return state;
  }
};

export default pics;
