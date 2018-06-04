import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Logo from "./img/wq-logo.PNG";

const BasicExample = () => (
  <Router>
    <div>
    <div class="logo">
    <img src={Logo} />
    </div>
      <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/geocaching">Geocaching</Link>
        </li>
        <li>
          <Link to="/find">Find and seek</Link>
        </li>
        <li>
          <Link to="/walks">Manage walks</Link>
        </li>

      </ul>
      </nav>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/walks" component={walks} />
    </div>
  </Router>
);

const Home = () => (
  <div>
    <h1>Home</h1>
    <div class="column-8 feature">
    <div class="img-column-4">
      <img src="http://via.placeholder.com/200x200" alt="Placeholder image" />
    </div>
    <div class="column-8">
      <p>Making walks more exciting, for kids and big kids.</p>
    </div>
    </div>
  </div>
);

const walks = () => (
  <div>
    <h1>Manage walks</h1>
  </div>
);

export default BasicExample;