import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';



class ProjectItem extends Component {
  state = {
    showProjectInfo: false
  }

  render() {
    const { id, projectName, projectLink, image, linkTitle } = this.props.project;
    const { showProjectInfo } = this.state;
    return (
      <li className="w3-bar">
        <span
          onClick={true}
          className="w3-bar-item w3-button w3-white w3-xlarge w3-right"
        >
          <i
            className="fas fa-times"
            style={{ cursor: 'pointer', float: 'right', color: 'red' }}
          // onClick={this.onDeleteClick.bind(this, id)}
          />
        </span>
        {/* <img
    src={'image'}
    alt="project title image"
    className="w3-bar-item w3-circle w3-hide-small"
    style="width:85px"
  /> */}
        <div className="w3-bar-item">
          <span className="w3-large">{projectName}</span>
          <i
            onClick={() =>
              this.setState({
                showProjectInfo: !this.state.showProjectInfo
              })
            }
            className="fas fa-sort-down"
            style={{ cursor: 'pointer' }}
          />
          <br />
          <span>
            <a href={projectLink}>linkTitle</a>
          </span>
        </div>
      </li>
    )
  }
}

ProjectItem.propTypes = {
  contact: PropTypes.object.isRequired
};


export default ProjectItem;

