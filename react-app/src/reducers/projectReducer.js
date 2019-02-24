import GitHubFinderImg from '../images/projects/GitHub Finder.png';
import AddBookJSMasterImg from '../images/projects/Add Book.png';
import { GET_PROJECTS } from '../actions/types';

import uuid from 'uuid';





const initialState = {
  projects: [
    {
      id: uuid(),
      projectName: 'GitHub Finder',
      projectLink: '/app/src/GitHub_Finder-master/index.html',
      image: GitHubFinderImg,
      linkTitle: 'Try it'
    },
    {
      id: uuid(),
      projectName: 'Add_Book_JS-master',
      projectLink: '/app/src/GitHub_Finder-master/index.html',
      image: AddBookJSMasterImg,
      linkTitle: 'Try it'
    }
  ]

};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PROJECTS: {
      return { ...state };
    }
    default:
      return state;
  }
}
