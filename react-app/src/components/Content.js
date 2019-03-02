import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProjects } from "../actions/projectActions";

class Content extends Component {

  componentDidMount() {
    this.props.getProjects();
  }

  render() {
    const { projects } = this.props;
    return (
      <React.Fragment>
        <div className="w3-rest w3-container w3-mobile w3-margin-bottom">
          <div className="outer-box">
            <div className="box-1">
              <div className="w3-center">
                <a
                  className="git-hub w3-button"
                  href="https://github.com/volosgoto?tab=repositories"
                  target="_blank"
                >
                  <i className="fab fa-github fa-2x">&nbsp;GitHub</i>
                </a>
              </div>
            </div>
          </div>
          <div className="w3-center">
            <h4>Projects</h4>
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

Content.propTypes = {
  projects: PropTypes.array.isRequired, // projects from state
  getProjects: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  projects: state.project_redux.projects  // to call this.state.projects
  // test: state.project_redux.projects  // to call this.state.test
});

export default connect(
  mapStateToProps,
  { getProjects }
)(Content);
