import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogList from "./BlogList";
import BlogPost from "./BlogPost";

const Blogparent = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/blog" component={BlogList} />
        <Route exact path="/blog/:postId" component={BlogPost} />
      </Routes>
    </Router>
  );
};

export default Blogparent;
