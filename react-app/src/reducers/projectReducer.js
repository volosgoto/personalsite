import imagesAsset from "../assets/imagesAsset";
import { GET_PROJECTS } from "../actions/types";
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

const initialState = {
  projects: [
    {
      id: uuid(),
      projectName: "GitHub Finder",
      projectLink: "https://volosgoto.github.io/GitHub_Finder/",
      image: GitHubFinderImg,
      linkTitle: "Try it"
    },
    {
      id: uuid(),
      projectName: "Add_Book_JS",
      projectLink: "https://volosgoto.github.io/Add_Book_JS/",
      image: AddBookJSMasterImg,
      linkTitle: "Try it"
    },
    {
      id: uuid(),
      projectName: "JS_FETCH_API",
      projectLink: "",
      image: JSFetchAPIMasterImg,
      linkTitle: "Try it"
    },
    {
      id: uuid(),
      projectName: "JS_Form_Validation",
      projectLink: "https://volosgoto.github.io/JS_Form_Validation/",
      image: JSFormValidationMasterImg,
      linkTitle: "Try it"
    },
    {
      id: uuid(),
      projectName: "JS_Weather",
      projectLink: "https://volosgoto.github.io/JS_Weather/",
      image: JSWeatherImg,
      linkTitle: "Try it"
    },
    {
      id: uuid(),
      projectName: "TaskList_JS",
      projectLink: "https://volosgoto.github.io/TaskList_JS/",
      image: TaskListJSImg,
      linkTitle: "Try it"
    },
    {
      id: uuid(),
      projectName: "Yii blog",
      projectLink: "http://blog.infokus.org.ua/",
      image: YiiBlogImg,
      linkTitle: "Try it"
    },
    {
      id: uuid(),
      projectName: "Yii shop",
      projectLink: "http://infokus.org.ua/",
      image: YiiShopImg,
      linkTitle: "Try it"
    },
    {
      id: uuid(),
      projectName: "Synprotech Engineering LLC",
      projectLink: "http://synproeng.com/",
      image: SynprotechImg,
      linkTitle: "Try it"
    }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PROJECTS: {
      return { ...state };
    }
    default:
      return state;
  }
}
