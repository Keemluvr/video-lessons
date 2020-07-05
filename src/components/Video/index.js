import React from "react";

import { connect } from "react-redux";
import * as S from "./styled"

const Video = ({ activeModule, activeLesson }) => {
  return (
    <S.CurrentLesson>
      { activeModule.title ? (
      <>
        <S.ModuleTitle>Módulo: {activeModule.title}</S.ModuleTitle>
        <S.LessonTitle>Aula: {activeLesson.title}</S.LessonTitle>
        <S.Video>Vídeo</S.Video>
      </>
      )
      : 
      <S.Alert>Selecione uma aula ao lado</S.Alert>
      }
   </S.CurrentLesson>
  );
};

export default connect((state) => ({
  activeLesson: state.course.activeLesson,
  activeModule: state.course.activeModule,
}))(Video);
