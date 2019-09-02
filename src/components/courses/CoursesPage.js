import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import * as authorActions from "../../redux/actions/authorActions";

import CourseList from "./CourseList";

class CoursesPage extends React.Component {

  componentDidMount() {
    const {loadAuthors, loadCourses}  = this.props;
    if (this.props.courses.length === 0) {
      loadCourses().catch(error => {
        alert("Loading courses failed" + error);
      });
    }

    if (this.props.authors.length === 0) {
      loadAuthors().catch(error => {
        alert("Loading authors failed" + error);
      });
    }
  }

  render() {  
    return (
      <>
        <h2>Courses</h2> 
        <CourseList courses={this.props.courses} />
      </>
    );
  }
}
// CoursesPage.propTypes = {
//   actions: PropTypes.array.isRequired,
//   courses: PropTypes.array.isRequired,
// };
//courseReducer : name of courseReducer
const mapStateToProps = state => (   {
  courses:
    state.authorReducer.authors.length === 0
      ? []
      : state.courseReducer.courses.map(course => {
          return {
            ...course,
            authorName: state.authorReducer.authors.find(a => a.id === course.authorId).name
          };
        }),
  authors: state.authorReducer.authors
});

const mapDispatchToProps = {
  createCourse: courseActions.createCourse,
  loadCourses: courseActions.loadCourses,
  loadAuthors: authorActions.loadAuthors
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoursesPage);
