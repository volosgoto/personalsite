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
      linkTitle
    } = this.props.project;
    const { showProjectInfo } = this.state;
    return (
      <li className="w3-bar">
        <div className="w3-row">
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

          <div className="w3-third" />
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
              <img
                src={image}
                alt="project title image"
                className="w3-image w3-card w3-margin-top"
                style={{ width: "100px" }}
              />

              {/* <div className="w3-card-4 w3-margin" /> */}

              <p className="">{description}</p>
              <div className="w3-rest w3-padding-16 w3-center">
                <a href={projectLink} className="w3-large">
                  {linkTitle}
                </a>
              </div>
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
