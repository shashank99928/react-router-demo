import React from "react";
import { Link, Route} from "react-router-dom";

import "./App.css";

const HomePage = (props) => {
   console.log(props);
  return (
    <div>
    <button onClick={()=>props.history.push('/topics')}>Topics</button>
      <h1>HOME PAGE</h1>
    </div>
  );
};

const TopicsList = (props) => {
  console.log(props);
  return (
    <div>
     <Link to={`${props.match.url}/13`}>Hello to 13</Link>
     <Link to={`${props.match.url}/14`}>Hello to 14</Link>
     <Link to={`${props.match.url}/15`}>Hello to 15</Link>
      <h1>TOPIC LIST PAGE</h1>
    </div>
  );
};

const TopicDetail = (props) => {
console.log(props);
  return (
    <div>
      <h1>TOPIC DETAIL PAGE: {props.match.params.topicId}</h1>
    </div>
  );
};

function App() {
  return (
    <div>
  
        <Route exact path="/" component={HomePage} />
        <Route exact path="/topics" component={TopicsList} />
        <Route path="/topics/:topicId" component={TopicDetail} />
     
    </div>
  );
}

export default App;
