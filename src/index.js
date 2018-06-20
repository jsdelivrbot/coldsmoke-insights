import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import promise from "redux-promise";

import reducers from "./reducers";
import PostsIndex from "./components/posts_index";
import PostsShow from "./components/posts_show";
import MenuAppBar from "./components/menu_app_bar";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div>
      <MenuAppBar />
        <Switch>
          <Route path="/posts/:id" component={PostsShow} />
          <Route path="/" component={PostsIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector(".body")
);
