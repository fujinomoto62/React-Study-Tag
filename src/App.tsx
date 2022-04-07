import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { List } from "./components/list/List";
import { Search } from "./components/search/Search";
import { About } from "./components/About";
import { UserDetail } from "./components/userdetail/UserDetail";
import {UserInformation} from './components/userdetail/UserInformation';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/list">
          <h3>LIST</h3>
        </Link>
        <Link to="/search">
          <h3>SEARCH</h3>
        </Link>
        <Link to="/about">
          <h3>ABOUT</h3>
        </Link>
      </nav>
      <h1>APP PAGE</h1>
      <Routes>
        <Route path="/" element={<>まずはAboutから</>} />
        <Route path="list" element={<List />}/>
        <Route path="search" element={<Search />} />
        <Route path="about" element={<About />} />
        <Route path="userdetail" element={<UserDetail/>} >
          <Route index element={<h3>index</h3>} />
          <Route path=":id" element={<UserInformation/>} />
        </Route>
        <Route path="*" element={<h2>404 Not Found.</h2>} />
      </Routes>
    </div>
  );
}

export default App;
