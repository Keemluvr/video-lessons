import React, { useState } from "react";

import { connect } from "react-redux";

import * as CourseActions from "../../store/actions/course";
import { bindActionCreators } from "redux";

import * as S from "./styled";

const Sidebar = ({ modules, toggleLesson }) => {
  const [buttonActive, setButtonActive] = useState(false);
  const [chosenClass, setChosenClass] = useState(false);

  const handleButtonChoiceLesson = (e, module, lesson) => {
    toggleLesson(module, lesson);
    setChosenClass(e.currentTarget.innerText);
  };

  return (
    <S.Sidebar>
      {modules.map((module) => (
        <S.Module key={module.id}>
          <S.ModuleTitle>{module.title}</S.ModuleTitle>
          <ul>
            {module.lessons.map((lesson) => (
              <li key={lesson.id}>
                <S.ButtonChoiceLesson
                  className={lesson.title === chosenClass && "enable"}
                  onClick={(e) => handleButtonChoiceLesson(e, module, lesson)}
                >
                  {lesson.title}
                </S.ButtonChoiceLesson>
              </li>
            ))}
          </ul>
        </S.Module>
      ))}
    </S.Sidebar>
  );
};

const mapStateToProps = (state) => ({
  modules: state.course.modules,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CourseActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
