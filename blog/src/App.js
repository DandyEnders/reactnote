import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  // Changing the variable itself does not reflect on html.
  let post = "The best double double in town.";
  // Changing the state reflects on html.
  // let [title1, b] = useState("Best small coffee.")
  // let [title2, b2] = useState("Second best is the medium coffee.");
  // let [title3, b3] = useState("Actually, large is good enough to share!");
  let [title, setTitle] = useState(["The small is supreme.", "Medium is premium.", "Large for a share!"]);
  
  return (
    <div className="App" >
      <div className="black-nav">
        <h4>Blog</h4>
      </div>
      <div className="list">
        <h4>{ title[0] }</h4>
        <p>April-20th</p>
      </div>
      <div className="list">
        <h4>{ title[1] }</h4>
        <p>Feb-20th</p>
      </div>
      <div className="list">
        <h4>{ title[2] }</h4>
        <p>Jan-20th</p>
      </div>
    </div>
  );
}

export default App;