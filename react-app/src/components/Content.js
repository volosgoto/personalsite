import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
import GitHubFinderImg from '../images/projects/GitHub Finder.png';
import AddBookJSMasterImg from '../images/projects/Add Book.png';

import uuid from 'uuid';


class Content extends Component {
  state = {
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
  }

  render() {
    const { projects } = this.state;
    return (
      <React.Fragment>
        <div className="w3-rest w3-container w3-mobile w3-margin-bottom">
          <div className="outer-box">
            <div className="box-1">
              <div>
                <a
                  className="w3-button w3-center"
                  href="https://github.com/volosgoto?tab=repositories"
                  target="_blank"
                >
                  <i className="fab fa-github fa-2x">&nbsp;GitHub</i>
                </a>
              </div>
            </div>
          </div>
          <div className="w3-center">
            <p>Projects</p>
          </div>
          <ul className="w3-ul w3-card-4">
            {
              projects.map(project => (
                <ProjectItem key={project.id} project={project} />
              ))
            }
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default Content;