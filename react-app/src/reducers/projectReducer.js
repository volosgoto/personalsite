import {
  GET_PROJECTS,
} from '../actions/types';


const initialState = {
  projects: [
    {id: 1,
    title: 'Test'}
  ],

};

export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
