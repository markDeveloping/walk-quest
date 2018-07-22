
import  React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Logo from './img/wq-logo.PNG';
import walks from './walks/Walks';

const BasicExample = () => (
  <Router>
    <div>
    <div className  ="logo">
    <img src={Logo} alt="" />
    </div>
      <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/walks">Find a walk</Link>
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
  <span className="column-12">
    <h1>Home</h1>
    </span>
    <div className="column-9 feature">

    <div className="img-column-4">
      <img src="http://via.placeholder.com/200x200" alt="Placeholder." />
    </div>
    <div className="column-8">
      <p>Making walks more exciting, for kids and big kids.</p>
    </div>
    </div>
    <div className="column-12">
    <h2>How it works</h2>
  <section className="steps steps-area">
            <div className="container">
    
                <ul className="timeline">
    
                    <li className="timeline-box wow fadeInLeft">
                        <i className="icon-layers"></i>
                        <p className="timeline-title">Step 1</p>
                        <p className="timeline-details">Find a walk</p>
                        <p className="timeline-details">No walks in your preferred location, don't worry, you can create one of your own to share with our community.</p>
                        <span>1</span>
                    </li>
    
                    <li className="timeline-box wow fadeInRight">
                        <i className="icon-chat"></i>
                        <p className="timeline-title">Step 2</p>
                        <p className="timeline-details">Setup your team</p>
                        <span>2</span>
                    </li>
    
                    <li className="timeline-box  wow fadeInLeft">
                        <i className="icon-tools"></i>
                        <p className="timeline-title">Step 3</p>
                        <p className="timeline-details">Go to the starting point</p>
                        <span>3</span>
                    </li>
    
                    <li className="timeline-box wow fadeInRight">
                        <i className="icon-trophy"></i>
                        <p className="timeline-title">Step 4</p>
                        <p className="timeline-details">Follow the clues to progress the walk, speed is of the essence if you want to be on top of the leader board.</p>
                        <span>4</span>
                    </li>

                    <li className="timeline-box wow fadeInRight">
                        <i className="icon-trophy"></i>
                        <p className="timeline-title">Step 5</p>
                        <p className="timeline-details">Complete the walk, get a badge and provide a review for other walkers to use.</p>
                        <span>5</span>
                    </li>
    
                </ul>
            </div>                    
    
          </section>
          </div>
            </div>
);


export default BasicExample;