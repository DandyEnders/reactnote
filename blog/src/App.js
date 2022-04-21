// /* eslint-disable */ disables lint

// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  // Changing the variable itself does not reflect on html.
  // let post = "The best double double in town.";
  // Changing the state reflects on html.
  // let [title1, b] = useState("Best small coffee.")
  // let [title2, b2] = useState("Second best is the medium coffee.");
  // let [title3, b3] = useState("Actually, large is good enough to share!");
  let [title, setTitle] = useState(["The small is supreme.", "Medium is premium.", "Large for a share!"]);
  let [thumbsUp, thumbsUpChange] = useState(0);
  let [isModal, setIsModal] = useState(false);
  
  
  return (
    <div className="App" >
      <div className="black-nav">
        <h4>Blog</h4>
      </div>

      <button onClick={() => {
        let temp = [...title];
        temp[0] = "The tea is supreme.";
        setTitle(temp);
      }}>For the Tea gangs!</button>

      <button onClick={() => {
        let temp = [...title];
        temp.sort();
        setTitle(temp);
      }}>Sort by Alphabet</button>

      <div className="list">
        <h4>{title[0]}<span onClick={() => { thumbsUpChange(thumbsUp + 1) }}>👍</span> {thumbsUp} </h4>
        <p>April-20th</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>Feb-20th</p>
      </div>
      <div className="list">
        <h4 onClick={()=>{ setIsModal(!isModal); }}>{title[2]}</h4>
        <p>Jan-20th</p>
      </div>
      
      {
        isModal === true ? <Modal/> : null
      }

    </div>
  );
}

// Frequently changed or used may be used as function
function Modal() {
  return (
    <>
      <div>
        <div className='modal'>
          <h4>Title</h4>
          <p>Date</p>
          <p>Details</p>
        </div>
      </div>
    </>
  )
}

export default App;