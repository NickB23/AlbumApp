import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import AlbumList from "./AlbumList";
import AlbumDetail from "./AlbumDetail";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact component={AlbumList} />
        <Route path="/albums" exact component={AlbumList} />
        <Route path="/album/:albumId" exact component={AlbumDetail} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
