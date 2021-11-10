// import React from "react";

// function CoursesPage() {
//   return (
//     <div className="container">
//       <h1>Courses Page</h1>
//     </div>
//   );
// }

// export default CoursesPage;
import React from "react";

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
    alert(this.state.course.title);
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
        </form>
      </div>
    );
  }
}

export default CoursesPage;
