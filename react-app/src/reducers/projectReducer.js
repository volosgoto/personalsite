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
  YiiShopImg
} = imagesAsset;

let des =
  "Pure JavaScript application, ises GitHub API for users search\
Uses HTML CSS, JavaScript, Bootstrap";

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
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde natus suscipit animi atque aspernatur repudiandae. Aspernatur assumenda placeat necessitatibus autem officia. Explicabo eligendi rerum quam ullam architecto aliquam. Optio, enim.",
      githubLink: "https://github.com/volosgoto/Add_Book_JS",
      linkTitle: "Try it"
    },
    {
      id: uuid(),
      projectName: "JS_FETCH_API",
      projectLink: "https://volosgoto.github.io/JS_FETCH_API/",
      image: JSFetchAPIMasterImg,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, molestiae. Quibusdam molestiae iure, magni ea harum numquam maxime tempore, necessitatibus quasi, tenetur facilis iste possimus et impedit nihil doloremque nulla?",
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
      description: "No description",
      githubLink: "https://github.com/volosgoto/yiiblog",
      linkTitle: "Try it"
    },
    {
      id: uuid(),
      projectName: "Yii shop",
      projectLink: "http://infokus.org.ua/",
      image: YiiShopImg,
      githubLink: "https://github.com/volosgoto/yiidip",
      description: "No desc",
      linkTitle: "Try it"
    },
    {
      id: uuid(),
      projectName: "Synprotech Engineering LLC",
      projectLink: "http://synproeng.com/",
      image: SynprotechImg,
      description: "No description",
      githubLink: "https://github.com/volosgoto/synprotech",
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
