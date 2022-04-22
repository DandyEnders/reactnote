// /* eslint-disable */ disables lint

// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

  // Changing the variable itself does not reflect on html.
  // let post = "The best double double in town.";
  // Changing the state reflects on html.
  // let [title1, b] = useState("Best small coffee.")
  // let [title2, b2] = useState("Second best is the medium coffee.");
  // let [title3, b3] = useState("Actually, large is good enough to share!");
  let [title, setTitle] = useState(["The small is supreme.", "Medium is premium.", "Large for a share!"]);
  let [thumbsUp, setThumbsUp] = useState([0, 0, 0]);
  let [isModal, setIsModal] = useState(true);
  let [nthTitle, nthTitleSet] = useState(0);
  let [inputValue, setInputValue] = useState("");


  let teaChangerFunc = () => {
    let temp = [...title];
    temp[0] = "The tea is supreme.";
    setTitle(temp);
  };
  return (
    <div className="App" >
      <div className="black-nav">
        <h4>Blog</h4>
      </div>

      <button onClick={teaChangerFunc}>For the Tea gangs!</button>

      <button onClick={() => {
        let temp = [...title];
        temp.sort();
        setTitle(temp);
      }}>Sort by Alphabet</button>

      {/* <div className="list">
        <h4>{title[0]}<span onClick={() => { thumbsUpChange(thumbsUp + 1) }}>👍</span> {thumbsUp} </h4>
        <p>April-20th</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>Feb-20th</p>
      </div>
      <div className="list">
        <h4 onClick={() => { setIsModal(!isModal); }}>{title[2]}</h4>
        <p>Jan-20th</p>
      </div> */}

      {
        title.map((a, i) => {
          return (
            <div className="list" key={i}>
              <h4 onClick={() => {
                setIsModal(!isModal);
                nthTitleSet(i);
              }}>{a} <span onClick={(e) => {
                e.stopPropagation();
                var temp = [...thumbsUp];
                temp[i] = temp[i] + 1;
                setThumbsUp(temp);
              }}>👍</span> {thumbsUp[i]}</h4>
              <p>Feb-20th</p>
              <button onClick={(e) => {
                e.stopPropagation();
                let temp;
                temp = [...title];
                temp.splice(i, 1);
                setTitle(temp);

                temp = [...thumbsUp];
                temp.splice(i, 1);
                setThumbsUp(temp);

              }}>Delete</button>
            </div>
          )
        })
      }

      <input onChange={(e) => {
        setInputValue(e.target.value);
      }}></input>
      <button onClick={(e) => {
        let temp;
        temp = [...title];
        temp.unshift(inputValue);
        setTitle(temp);

        temp = [...thumbsUp];
        temp.unshift(0);
        setThumbsUp(temp);
      }}>Submit</button>

      <Profile />

      {
        isModal === true ? <Modal teaFunc={teaChangerFunc} title={title[nthTitle]} /> : null
      }



    </div>
  );
}

// Frequently changed or used may be used as function
function Modal(props) {
  return (
    <>
      <div>
        <div className='modal' style={{ background: props.color }}>
          <h4>{props.title}</h4>
          <p>Date</p>
          <p>Details</p>
          <button onClick={props.teaFunc}>Edit</button>
        </div>
      </div>
    </>
  )
}

class Profile extends React.Component {
  constructor() {
    super();
    this.state = { name: "Jinho", age: 25 }
  }

  changeName = () => {
    this.setState({ name: "Hwang" });
  }

  render() {
    return (
      <div>
        <h3>This is my profile!</h3>
        <p>I am {this.state.name}.</p>
        <button onClick={this.changeName }>This is a button.</button>
      </div>
    )
  }
}

export default App;