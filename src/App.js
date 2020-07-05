import React from "react";
import { Provider } from "react-redux";

import Sidebar from "./components/Sidebar";
import Video from "./components/Video";

import GlobalStyles from "./styles/global";
import * as S from "./styles/base";

import store from "./store";

function App() {
  return (
    <S.Body className="App">
      <GlobalStyles />
      <Provider store={store}>
        <Video />
        <Sidebar />
      </Provider>
    </S.Body>
  );
}

export default App;
