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
      description,
      githubLink,
      linkTitle
    } = this.props.project;
    const { showProjectInfo } = this.state;
    return (
      <li className="w3-bar">
        <span
          className=" w3-button w3-large w3-right"
          onClick={this.onDeleteClick.bind(this, id)}
        >
          <i
            className="fas fa-times"
            style={{ cursor: "pointer", float: "right", color: "teal" }}
          />
        </span>
        <span className="w3-large margin-top">{projectName}&nbsp;</span>
        <i
          onClick={() =>
            this.setState({
              showProjectInfo: !showProjectInfo
            })
          }
          className="fas fa-angle-down"
          style={{ cursor: "pointer" }}
        />
        {showProjectInfo && (
          <div className="w3-container w3-center">
            <p className="">{description}</p>
            <img
              src={image}
              alt="project title"
              className="w3-image w3-border w3-card-4 w3-center"
              style={{ width: "100%", maxWidth: "400px" }}
            />
            <div className="w3-rest w3-padding-16 w3-center">
              <a href={githubLink} className="w3-button w3-2018-quetzal-green">
                <i className="fab fa-github fa-lg" /> See on GitHub
                </a>
              <br />
              <br />
              <a href={projectLink} className="w3-button w3-teal">
                {linkTitle}
              </a>
            </div>
          </div>
        )}
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
