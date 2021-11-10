import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../redux/actions/courseActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

class CoursesPage extends React.Component {
  state = {
    course: {
      title: "",
    },
  };

  handleChange = (event) => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course: course });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.actions.createCourse(this.state.course);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>CoursesPage</h1>
          <h3>Add Courses</h3>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.course.title}
          />
          <input type="submit" value="Save"></input>
          {this.props.courses.map((course) => (
            <div key={course.title}>{course.title}</div>
          ))}
        </form>
      </div>
    );
  }
}

CoursesPage.propTypes = {
  createCourse: PropTypes.func.isRequired,
  actions: PropTypes.array.isRequired,
};

//Remember, map state to props will actually confirm which part of the state will be exposed to component?
// It receives 2 arguments - just state and own props
// be Specific which part of the state you wish to connect. if you dont specify the app will reload

function mapStateToProps(state) {
  return {
    courses: state.courses,
  };
}

//Match dispatch to props will confirm on the action which is exposed to component
//
function mapDispatchToProps(dispatch) {
  return {
    createCourse: bindActionCreators(courseActions, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
