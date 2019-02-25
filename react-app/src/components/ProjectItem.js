import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteProject } from "../actions/projectActions";

class ProjectItem extends Component {
  state = {
    showProjectInfo: false
  };

  onDeleteClick = id => {
    this.props.deleteProject(id);
  };

  render() {
    const {
      id,
      projectName,
      projectLink,
      image,
      linkTitle
    } = this.props.project;
    const { showProjectInfo } = this.state;
    return (
      <li className="w3-bar">
        <span
          // onClick={true}
          className="w3-bar-item w3-button w3-large w3-right"
          onClick={this.onDeleteClick.bind(this, id)}
        >
          <i
            className="fas fa-times"
            style={{ cursor: "pointer", float: "right", color: "teal" }}
          />
        </span>
        <div className="w3-bar-item">
          <span className="w3-large">{projectName}&nbsp;</span>
          <i
            onClick={() =>
              this.setState({
                showProjectInfo: !showProjectInfo
              })
            }
            className="fas fa-sort-down"
            style={{ cursor: "pointer" }}
          />
          <br />
          {showProjectInfo && (
            <div>
              <span>
                <a href={projectLink}>{linkTitle}</a>
              </span>
              <img
                src={image}
                alt="project title image"
                className="w3-bar-item w3-circle w3-hide-small"
                style={{ width: "85px" }}
              />
            </div>
          )}
        </div>
      </li>
    );
  }
}

ProjectItem.propTypes = {
  project: PropTypes.object.isRequired,
  deleteProject: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteProject }
)(ProjectItem);
