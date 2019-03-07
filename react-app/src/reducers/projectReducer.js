import imagesAsset from "../assets/imagesAsset";
import { GET_PROJECTS, DELETE_PROJECT } from "../actions/types";
import uuid from "uuid";

const {
  GitHubFinderImg,
  AddBookJSMasterImg,
  JSFetchAPIMasterImg,
  JSFormValidationMasterImg,
  JSWeatherImg,
  SynprotechImg,
  TaskListJSImg,
  YiiBlogImg,
  YiiShopImg,
  ClientPanel,
  ContactList
} = imagesAsset;

const initialState = {
  projects: [
    {
      id: 1,
      projectName: "GitHub Finder",
      projectLink: "https://volosgoto.github.io/GitHub_Finder/",
      image: GitHubFinderImg,
      description:
        "Pure JavaScript application, uses GitHub API for users search\
      Uses HTML CSS, JavaScript, Bootstrap",

      githubLink: "https://github.com/volosgoto/GitHub_Finder",
      linkTitle: "Try it"
    },
    {
      id: 2,
      projectName: "Add_Book_JS",
      projectLink: "https://volosgoto.github.io/Add_Book_JS/",
      image: AddBookJSMasterImg,
      description:
        "Pure JavaScript application,\
      Uses HTML CSS, JavaScript, Bootstrap",
      githubLink: "https://github.com/volosgoto/Add_Book_JS",
      linkTitle: "Try it"
    },
    {
      id: uuid(),
      projectName: "JS_FETCH_API",
      projectLink: "https://volosgoto.github.io/JS_FETCH_API/",
      image: JSFetchAPIMasterImg,
      description: "",
      githubLink: "https://github.com/volosgoto/JS_FETCH_API",
      linkTitle: "Try it"
    },
    {
      id: uuid(),
      projectName: "JS_Form_Validation",
      projectLink: "https://volosgoto.github.io/JS_Form_Validation/",
      image: JSFormValidationMasterImg,
      description: "No description",
      githubLink: "https://github.com/volosgoto/JS_Form_Validation",
      linkTitle: "Try it"
    },
    {
      id: uuid(),
      projectName: "JS_Weather",
      projectLink: "http://www.weather.infokus.org.ua/",
      image: JSWeatherImg,
      description: "No description",
      githubLink: "https://github.com/volosgoto/JS_Weather",
      linkTitle: "Try it"
    },
    {
      id: uuid(),
      projectName: "TaskList_JS",
      projectLink: "https://volosgoto.github.io/TaskList_JS/",
      image: TaskListJSImg,
      description: "No description",
      githubLink: "https://github.com/volosgoto/TaskList_JS",
      linkTitle: "Try it"
    },
    {
      id: uuid(),
      projectName: "Yii blog",
      projectLink: "http://blog.infokus.org.ua/",
      image: YiiBlogImg,
      description: "Blog app. Using Yii 2, MySQL, Bootstrap",
      githubLink: "https://github.com/volosgoto/yiiblog",
      linkTitle: "Try it"
    },
    {
      id: uuid(),
      projectName: "Yii shop",
      projectLink: "http://infokus.org.ua/",
      image: YiiShopImg,
      githubLink: "https://github.com/volosgoto/yiidip",
      description: "Web-shop app. Using Yii 2, MySQL, Bootstrap",
      linkTitle: "Try it"
    },
    {
      id: uuid(),
      projectName: "Synprotech Engineering LLC",
      projectLink: "http://synproeng.com/",
      image: SynprotechImg,
      description:
        "Engineering Company web-site. Using Yii, MySQL, W3.CSS framework",
      githubLink: "https://github.com/volosgoto/synprotech",
      linkTitle: "Try it"
    },
    {
      id: uuid(),
      projectName: "Client Panel",
      projectLink: "https://reactclientpanel-c8995.firebaseapp.com/",
      image: ClientPanel,
      description:
        "Adnin Client Panel App. Using React, Redux, Firebase, Bootstrap",
      githubLink: "https://github.com/volosgoto/reactcontactpanelfirebase",
      linkTitle: "Try it"
    },
    {
      id: uuid(),
      projectName: "Contact List",
      projectLink: "http://panel.knifoman.com/",
      image: ContactList,
      description:
        "Contact List App. Using React, Redux, Bootstrap, JSONPlaceholder REST API",
      githubLink: "https://github.com/volosgoto/contactmanager_redux",
      linkTitle: "Try it"
    }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PROJECTS: {
      return { ...state };
    }
    case DELETE_PROJECT: {
      return {
        ...state,

        projects: state.projects.filter(
          project => {
            return project.id !== action.payload;
          }
          // project.id !== action.payload
        )
      };
    }
    default:
      return state;
  }
}
